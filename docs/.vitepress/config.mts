import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UK AI User Groups Docs",
  description: "Documentation, guidance and assets for user groups leaders part of UK AI User Groups ",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/Marketing/Logos' }
    ],

    sidebar: [
   
      {
        text: 'Getting Started',
        items: [
          
        ]
      },   {
        text: 'Marketing & Branding',
        items: [
          { text: 'Logos', link: '/Marketing/Logos' },
          { text: 'Social Media Templates', link: '/Marketing/SocialMediaTemplates' },
          
        ]
      },
      {
        text: 'Speaker Resources',
        items: [
          { text: 'Speaker Slide Deck Template', link: '/SpeakerResources/SpeakerSlideTemplate' },
        ]
      },  
    ],

    socialLinks: [
      
    ]
  }
})
