import React from 'react'
import { Text } from '@oasisswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { Link } from 'react-router-dom'

type EventDescriptionType = {
  t: ContextApi['t']
}

const eventDescriptionConfigBuilder = ({ t }: EventDescriptionType) => ({
  headingText: t('Fair, Random, Rare'),
  subHeadingText: t(
    'All Oasisswap Squad NFTs are allocated to Squad Ticket holders through a provably-fair system based on ChainLink at the time of minting.',
  ),
  bodyTextHeader: t('Out of the 10,000 total NFTs in the squad,'),
  bodyText: [
    {
      id: 1,
      content: (
        <>{t('490 are available in the pre-sale for owners of Gen 0 Oasisswap Bunnies (bunnyID 0, 1, 2, 3, 4)')}</>
      ),
    },
    { id: 2, content: t('120 are reserved by the team for community giveaways, etc;') },
    {
      id: 3,
      content: (
        <>
          {t('and the remaining NFTs can be minted by anyone with a ')}
          <Link to="/profile">
            <Text display="inline-block" color="primary" bold>
              {t('Oasisswap Profile!')}
            </Text>
          </Link>
        </>
      ),
    },
  ],
  primaryButton: {
    to: 'https://docs.oasisswap.io/',
    text: t('View Documentation'),
    external: true,
    isDisplayed: false,
  },
  image: { src: '/images/oasisswapSquad/moonBunny/body.png', alt: 'moon bunny' },
  accessoriesImages: [
    { src: '/images/oasisswapSquad/moonBunny/band.png', alt: 'headband' },
    { src: '/images/oasisswapSquad/moonBunny/cloth.png', alt: 'cloth' },
    { src: '/images/oasisswapSquad/moonBunny/glasses.png', alt: 'glasses' },
    { src: '/images/oasisswapSquad/moonBunny/oasisswap.png', alt: 'oasisswap' },
  ],
})

export default eventDescriptionConfigBuilder
