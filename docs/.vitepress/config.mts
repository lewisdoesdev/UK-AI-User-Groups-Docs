import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UK AI User Groups Docs",
  description: "Documentation, guidance and assets for user groups leaders part of UK AI User Groups ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
   
      {
        text: 'Getting Started',
        items: [
          { text: 'Roles', link: '/getting-started/roles' },
          { text: 'Committee', link: '/getting-started/committee' },
          { text: 'Global AI Chapter Setup', link: '/getting-started/global-ai-chapter-setup' }
        ]
      },   {
        text: 'Assets and Resources',
        items: [
          { text: 'Marketing assets', link: '/assets-and-resources/marketing-assets' },
          { text: 'Deck templates', link: '/assets-and-resources/deck-templates' },
          { text: 'Planning templates', link: '/assets-and-resources/planning-templates' },
          { text: 'Access to Teams', link: '/assets-and-resources/access-to-teams' },
          { text: 'User Group Logos', link: '/logos' },
          { text: 'Other', link: '/assets-and-resources/other' }
        ]
      },
      {
        text: 'Additional Resources',
        items: [
          { text: 'Code of Conduct', link: '/code-of-conduct' },
          { text: 'FAQ', link: '/faq' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com/ukaiusergroups' }
    ]
  }
})
