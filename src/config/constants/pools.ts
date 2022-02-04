import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.os,
    earningToken: serializedTokens.os,
    contractAddress: {
      42262: '0x94d753cbBf84BeB3aFE1f8a979F635c8b8520605',
      42261: '0x94d753cbBf84BeB3aFE1f8a979F635c8b8520605',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 1,
    isFinished: false,
  },
 /* {
    sousId: 1,
    stakingToken: serializedTokens.os,
    earningToken: serializedTokens.rs,
    contractAddress: {
      42262: '0x9d5da4b9968376b333263f6202bdea51d69746d5',
      42261: '0x2EfE8772EB42261B74be742d578A654AB6C95bF18db',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0124007',
    isFinished: true,
  },
  {
    sousId: 2,
    stakingToken: serializedTokens.os,
    earningToken: serializedTokens.rs,
    contractAddress: {
      42262: '0x3487f977243cc89f6c09bb5eff2f7d057d14408e',
      42261: '0x7F103689cabe17C2F70DA6faa298045d72a943b8',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0081018518518519',
    isFinished: true,
  },
  {
    sousId: 3,
    stakingToken: serializedTokens.os,
    earningToken: serializedTokens.rs,
    contractAddress: {
      42262: '0x5c8cfad5e5a0ccd4014de5c60d32a6fe6c05c9fa',
      42261: '0xbd52ef04DB1ad1c68A8FA24Fa71f2188422618ba617',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.011574',
    isFinished: true,
  },
  {
    sousId:4,
    stakingToken: serializedTokens.os,
    earningToken: serializedTokens.shib,
    contractAddress: {
      42262: '0x79b7049bdeb04fa581ba34095cff45ae352c1915',
      42261: '0x73bB10B89091f15e8FeD4d6e9EBa6415df6acb21',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '49.6032',
    isFinished: true,
  },
  {
    sousId: 5,
    stakingToken: serializedTokens.os,
    earningToken: serializedTokens.rs,
    contractAddress: {
      42262: '0xf0ec109e6114b4ef42061571368780f82268f267',
      42261: '0xdD52FAB121376432DBCBb47592742F9d86CF8952',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0104166667',
    isFinished: true,
  },
  {
    sousId: 6,
    stakingToken: serializedTokens.rs,
    earningToken: serializedTokens.shib,
    contractAddress: {
      42262: '0xfb36ab691f724465c6bcba69773854cfc437519c',
      42261: '0x2b8751B7141Efa7a9917f9C6fea2CEA071af5eE7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '23.148',
    isFinished: false,
  },
  {
    sousId: 7,
    stakingToken: serializedTokens.os,
    earningToken: serializedTokens.rs,
    contractAddress: {
      42262: '0x2c47c85bb03131570321cb53b5eda6aab9fcbb14',
      42261: '0x2b8751B7141Efa7a9917f9C6fea2CEA071af5eE7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.013889',
    isFinished: false,
  },
  {
    sousId: 8,
    stakingToken: serializedTokens.rs,
    earningToken: serializedTokens.wrose,
    contractAddress: {
      42262: '0x0cd7d82fe90617aa730e0e32951dcb45eb259a5a',
      42261: '0x2b8751B7141Efa7a9917f9C6fea2CEA071af5eE7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0000520833',
    isFinished: false,
  }, */
]

export default pools
