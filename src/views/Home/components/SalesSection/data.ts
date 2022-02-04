import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Oasis Emerald ParaTime Network in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.oasisswap.org/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
     // { src: 'ROSE', alt: 'ROSE token' },
     // { src: 'BTC', alt: 'BTC token' },
      { src: 'OS', alt: 'OS token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with OasisSwap.',
  bodyText: 'OasisSwap makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farming',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.oasisswap.org/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
     // { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
     // { src: 'folder', alt: 'Folder with os token' },
    ],
  },
}

export const osSectionData: SalesSectionProps = {
  headingText: 'OS makes our world go round.',
  bodyText:
    'OS token is at the heart of the OasisSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xF1bfbC24f2C8c075Ea8f8ad976240bAD9a3eF50D',
    text: 'Buy OS',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.oasisswap.org/tokenomics/OS',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/os/',
    attributes: [
     // { src: 'bottom-right', alt: 'Small 3d oasisswap' },
     // { src: 'top-right', alt: 'Small 3d oasisswap' },
      { src: 'coin', alt: 'OS token' },
    // { src: 'top-left', alt: 'Small 3d oasisswap' },
    ],
  },
}
