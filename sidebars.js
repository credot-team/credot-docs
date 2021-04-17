module.exports = {
  docs: [
    // {
    //   type: 'category',
    //   label: '開始',
    //   items: [
    //     'getting-started/intro',
    //     'getting-started/create-react-project',
    //     'getting-started/create-rn-project',
    //     'getting-started/create-next-project',
    //     'getting-started/create-flutter-project',
    //     'getting-started/create-express-project',
    //     'getting-started/create-graphql-project',
    //   ],
    // },
    'getting-started/intro',
    {
      type: 'category',
      label: '專案設定',
      items: [
        {
          type: 'category',
          label: 'React 專案',
          items: [
            'project-settings/react/enviroment-setup',
            'project-settings/react/create-project-by-cra',
            'project-settings/react/create-project-by-nextjs',
            'project-settings/react/create-project-by-cdn',
            'project-settings/react/read-more',
          ],
        },
        {
          type: 'category',
          label: 'React Native 專案',
          items: [
            'project-settings/react-native/enviroment-setup',
            'project-settings/react-native/create-project-by-cli',
            'project-settings/react-native/create-project-by-expo',
            'project-settings/react-native/read-more',
          ],
        },
        {
          type: 'category',
          label: 'Flutter 專案',
          items: [
            'project-settings/flutter/enviroment-setup',
            'project-settings/flutter/create-project',
            'project-settings/flutter/read-more',
          ],
        },
        {
          type: 'category',
          label: 'Node.js 專案',
          items: [
            'project-settings/nodejs/enviroment-setup',
            'project-settings/nodejs/create-project',
            'project-settings/nodejs/read-more',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '設定檔',
      items: ['config/husky', 'config/prettier', 'config/typescript'],
    },
    {
      type: 'category',
      label: '常用函式庫與框架',
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
      items: [
        'advanced/neo4j',
        'advanced/tensorflow',
        'advanced/three',
        'advanced/webrtc',
      ],
    },
  ],
  templates: [
    {
      type: 'category',
      label: '範例',
      items: ['templates/intro'],
    },
    {
      type: 'category',
      label: 'Docusaurus Tutorial',
      items: [
        'getting-started',
        'create-a-page',
        'create-a-document',
        'create-a-blog-post',
        'markdown-features',
        'thank-you',
      ],
    },
  ],
};
