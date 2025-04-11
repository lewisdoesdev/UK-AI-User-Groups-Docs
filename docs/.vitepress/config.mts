import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UK AI User Groups Docs",
  description: "Documentation, guidance and assets for user groups leaders part of UK AI User Groups ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/assets-and-resources/Logos' }
    ],

    sidebar: [
   
      {
        text: 'Getting Started',
        items: [
          
        ]
      },   {
        text: 'Assets and Resources',
        items: [
          { text: 'Logos', link: '/assets-and-resources/Logos' },
        ]
      },
      {
        text: 'Additional Resources',
        items: [
         
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com/ukaiusergroups' }
    ]
  }
})
