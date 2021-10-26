import { Integrations } from '@sentry/tracing'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  staticDir: '~/static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Cardano in Africa',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [],
    script: [
      // {
      //   src: 'https://spysession.clientpanel.co/pixel/nneE4iUluNqk1qvh',
      //   defer: true
      // },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/smooth-scroll.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sentry',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    '@nuxt-hero-icons/outline/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  i18n: {
    langDir: '~/lang/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.js' }
    ],
    defaultLocale: 'en',
    baseUrl: 'https://www.cardanoin.africa'
  },

  sentry: {
    dsn: 'https://cb55688d41164198a828fa14777afdfe@o982101.ingest.sentry.io/5936850', // Enter your project's DSN here
    config: {
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 0.1
    }
  },

  googleAnalytics: {
    id: 'UA-206162126-1'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // cache: true,
    extractCSS: true,
    optimizeCSS: true
  },

  sitemap: {
    hostname: 'https://cardanoin.africa'
  },

  loading: './components/LoadingComponent.vue',

  image: {
    imagekit: {
      baseURL: 'https://ik.imagekit.io/kemitandsure/cia'
    },
    provider: 'imagekit',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    presets: {
      preview: {
        modifiers: {
          fit: 'contain',
          format: 'png',
          width: 400,
          height: 300
        }
      }
    }
  }
}
