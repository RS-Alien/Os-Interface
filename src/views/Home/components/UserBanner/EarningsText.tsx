import { ContextApi } from 'contexts/Localization/types'
import BigNumber from 'bignumber.js'

export const getEarningsText = (
  numFarmsToCollect: number,
  hasOsPoolToCollect: boolean,
  earningsUsdt: BigNumber,
  t: ContextApi['t'],
): string => {
  const data = {
    earningsUsdt: earningsUsdt.toString(),
    count: numFarmsToCollect,
  }

  let earningsText = t('%earningsUsdt% to collect', data)

  if (numFarmsToCollect > 0 && hasOsPoolToCollect) {
    if (numFarmsToCollect > 1) {
      earningsText = t('%earningsUsdt% to collect from %count% farms and OS pool', data)
    } else {
      earningsText = t('%earningsUsdt% to collect from %count% farm and OS pool', data)
    }
  } else if (numFarmsToCollect > 0) {
    if (numFarmsToCollect > 1) {
      earningsText = t('%earningsUsdt% to collect from %count% farms', data)
    } else {
      earningsText = t('%earningsUsdt% to collect from %count% farm', data)
    }
  } else if (hasOsPoolToCollect) {
    earningsText = t('%earningsUsdt% to collect from OS pool', data)
  }

  return earningsText
}
