import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Open Source @ Sourcetoad',
  tagline: 'Our little slice of open source projects.',
  favicon: 'img/favicon.ico',
  url: 'https://opensource.sourcetoad.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/sourcetoad/open-source/tree/main',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/sourcetoad/open-source/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
  ],
  themeConfig: {
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
                label: 'GitHub Actions',
                to: '/docs/github-actions',
              },
              {
                label: 'JS Packages',
                to: '/docs/js-packages',
              },
              {
                label: 'PHP Libraries',
                to: '/docs/php-libraries',
              },
              {
                label: 'React Native Packages',
                to: '/docs/react-native-packages',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/sourcetoad/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/sourcetoad/'
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@Sourcetoad',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/sourcetoad/'
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
                href: 'https://sourcetoad.com',
              },
              {
                label: 'OnDeck',
                href: 'https://ondeck.sourcetoad.com',
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
    } satisfies Preset.ThemeConfig,
};

export default config;
