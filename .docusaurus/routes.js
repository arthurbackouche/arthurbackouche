import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '22d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '2df'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'e98'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'e09'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'c52'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'b2d'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '179'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '634'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'b4a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '308'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '1f4'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'c63'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4b2'),
    routes: [
      {
        path: '/docs/AMPScript/create-a-page',
        component: ComponentCreator('/docs/AMPScript/create-a-page', '543'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/ampscript',
        component: ComponentCreator('/docs/category/ampscript', '547'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/sfmc-config',
        component: ComponentCreator('/docs/category/sfmc-config', 'adb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/sfmc-sql',
        component: ComponentCreator('/docs/category/sfmc-sql', '044'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/ssjs',
        component: ComponentCreator('/docs/category/ssjs', 'e9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SFMC Config/create-a-page',
        component: ComponentCreator('/docs/SFMC Config/create-a-page', '46e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SFMC SQL/create-a-page',
        component: ComponentCreator('/docs/SFMC SQL/create-a-page', '71a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SSJS/create-a-page',
        component: ComponentCreator('/docs/SSJS/create-a-page', '3cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b5c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
