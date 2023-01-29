// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'All About Salesforce Marketing Cloud',
  tagline: 'Excellence as duty',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://arthurbackouche.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'arthurbackouche', // Usually your GitHub org/user name.
  projectName: 'arthurbackouche', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/ssjs',
            position: 'left',
            label: 'SSJS',
          },
          {
            type: 'doc',
            docId: '/category/ampscript',
            position: 'left',
            label: 'AMPScript',
          },
          {
            type: 'doc',
            docId: '/category/sfmc-sql',
            position: 'left',
            label: 'SFMC SQL',
          },
          {
            type: 'doc',
            docId: '/category/sfmc-config',
            position: 'left',
            label: 'SFMC Config',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.linkedin.com/in/arthurbackouche/',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://trailblazer.me/id/arthurbackouche',
            label: 'Salesforce',
            position: 'right',
          },
          {
            href: 'https://github.com/arthurbackouche',
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
                label: 'SSJS',
                to: '/docs/category/ssjs',
              },
              {
                label: 'AMPScript',
                to: '/docs/category/AMPScript',
              },
              {
                label: 'SFMC SQL',
                to: '/docs/category/sfmc-sql',
              },
              {
                label: 'SFMC Config',
                to: '/docs/category/sfmc-config',
              },
            ],
          },
          {
            title: 'My Socials',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/arthurbackouche/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCHPcmgOhmdf0O691uWJImAA',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/arthurbackouche/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/arthurbackouche',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Trailhead',
                href: 'https://trailblazer.me/id/arthurbackouche',
              },
              {
                label: 'StackExchange',
                href: 'https://salesforce.stackexchange.com/users/121938/arthur-backouche',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/arthurbackouche',
              },
              {
                label: 'ProductHunt',
                href: 'https://www.producthunt.com/@arthurbackouche',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Arthur Backouche.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
