import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { AutoRenewIcon, Button, Card, CardBody, Flex, Skeleton, Text, ArrowForwardIcon } from '@oasisswap/uikit'
import { Link } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { usePriceOsUsdt } from 'state/farms/hooks'
import useToast from 'hooks/useToast'
import { useMasterchef } from 'hooks/useContract'
import { harvestFarm } from 'utils/calls'
import Balance from 'components/Balance'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import { getEarningsText } from './EarningsText'

const StyledCard = styled(Card)`
  width: 100%;
  height: fit-content;
`

const HarvestCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { t } = useTranslation()
  const { toastSuccess, toastError } = useToast()
  const { farmsWithStakedBalance, earningsSum: farmEarningsSum } = useFarmsWithBalance()

  const masterChefContract = useMasterchef()
  const osPriceUsdt = usePriceOsUsdt()
  const earningsUsdt = new BigNumber(farmEarningsSum).multipliedBy(osPriceUsdt)
  const numTotalToCollect = farmsWithStakedBalance.length
  const numFarmsToCollect = farmsWithStakedBalance.filter((value) => value.pid !== 0).length
  const hasOsPoolToCollect = numTotalToCollect - numFarmsToCollect > 0

  const earningsText = getEarningsText(numFarmsToCollect, hasOsPoolToCollect, earningsUsdt, t)
  const [preText, toCollectText] = earningsText.split(earningsUsdt.toString())

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of farmsWithStakedBalance) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvestFarm(masterChefContract, farmWithBalance.pid)
        toastSuccess(
          `${t('Harvested')}!`,
          t('Your %symbol% earnings have been sent to your wallet!', { symbol: 'OS' }),
        )
      } catch (error) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
    }
    setPendingTx(false)
  }, [farmsWithStakedBalance, masterChefContract, toastSuccess, toastError, t])

  return (
    <StyledCard>
      <CardBody>
        <Flex flexDirection={['column', null, null, 'row']} justifyContent="space-between" alignItems="center">
          <Flex flexDirection="column" alignItems={['center', null, null, 'flex-start']}>
            {preText && (
              <Text mb="4px" color="textSubtle">
                {preText}
              </Text>
            )}
            {!earningsUsdt.isNaN() ? (
              <Balance
                decimals={earningsUsdt.gt(0) ? 2 : 0}
                fontSize="24px"
                bold
                prefix={earningsUsdt.gt(0) ? '~$' : '$'}
                lineHeight="1.1"
                value={earningsUsdt.toNumber()}
              />
            ) : (
              <Skeleton width={96} height={24} my="2px" />
            )}
            <Text mb={['16px', null, null, '0']} color="textSubtle">
              {toCollectText}
            </Text>
          </Flex>
          {numTotalToCollect <= 0 ? (
            <Link to="farms">
              <Button width={['100%', null, null, 'auto']} variant="secondary">
                <Text color="primary" bold>
                  {t('Start earning')}
                </Text>
                <ArrowForwardIcon ml="4px" color="primary" />
              </Button>
            </Link>
          ) : (
            <Button
              width={['100%', null, null, 'auto']}
              id="harvest-all"
              isLoading={pendingTx}
              endIcon={pendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}
              disabled={pendingTx}
              onClick={harvestAllFarms}
            >
              <Text color="invertedContrast" bold>
                {pendingTx ? t('Harvesting') : t('Harvest all')}
              </Text>
            </Button>
          )}
        </Flex>
      </CardBody>
    </StyledCard>
  )
}

export default HarvestCard
