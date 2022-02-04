import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
   /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
    {
      pid: 0,
      lpSymbol: 'OS',
      lpAddresses: {
        42262: '0xF1bfbC24f2C8c075Ea8f8ad976240bAD9a3eF50D',
        42261: '0xF1bfbC24f2C8c075Ea8f8ad976240bAD9a3eF50D',
      },
      token: serializedTokens.syrup,
      quoteToken: serializedTokens.wrose,
    },
    {
      pid: 1,
      lpSymbol: 'OS-ROSE LP',
      lpAddresses: {
        42262: '0x3d15ac92c270b9c3c3bec77fb1f0f66f138b27d2',
        42261: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
      },
      token: serializedTokens.os,
      quoteToken: serializedTokens.wrose,
    },
    {
      pid: 2,
      lpSymbol: 'USDT-ROSE LP',
      lpAddresses: {
        42262: '0x1116b80fd0ff9a980dcfbfa3ed477bfa6bbd6a85',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.usdt,
      quoteToken: serializedTokens.wrose,
    },
    {
      pid: 3,
      lpSymbol: 'OS-USDT LP',
      lpAddresses: {
        42262: '0xf9cFabd904BFD807772Bd5Cf9802024d0Bc93BFf',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.os,
      quoteToken: serializedTokens.usdt,
    },
    {
      pid: 4,
      lpSymbol: 'OS-BUSD LP',
      lpAddresses: {
        42262: '0xd1986c80cac4dd55add6c4b30d19b4b0189ccacd',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.os,
      quoteToken: serializedTokens.busd,
    },
  
    /*
    {
      pid: 5,
      lpSymbol: 'KAFE-OS LP',
      lpAddresses: {
        42262: '0xc4993ce08e2e5aef24ac1c4342716700f419e362',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.kafe,
      quoteToken: serializedTokens.os,
    },
    {
      pid: 6,
      lpSymbol: 'BNB-OS LP',
      lpAddresses: {
        42262: '0x27cf7a644fe5b7b4c0a35d258c88b42a9f80d101',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.bnb,
      quoteToken: serializedTokens.os,
    },
    {
      pid: 7,
      lpSymbol: 'OS-USDC LP',
      lpAddresses: {
        42262: '0xcde3aa78955023408bf859105795c869a087ea4b',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.os,
      quoteToken: serializedTokens.usdc,
    },
    {
      pid: 8,
      lpSymbol: 'BUSD-ROSE LP',
      lpAddresses: {
        42262: '0x26d94a2e3bd703847c3be3c30ead42b926b427c2',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.busd,
      quoteToken: serializedTokens.wrose,
    },
    {
      pid: 9,
      lpSymbol: 'KOFFEE-OS LP',
      lpAddresses: {
        42262: '0xAc267294C1cfaEECa4F23CDF1221AFD6c92683aB',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.koffee,
      quoteToken: serializedTokens.os,
    },
    {
      pid: 10,
      lpSymbol: 'KUS-OS LP',
      lpAddresses: {
        42262: '0xccb0f34594a0ec4e37073360ee60d29ae2d5f7f2',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.kus,
      quoteToken: serializedTokens.os,
    },
    {
      pid: 11,
      lpSymbol: 'RS-OS LP',
      lpAddresses: {
        42262: '0x24806dc6bfe905292093e095d7d7045d8ca20698',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.rs,
      quoteToken: serializedTokens.os,
    },
    {
      pid: 13,
      lpSymbol: 'RS',
      lpAddresses: {
        42262: '0x1bbd57143428452a4deb42519391a0a436481c8e',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.rs,
      quoteToken: serializedTokens.rs,
    },
    {
      pid: 14,
      lpSymbol: 'DAI-OS LP',
      lpAddresses: {
        42262: '0x3d8b958d12210ad07e8a47313342f175e3f1719b',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.dai,
      quoteToken: serializedTokens.os,
    },
    {
      pid: 15,
      lpSymbol: 'ROSE-USDC LP',
      lpAddresses: {
        42262: '0xc2cacd273630bc1dcb1c7ca398374896fa1d642261',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.usdc,
      quoteToken: serializedTokens.wrose,
    },
    {
      pid: 16,
      lpSymbol: 'USDT-BUSD LP',
      lpAddresses: {
        42262: '0x32d794ef491b3f28f6374cf6c2a68226c35b4b82',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.usdt,
      quoteToken: serializedTokens.busd,
    },
    {
      pid: 17,
      lpSymbol: 'RS-USDT LP',
      lpAddresses: {
        42262: '0x8658faa1dc585d7f1c39eccc5328292a7192f99c',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.rs,
      quoteToken: serializedTokens.usdt,
    },
    {
      pid: 18,
      lpSymbol: 'PRNTR-OS LP',
      lpAddresses: {
        42262: '0x8879c7440ec4c83260BE9481f87D305B91A6ae22',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.prntr,
      quoteToken: serializedTokens.os,
    },
    {
      pid: 19,
      lpSymbol: 'BTC-ROSE LP',
      lpAddresses: {
        42262: '0x9f9761eff3b482cb94d835f04196ca780361e3c4',
        42261: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      token: serializedTokens.btc,
      quoteToken: serializedTokens.wrose,
    }, */
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
 /** {
    pid: 484,
    lpSymbol: 'IDIA-BUSD LP',
    lpAddresses: {
      42261: '',
      42262: '0x71E6de81381eFE0Aa98f56b3B43eB3727D640715',
    },
    token: serializedTokens.idia,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 483,
    lpSymbol: 'XCV-BUSD LP',
    lpAddresses: {
      42261: '',
      42262: '0xD39F05AB936Aa201235005c47B83268f2d9833f8',
    },
    token: serializedTokens.xcv,
    quoteToken: serializedTokens.busd,
  }, */
]

export default farms