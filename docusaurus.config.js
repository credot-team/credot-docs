/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CreDot 文件',
  tagline: '收集 CreDot 的文件與專案範例',
  url: 'https://haneyume.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'credot', // Usually your GitHub org/user name.
  projectName: 'credot-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CreDot 文件',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          label: '文件',
          position: 'left',
          docId: 'intro',
        },
        {
          to: 'flow',
          label: '專案流程',
          position: 'left',
        },
        {
          to: 'ideas',
          label: '點子',
          position: 'left',
        },
        {
          to: 'blog',
          label: '部落格',
          position: 'left',
        },
        {
          href: 'https://github.com/haneyume',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CreDot, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/haneyume/credot-docs/tree/main',
        },
        blog: {
          blogSidebarTitle: '最近文章',
          showReadingTime: true,
          editUrl: 'https://github.com/haneyume/credot-docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
