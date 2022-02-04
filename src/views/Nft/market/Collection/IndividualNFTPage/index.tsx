import React from 'react'
import { useParams } from 'react-router'
import { oasisswapBunniesAddress } from '../../constants'
import IndividualOasisswapBunnyPage from './OasisswapBunnyPage'
import IndividualNFTPage from './OneOfAKindNftPage'

const IndividualNFTPageRouter = () => {
  // For OasisswapBunnies tokenId in url is really bunnyId
  const { collectionAddress, tokenId } = useParams<{ collectionAddress: string; tokenId: string }>()

  const isPBCollection = collectionAddress.toLowerCase() === oasisswapBunniesAddress.toLowerCase()
  if (isPBCollection) {
    return <IndividualOasisswapBunnyPage bunnyId={tokenId} />
  }

  return <IndividualNFTPage collectionAddress={collectionAddress} tokenId={tokenId} />
}

export default IndividualNFTPageRouter
