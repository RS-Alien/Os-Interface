import tokens from './tokens'
import { SerializedFarmConfig } from './types'

const priceHelperLps: SerializedFarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absence of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: null,
    lpSymbol: 'USDT-ROSE LP',
    lpAddresses: {
      42261: '',
      42262: '0x1116b80fd0ff9a980dcfbfa3ed477bfa6bbd6a85',
    },
    token: tokens.usdt,
    quoteToken: tokens.wrose,
  },
]

export default priceHelperLps
