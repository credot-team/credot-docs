module.exports = {
  docs: [
    {
      type: 'category',
      label: '開始',
      collapsed: false,
      items: [
        'getting-started/intro',
        'getting-started/create-react-project',
        'getting-started/create-rn-project',
        'getting-started/create-next-project',
        'getting-started/create-flutter-project',
        'getting-started/create-express-project',
        'getting-started/create-graphql-project',
      ],
    },
    {
      type: 'category',
      label: '設定檔',
      collapsed: false,
      items: ['config/husky', 'config/prettier', 'config/typescript'],
    },
    {
      type: 'category',
      label: '常用函式庫與框架',
      collapsed: false,
      items: [
        'using-libs/firebase',
        'using-libs/firebase-auth',
        'using-libs/firebase-messaging',
        'using-libs/giphy',
        'using-libs/graphql',
        'using-libs/graphql-code-generator',
        'using-libs/prisma',
        'using-libs/tailwindcss',
      ],
    },
    {
      type: 'category',
      label: '進階主題',
      collapsed: false,
      items: [
        'advanced/neo4j',
        'advanced/tensorflow',
        'advanced/three',
        'advanced/webrtc',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Docusaurus Tutorial',
    //   items: [
    //     'getting-started',
    //     'create-a-page',
    //     'create-a-document',
    //     'create-a-blog-post',
    //     'markdown-features',
    //     'thank-you',
    //   ],
    // },
  ],
};
