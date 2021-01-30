const menu = [
  {
    name: 'Products',
    sublinks: [
      {
        name: 'App',
        link: 'https://app.ameso.org/#/',
        description: 'Start working!'
      },
      {
        name: 'Analytics',
        link: 'https://ameso.info/',
        description: 'Ameso analytics and historical data'
      },
      {
        name: 'Sybil',
        link: 'https://sybil.org/#/',
        description: 'Identities for governance'
      }
    ]
  },
  {
    name: 'Developers',
    sublinks: [
      {
        name: 'Documentation',
        link: '/docs/v2'
      },
      { name: 'GitHub', link: 'https://github.com/ameso' },
      { name: 'Whitepaper', link: '/whitepaper.pdf' },
      { name: 'Bug Bounty', link: '/bug-bounty' }
    ]
  },
  {
    name: 'Governance',
    sublinks: [
      {
        name: 'AMS Token',
        link: '/blog/ams'
      },
      { name: 'Voting Portal', link: 'https://app.ameso.org/#/vote' },
      { name: 'Documentation', link: '/docs/v1/governance/overview' }
    ]
  },
  {
    name: 'Community',
    sublinks: [
      { name: 'Twitter', link: 'https://twitter.com/AmesoProtocol' },
      { name: 'Reddit', link: 'https://www.reddit.com/r/Ameso' }
    ]
  },
  {
    name: 'About',
    sublinks: [
      {
        name: 'Blog',
        link: '/blog'
      },
      {
        name: 'Info',
        link: '/about'
      },
      {
        name: 'FAQ',
        link: '/faq'
      },
      {
        name: 'Jobs',
        link: '/about#jobs'
      }
    ]
  }
]

module.exports = menu
