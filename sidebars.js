/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
    tutorialSidebar: [
      {
        type: 'category',
        label: 'Tutorial',
        items: ['hello'],
      },
    ],
     */

  Sidebar: [
    'index',
    {
      type: 'category',
      label: 'About',
      link: { type: 'doc', id: 'learn/README' },
      items: [
        'learn/protocol',
        'learn/fees',
        'learn/glossary',
        'learn/vesting-contract',
        'learn/ibc',
        'learn/assets',

      ],
    },
    {
      type: 'category',
      label: 'Develop',
      link: { type: 'doc', id: 'develop/README' },
      items: [
        'develop/get-started',
        'develop/which-tools',

        {
          type: 'category',
          label: 'Developer tools',
          collapsed: false,
          items: [
            {
              type: 'category',
              label: 'Terrain',
              collapsed: true,
              link: { type: 'doc', id: 'develop/terrain/README' },
              items: [
                'develop/terrain/initial-setup',
                'develop/terrain/using-terrain-localterra',
                'develop/terrain/using-terrain-testnet',
                'develop/terrain/mint-an-nft',
                'develop/terrain/cw20-factory',
                'develop/terrain/contract-migration',
              ],
            },

            {
              type: 'category',
              label: 'LocalTerra',
              collapsed: true,
              link: { type: 'doc', id: 'develop/localterra/README' },
              items: [
                'develop/localterra/install-localterra',
                'develop/localterra/configure',
                'develop/localterra/integrations',
                'develop/localterra/contracts',
                'develop/localterra/accounts',
              ],
            },
            {
              type: 'category',
              label: 'Feather.js',
              collapsed: true,
              link: { type: 'doc', id: 'develop/feather-js/README' },
              items: [
                'develop/feather-js/getting-started',
                'develop/feather-js/terra-classic',
                'develop/feather-js/common-examples',
                'develop/feather-js/add-modules',
                'develop/feather-js/coin-and-coins',
                'develop/feather-js/fees',
                'develop/feather-js/ibc',
                'develop/feather-js/keys',
                'develop/feather-js/make-a-connection',
                'develop/feather-js/msgAuthorization',
                'develop/feather-js/multisend',
                'develop/feather-js/numeric',
                'develop/feather-js/query-data',
                'develop/feather-js/smart-contracts',
                'develop/feather-js/transactions',
                'develop/feather-js/wallets',
                'develop/feather-js/Websockets',
              ],
            },
            {
              type: 'category',
              label: 'Terra.py',
              collapsed: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'develop/terra-py',
                },
              ],
            },
                        {
              type: 'category',
              label: 'Wallet Kit',
              collapsed: true,
              items: [
                'develop/wallet-kit/getting-started',
                'develop/wallet-kit/migration',
              ],
            },
            {
              type: 'category',
              label: 'Wallet Provider',
              collapsed: true,
              items: [
                'develop/wallet-provider/wallet-provider-tutorial',
                'develop/wallet-provider/station-extension',
                'develop/wallet-provider/station-mobile',
                'develop/wallet-provider/sign-bytes',
              ],
            },
            {
              type: 'category',
              label: 'Terrad',
              collapsed: true,
              link: {type: 'doc', id: 'develop/terrad/install-terrad'},
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'develop/terrad',
                },
              ],
            },
          ],
        },

        {
          type: 'category',
          label: 'Developer guides',
          collapsed: true,
          items: [
            'develop/guides/initial',
            'develop/guides/register-feeshare',
            'develop/guides/sign-with-multisig',
            'develop/guides/start-lcd',
            'develop/vesting',
            'develop/open-source',
          ],
        },
        {
          type: 'category',
          label: 'dApp examples',
          collapsed: true,
          items: [
            'develop/examples/tictactoe',
            'develop/examples/nft',
            'develop/examples/token-factory',
            {
              type: 'link',
              label: 'Frontend templates', // The link label
              href: 'https://github.com/terra-money/wallet-provider/', // The external URL
            },
          ],
        },
        {
          type: 'category',
          label: 'Terra Core modules',
          collapsed: true,
          link: { type: 'doc', id: 'develop/module-specifications/README' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'develop/module-specifications',
            },
          ],
        },
        'develop/resources',
        'develop/swagger',
        'develop/endpoints',
      ],
    },

    {
      type: 'category',
      label: 'Full node',
      link: { type: 'doc', id: 'landing-pages/full-node' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'full-node',
        },
      ],
    },
    {
      type: 'category',
      label: 'Terra Core upgrade',
      link: { type: 'doc', id: 'spec' },
      items: [
        'spec',
        'upgrade',
        {
          type: 'category',
          label: 'Terra migration guides',
          link: { type: 'doc', id: 'landing-pages/migration' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'migration',
            },
          ],
        },
      ],
    },
    {
      type: 'link',
      label: 'Station Docs', // The link label
      href: 'https://docs.station.money', // The external URL
    },
  ],
};

/*
    {
      type: 'doc',
      id: 'about/protocol',
      label: 'What is Terra?'
    },

        {
      type: 'html',
      value: '<img src="sponsor.png" alt="Sponsor" />', // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    */

module.exports = sidebars;
