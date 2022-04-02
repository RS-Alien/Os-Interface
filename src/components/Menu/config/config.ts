import { MenuItemsType, DropdownMenuItemType } from '@oasisswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Staking'),
        href: '/staking',
      },
      {
        label: t('Farming'),
        href: '/farming',
      },
    ],
  },
  {
    label: t('Info'),
    href: '/info',
    icon: 'Trophy',
    items: [
 /** {
        label: t('Overview'),
        href: '/info',
      },
      {
        label: t('Pools'),
        href: '/info/pools',
      },
      {
        label: t('Tokens'),
        href: '/info/tokens',
      },
   */
      {
        label: t('Overview'),
        href: 'https://oasisswap.info/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Tokens'),
        href: 'https://oasisswap.info/tokens',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Pairs'),
        href: 'https://oasisswap.info/pairs',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    label: t('NFT'),
    href: `${nftsBaseUrl}`,
    icon: 'Nft',
    items: [
  /** {
        label: t('Overview'),
        href: `${nftsBaseUrl}`,
      },
      {
        label: t('Collections'),
        href: `${nftsBaseUrl}/collections`,
      },
  */
      {
        label: t('NFT Minter'),
        href: 'https://nftminter.oasisswap.org',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    label: '',
    href: '/info',
    icon: 'More',
    hideSubNav: true,
    items: [
   /**   {
        label: t('IFO'),
        href: '/ifo',
      },
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Leaderboard'),
        href: '/teams',
      }, */
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Docs'),
        href: 'https://oasisswap.gitbook.io/oasisswap',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Contact'),
        href: 'https://oasisswap.gitbook.io/oasisswap/contact-us',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Github'),
        href: 'https://github.com/oasisswap',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Multi Sender'),
        href: 'https://multisender.oasisswap.org',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
