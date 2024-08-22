// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Source @ Sourcetoad',
  tagline: 'Our little slice of open source projects.',
  favicon: 'img/favicon.ico',
  url: 'https://opensource.sourcetoad.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/sourcetoad/open-source/tree/main',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/sourcetoad/open-source/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Open Source @ Sourcetoad',
        logo: {
          alt: 'Sourcetoad',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            position: 'left',
            label: 'Projects',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/sourcetoad/open-source',
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
                label: 'Projects',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/sourcetoad/'
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@Sourcetoad',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Sourcetoad',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Engineering Blog',
                to: '/blog',
              },
              {
                label: 'Sourcetoad',
                to: 'https://sourcetoad.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sourcetoad',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sourcetoad. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'docker', 'json', 'ini', 'php'],
      },
    }),
};

export default config;
