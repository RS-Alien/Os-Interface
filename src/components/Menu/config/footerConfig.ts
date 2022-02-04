import { FooterLinkType } from '@oasisswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.oasisswap.org/contact-us',
      },
      {
        label: t('Community'),
        href: 'https://t.me/OasisSwap_org',
      },
      {
        label: t('Announcement'),
        href: 'https://t.me/OasisSwapAnn',
      },
      {
        label: t('OS token'),
        href: 'https://docs.oasisswap.org/token/os/os-tokenomics',
      },
 /**  {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://oasisswap.creator-spring.com/',
        isHighlighted: true,
      }, 
      */ 
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.oasisswap.org/Customer-Support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.oasisswap.org/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.oasisswap.org/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/oasisswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.oasisswap.org',
      },
      {
        label: t('Audits'),
        href: 'https://github.com/oasisswap/audit-report.git',
      },
      {
        label: t('Careers'),
        href: 'https://docs.oasisswap.org/hiring/become-a-chef',
      },
    ],
  },
]
