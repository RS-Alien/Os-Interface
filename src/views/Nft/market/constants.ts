import collections from 'config/constants/nftsCollections'
import { CollectionKey } from 'config/constants/nftsCollections/types'
import { getAddress } from 'utils/addressHelpers'

export const nftsBaseUrl = '/nfts'
export const oasisswapBunniesAddress = getAddress(collections[CollectionKey.OASISSWAP].address)
export const oasisswapSquadAddress = getAddress(collections[CollectionKey.SQUAD].address)
