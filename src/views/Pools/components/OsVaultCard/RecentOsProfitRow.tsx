import React from 'react'
import { Flex, Text } from '@oasisswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { usePriceOsUsdt } from 'state/farms/hooks'
import { useOsVault } from 'state/pools/hooks'
import { getOsVaultEarnings } from 'views/Pools/helpers'
import RecentOsProfitBalance from './RecentOsProfitBalance'

const RecentOsProfitCountdownRow = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    pricePerFullShare,
    userData: { osAtLastUserAction, userShares, lastUserActionTime },
  } = useOsVault()
  const osPriceUsdt = usePriceOsUsdt()
  const { hasAutoEarnings, autoOsToDisplay, autoUsdToDisplay } = getOsVaultEarnings(
    account,
    osAtLastUserAction,
    userShares,
    pricePerFullShare,
    osPriceUsdt.toNumber(),
  )

  const lastActionInMs = lastUserActionTime && parseInt(lastUserActionTime) * 1000
  const dateTimeLastAction = new Date(lastActionInMs)
  const dateStringToDisplay = dateTimeLastAction.toLocaleString()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">{`${t('Recent OS profit')}:`}</Text>
      {hasAutoEarnings && (
        <RecentOsProfitBalance
          osToDisplay={autoOsToDisplay}
          dollarValueToDisplay={autoUsdToDisplay}
          dateStringToDisplay={dateStringToDisplay}
        />
      )}
    </Flex>
  )
}

export default RecentOsProfitCountdownRow
