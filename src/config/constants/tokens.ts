import { ChainId, Token } from '@oasisswap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wrose: new Token(
    MAINNET,
    '0x21C718C22D52d0F3a789b752D4c2fD5908a8A733',
    18,
    'WROSE',
    'Wrapped ROSE',
    'https://oasisprotocol.org',
  ),
  // rose here points to the wrose contract. Wherever the currency ROSE is required, conditional checks for the symbol 'ROSE' can be used
  rose: new Token(MAINNET, '0x21C718C22D52d0F3a789b752D4c2fD5908a8A733', 18, 'ROSE', 'ROSE', 'https://oasisprotocol.org'),
  os: new Token(
    MAINNET,
    '0xF1bfbC24f2C8c075Ea8f8ad976240bAD9a3eF50D',
    18,
    'OS',
    'OasisSwap Token',
    'https://oasisswap.org',
  ),
  syrup: new Token(
    MAINNET,
    '0x61fc9F19Fe0eC211dDF9C39E9D9F4D5AD1968947',
    18,
    'SYRUP',
    'Syrup token of OasisSwap Finance',
    'https://oasisswap.org',
  ),
  busd: new Token(
    MAINNET,
    '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
    18,
    'BUSD',
    'KCC-Peg Binance USD',
    'https://www.paxos.com/busd/',
  ),
  usdt: new Token(
    MAINNET,
    '0x0039f574eE5cC39bdD162E9A88e3EB1f111bAF48',
    18,
    'USDT',
    'Tether USD',
    'https://tether.to/',
  ),
  eth: new Token(
    MAINNET,
    '0xf55aF137A98607F7ED2eFEfA4cd2DfE70E4253b1',
    18,
    'ETH',
    'KCC-Peg Ethereum Token',
    'https://ethereum.org/en/',
  ),
  usdc: new Token(
    MAINNET,
    '0x980a5AfEf3D17aD98635F6C5aebCBAedEd3c3430',
    18,
    'USDC',
    'KCC-Peg USD Coin',
    'https://www.centre.io/usdc',
  ),
}

export const testnetTokens = {
  wrose: new Token(
    TESTNET,
    '0x792296e2a15e6Ceb5f5039DecaE7A1f25b00B0B0',
    18,
    'WROSE',
    'Wrapped ROSE',
    'https://oasisprotocol.org',
  ),
  os: new Token(
    TESTNET,
    '0xF1bfbC24f2C8c075Ea8f8ad976240bAD9a3eF50D',
    18,
    'OS',
    'OasisSwap Token',
    'https://oasisswap.org',
  ),
  usdt: new Token(
    TESTNET,
    '0x0039f574eE5cC39bdD162E9A88e3EB1f111bAF48',
    18,
    'USDT',
    'Tether USD',
    'https://tether.to/',
  ),
  busd: new Token(
    TESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    18,
    'BUSD',
    'Binance USD',
    'https://www.paxos.com/busd/',
  ),
  syrup: new Token(
    TESTNET,
    '0x61fc9F19Fe0eC211dDF9C39E9D9F4D5AD1968947',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://oasisswap.org',
  ),
}

const tokens = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()