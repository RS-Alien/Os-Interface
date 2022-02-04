import React from 'react'
import { TokenPairImage, ImageProps } from '@oasisswap/uikit'
import { mainnetTokens } from 'config/constants/tokens'

const OsVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const primaryTokenSrc = `/images/tokens/${mainnetTokens.os.address}.svg`

  return <TokenPairImage primarySrc={primaryTokenSrc} secondarySrc="/images/tokens/autorenew.svg" {...props} />
}

export default OsVaultTokenPairImage
