import { ChainId, Currency, currencyEquals, JSBI, Price } from '@oasisswap/sdk'
import { useMemo } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import tokens, { mainnetTokens } from 'config/constants/tokens'
import { PairState, usePairs } from './usePairs'
import { wrappedCurrency } from '../utils/wrappedCurrency'

const USDT_MAINNET = mainnetTokens.usdt
const { wrose: WROSE } = tokens

/**
 * Returns the price in USDT of the input currency
 * @param currency currency to compute the USDT price of
 */
export default function useUSDTPrice(currency?: Currency): Price | undefined {
  const { chainId } = useActiveWeb3React()
  const wrapped = wrappedCurrency(currency, chainId)
  const tokenPairs: [Currency | undefined, Currency | undefined][] = useMemo(
    () => [
      [chainId && wrapped && currencyEquals(WROSE, wrapped) ? undefined : currency, chainId ? WROSE : undefined],
      [wrapped?.equals(USDT_MAINNET) ? undefined : wrapped, chainId === ChainId.MAINNET ? USDT_MAINNET : undefined],
      [chainId ? WROSE : undefined, chainId === ChainId.MAINNET ? USDT_MAINNET : undefined],
    ],
    [chainId, currency, wrapped],
  )
  const [[ethPairState, ethPair], [usdtPairState, usdtPair], [usdtEthPairState, usdtEthPair]] = usePairs(tokenPairs)

  return useMemo(() => {
    if (!currency || !wrapped || !chainId) {
      return undefined
    }
    // handle weth/eth
    if (wrapped.equals(WROSE)) {
      if (usdtPair) {
        const price = usdtPair.priceOf(WROSE)
        return new Price(currency, USDT_MAINNET, price.denominator, price.numerator)
      }
      return undefined
    }
    // handle usdt
    if (wrapped.equals(USDT_MAINNET)) {
      return new Price(USDT_MAINNET, USDT_MAINNET, '1', '1')
    }

    const ethPairETHAmount = ethPair?.reserveOf(WROSE)
    const ethPairETHUSDTValue: JSBI =
      ethPairETHAmount && usdtEthPair ? usdtEthPair.priceOf(WROSE).quote(ethPairETHAmount).raw : JSBI.BigInt(0)

    // all other tokens
    // first try the usdt pair
    if (
      usdtPairState === PairState.EXISTS &&
      usdtPair &&
      usdtPair.reserveOf(USDT_MAINNET).greaterThan(ethPairETHUSDTValue)
    ) {
      const price = usdtPair.priceOf(wrapped)
      return new Price(currency, USDT_MAINNET, price.denominator, price.numerator)
    }
    if (ethPairState === PairState.EXISTS && ethPair && usdtEthPairState === PairState.EXISTS && usdtEthPair) {
      if (usdtEthPair.reserveOf(USDT_MAINNET).greaterThan('0') && ethPair.reserveOf(WROSE).greaterThan('0')) {
        const ethUsdtPrice = usdtEthPair.priceOf(USDT_MAINNET)
        const currencyEthPrice = ethPair.priceOf(WROSE)
        const usdtPrice = ethUsdtPrice.multiply(currencyEthPrice).invert()
        return new Price(currency, USDT_MAINNET, usdtPrice.denominator, usdtPrice.numerator)
      }
    }

    return undefined
  }, [chainId, currency, ethPair, ethPairState, usdtEthPair, usdtEthPairState, usdtPair, usdtPairState, wrapped])
}

export const useOsUsdtPrice = (): Price | undefined => {
  const osUsdtPrice = useUSDTPrice(tokens.os)
  return osUsdtPrice
}

export const useROSEUsdtPrice = (): Price | undefined => {
  const roseUsdtPrice = useUSDTPrice(tokens.wrose)
  return roseUsdtPrice
}
