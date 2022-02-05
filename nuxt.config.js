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
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'uikit/dist/css/uikit.min.css',
    'uikit/dist/css/uikit.css',
    '@/static/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/smooth-scroll.client.js',
    '~/plugins/iubenda.client.js',
    '~/plugins/gtag.client.js',
    {
      src: '~/plugins/uikit.js',
      ssr: false
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sentry',
    '@nuxt/typescript-build',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/pwa',
    // '@nuxtjs/google-analytics',
    '@nuxt-hero-icons/outline/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/strapi'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/markdownit',
    '@nuxtjs/gtm'
  ],

  i18n: {
    langDir: '~/lang/',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.js'
      }
    ],
    defaultLocale: 'en',
    baseUrl: 'https://www.cardanoin.africa'
  },

  sentry: {
    dsn: 'https://cb55688d41164198a828fa14777afdfe@o982101.ingest.sentry.io/5936850', // Enter your project's DSN here
    config: {
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 0.2
    },
  },

  gtm: {
    id: 'UA-206162126-1',
    enabled: true,
    respectDoNotTrack: false,
    scriptURL: 'https://www.googletagmanager.com/gtag/js',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.BACKEND_URL + '/api/'
  },

  strapi: {
    url: process.env.BACKEND_URL,
    prefix: '/api',
    version: 'v4',
    cookie: {},
    entities: [
      {
        name: 'blogs',
        type: 'collection',
      },
      {
        name: 'global',
        type: 'single',
      },
      {
        name: 'categories',
        type: 'collection',
      },
    ],
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
    use: [
      [
        'markdown-it-anchor',
        {
          level: 1,
          // slugify: string => string,
          permalink: true,
          // renderPermalink: (slug, opts, state, permalink) => {},
          permalinkClass: 'header-anchor',
          permalinkSymbol: '#',
          permalinkBefore: true
        }
      ],
      'markdown-it-attrs',
      'markdown-it-div',
      'markdown-it-toc-done-right',
      'markdown-it-emoji',
      ['markdown-it-link-attributes', {
        attrs: {
          target: '_blank',
          rel: 'noopener'
        }
      }]
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // cache: true,
    extractCSS: true,
    optimizeCSS: true,
    // transpile: ['tslib', 'ts-invariant']
  },

  sitemap: {
    hostname: 'https://cardanoin.africa',
    i18n: {
      locales: ['en', 'fr'],
      routesNameSeparator: '___'
    },
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
