<template>
  <div>
    <header class="fixed top-0 left-0 py-4 flex text-lg lg:text-2xl w-full z-50">
      <div class="max-w-7xl w-full mx-auto flex justify-between items-center px-4 md:px-16">
        <div class="logo md:m-0 cursor-pointer" @click="scrollIntoView('#home')">
          <nuxt-img alt="Logo" src="/icon_white_s2EKJI4-H.svg" width="60px" height="60px" style="color: white;"/>
        </div>
        <ul
          class="list-none content-center items-center text-white hidden md:flex whitespace-nowrap"
        >
          <li class="mx-2">
            <div
              class="navbar-home nuxt-link-active rounded-lg p-2 cursor-pointer"
              @click="scrollIntoView('#home')"
            >
              {{ $t('index.menu.home') }}
            </div>
          </li>
          <li class="mx-2">
            <div class="navbar-about rounded-lg p-2 cursor-pointer" @click="scrollIntoView('#about')">
              {{ $t('index.menu.about') }}
            </div>
          </li>
          <li class="mx-2">
            <div class="navbar-stake rounded-lg p-2 cursor-pointer" @click="scrollIntoView('#stake')">
              {{ $t('index.menu.stake') }}
            </div>
          </li>
          <li class="mx-2">
            <div class="navbar-contact rounded-lg p-2 cursor-pointer" @click="scrollIntoView('#contact')">
              {{ $t('index.menu.contact') }}
            </div>
          </li>
          <li class="mx-2">
            <nuxt-link class="rounded-lg p-2 inline-flex align-middle underline" :to="localePath('projects')">
              {{ $t('index.menu.projects') }}
              <outline-external-link-icon class="ml-1 h-4 w-4 my-auto"/>
            </nuxt-link>
          </li>
          <li class="mx-2">
            <nuxt-link class="rounded-lg p-2 inline-flex align-middle underline" :to="localePath('tutorials')">
              {{ $t('index.menu.tutorials') }}
              <outline-external-link-icon class="ml-1 h-4 w-4 my-auto"/>
            </nuxt-link>
          </li>
        </ul>
        <button
          type="button"
          class="md:hidden rounded-md p-4 inline-flex items-center justify-center text-gray-200 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          @click="navbar = !navbar"
        >
          <span class="sr-only">{{ $t('index.menu.open') }}</span>
          <!-- Heroicon name: outline/menu -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-show="navbar" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div
            class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-primary text-gray-200 divide-y-2 divide-gray-50"
          >
            <div class="py-6 px-5">
              <div class="flex items-center justify-between">
                <div/>
                <div class="-mr-3 ">
                  <button
                    type="button"
                    class="rounded-md p-4 inline-flex items-center justify-center text-gray-200 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    @click="navbar = !navbar"
                  >
                    <span class="sr-only">{{ $t('index.menu.close') }}</span>
                    <!-- Heroicon name: outline/x -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8 text-right">
                  <div
                    class="navbar-home -m-3 p-3 flex items-center rounded-md cursor-pointer"
                    @click="() => {navbar = !navbar; scrollToTop()}"
                  >
                    <!-- Heroicon name: outline/chart-bar -->
                    <!--                    <svg-->
                    <!--                      class="flex-shrink-0 h-6 w-6 text-indigo-600"-->
                    <!--                      xmlns="http://www.w3.org/2000/svg"-->
                    <!--                      fill="none"-->
                    <!--                      viewBox="0 0 24 24"-->
                    <!--                      stroke="currentColor"-->
                    <!--                      aria-hidden="true"-->
                    <!--                    >-->
                    <!--                      <path-->
                    <!--                        stroke-linecap="round"-->
                    <!--                        stroke-linejoin="round"-->
                    <!--                        stroke-width="2"-->
                    <!--                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"-->
                    <!--                      />-->
                    <!--                    </svg>-->
                    <span class="ml-3 text-base font-medium text-gray-200">
                      {{ $t('index.menu.home') }}
                    </span>
                  </div>
                  <div
                    class="navbar-about -m-3 p-3 flex items-center rounded-md cursor-pointer"
                    @click="() => {navbar = !navbar; scrollIntoView('#about')}"
                  >
                    <!-- Heroicon name: outline/cursor-click -->
                    <!--                    <svg-->
                    <!--                      class="flex-shrink-0 h-6 w-6 text-indigo-600"-->
                    <!--                      xmlns="http://www.w3.org/2000/svg"-->
                    <!--                      fill="none"-->
                    <!--                      viewBox="0 0 24 24"-->
                    <!--                      stroke="currentColor"-->
                    <!--                      aria-hidden="true"-->
                    <!--                    >-->
                    <!--                      <path-->
                    <!--                        stroke-linecap="round"-->
                    <!--                        stroke-linejoin="round"-->
                    <!--                        stroke-width="2"-->
                    <!--                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"-->
                    <!--                      />-->
                    <!--                    </svg>-->
                    <span class="ml-3 text-base font-medium text-gray-200">
                      {{ $t('index.menu.about') }}
                    </span>
                  </div>
                  <div
                    class="navbar-stake -m-3 p-3 flex items-center rounded-md cursor-pointer"
                    @click="() => {navbar = !navbar; scrollIntoView('#stake')}"
                  >
                    <!-- Heroicon name: outline/shield-check -->
                    <!--                    <svg-->
                    <!--                      class="flex-shrink-0 h-6 w-6 text-indigo-600"-->
                    <!--                      xmlns="http://www.w3.org/2000/svg"-->
                    <!--                      fill="none"-->
                    <!--                      viewBox="0 0 24 24"-->
                    <!--                      stroke="currentColor"-->
                    <!--                      aria-hidden="true"-->
                    <!--                    >-->
                    <!--                      <path-->
                    <!--                        stroke-linecap="round"-->
                    <!--                        stroke-linejoin="round"-->
                    <!--                        stroke-width="2"-->
                    <!--                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"-->
                    <!--                      />-->
                    <!--                    </svg>-->
                    <span class="ml-3 text-base font-medium text-gray-200">
                      {{ $t('index.menu.stake') }}
                    </span>
                  </div>
                  <div
                    class="navbar-contact -m-3 p-3 flex items-center rounded-md cursor-pointer"
                    @click="() => {navbar = !navbar; scrollIntoView('#contact')}"
                  >
                    <!-- Heroicon name: outline/view-grid -->
                    <!--                    <svg-->
                    <!--                      class="flex-shrink-0 h-6 w-6 text-indigo-600"-->
                    <!--                      xmlns="http://www.w3.org/2000/svg"-->
                    <!--                      fill="none"-->
                    <!--                      viewBox="0 0 24 24"-->
                    <!--                      stroke="currentColor"-->
                    <!--                      aria-hidden="true"-->
                    <!--                    >-->
                    <!--                      <path-->
                    <!--                        stroke-linecap="round"-->
                    <!--                        stroke-linejoin="round"-->
                    <!--                        stroke-width="2"-->
                    <!--                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"-->
                    <!--                      />-->
                    <!--                    </svg>-->
                    <span class="ml-3 text-base font-medium text-gray-200">
                      {{ $t('index.menu.contact') }}
                    </span>
                  </div>
                  <nuxt-link
                    class="-m-3 p-3 flex items-center rounded-md cursor-pointer"
                    :to="localePath('projects')"
                  >
                    <!-- Heroicon name: outline/view-grid -->
                    <!--                    <svg-->
                    <!--                      class="flex-shrink-0 h-6 w-6 text-indigo-600"-->
                    <!--                      xmlns="http://www.w3.org/2000/svg"-->
                    <!--                      fill="none"-->
                    <!--                      viewBox="0 0 24 24"-->
                    <!--                      stroke="currentColor"-->
                    <!--                      aria-hidden="true"-->
                    <!--                    >-->
                    <!--                      <path-->
                    <!--                        stroke-linecap="round"-->
                    <!--                        stroke-linejoin="round"-->
                    <!--                        stroke-width="2"-->
                    <!--                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"-->
                    <!--                      />-->
                    <!--                    </svg>-->
                    <span class="ml-3 text-base font-medium text-gray-200 flex">
                      {{ $t('index.menu.projects') }} <outline-external-link-icon class="ml-1 h-4 w-4 my-auto"/>
                    </span>
                  </nuxt-link>
                  <nuxt-link
                    class="-m-3 p-3 flex items-center rounded-md cursor-pointer"
                    :to="localePath('tutorials')"
                  >
                    <!-- Heroicon name: outline/view-grid -->
                    <!--                    <svg-->
                    <!--                      class="flex-shrink-0 h-6 w-6 text-indigo-600"-->
                    <!--                      xmlns="http://www.w3.org/2000/svg"-->
                    <!--                      fill="none"-->
                    <!--                      viewBox="0 0 24 24"-->
                    <!--                      stroke="currentColor"-->
                    <!--                      aria-hidden="true"-->
                    <!--                    >-->
                    <!--                      <path-->
                    <!--                        stroke-linecap="round"-->
                    <!--                        stroke-linejoin="round"-->
                    <!--                        stroke-width="2"-->
                    <!--                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"-->
                    <!--                      />-->
                    <!--                    </svg>-->
                    <span class="ml-3 text-base font-medium text-gray-200 flex">
                      {{ $t('index.menu.tutorials') }} <outline-external-link-icon class="ml-1 h-4 w-4 my-auto"/>
                    </span>
                  </nuxt-link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </header>
    <section id="home" class="relative w-full scroll-art">
      <nuxt-img
        id="moon"
        class="fixed mx-auto z-0"
        src="/background/moon_0P6YSNt5u.svg"
        alt="Image of a moon"
      />
      <nuxt-img
        id="stars"
        class="z-0"
        src="/background/stars_FjR_8B2bE.svg"
        alt="Background image of a night sky background"
      />
      <nuxt-img
        id="floor3"
        class="mountain z-0 top-auto"
        src="/background/floor_3_8iREISZXU.png"
        alt="Distant contours of a mountain range"
      />
      <nuxt-img
        id="floor2"
        class="mountain z-0 top-auto"
        src="/background/floor_2_GHnrrjpCz.png"
        alt="Distant contours of a mountain range"
      />
      <nuxt-img
        id="floor"
        class="mountain top-auto"
        src="/background/floor_ftJhey9gP.png"
        alt="The shadow of a tree and two elephants walking."
      />
      <div
        id="details-btn"
        class="uppercase display-inline-block bg-white decoration-none p-3 rounded-xl text-2xl z-20 cursor-pointer"
        @click="scrollIntoView('#about')"
      >
        {{ $t('index.learn_more') }}
      </div>
    </section>
    <section id="about" class="content flex flex-col">
      <div id="gradient"/>
      <div class="md:pt-0 my-auto">
        <h1 class="text-3xl sm:text-5xl text-white mb-3 uppercase">
          {{ $t('index.about.title') }}
        </h1>
        <h4 class="text-2xl text-white mb-3">
          {{ $t('index.about.welcome') }}
        </h4>
        <p class="text-gray-200">
          {{ $t('index.about.we_are') }}<br><br>
          {{ $t('index.about.help_us') }}<br><br>
        </p>
        <p class="text-white text-xl">
          {{ $t('index.about.stay_updated') }}
          <a href="https://t.me/CardanoInAfrica" target="_blank" rel="nofollow noopener">
            <svg
              role="img"
              class="inline ml-2"
              style="fill: #26A5E4;"
              height="32"
              width="32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ><title>Telegram</title>
              <path
                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
              />
            </svg>
          </a>
        </p>
      </div>
      <div id="gradient-bottom" class="mb-0 mt-auto"/>
    </section>
    <section id="stake" class="z-10 content">
      <div class="text-gray-200 flex flex-col w-full md:max-w-5xl">
        <h2 class="text-4xl md:text-5xl text-white mb-3">
          {{ $t('index.stake.stake') }}
        </h2>
        <p class="text-md">
          {{ $t('index.stake.join_our_cause') }}
          <a
            class="underline inline-flex flex-nowrap"
            href="https://adapools.org/pool/9e4ecaff3dac5c4c754a96cad961b404b9eab497afe4357160bb21c7"
            target="_blank"
            rel="noopener"
          >ADAPools
            <outline-external-link-icon class="ml-1 h-4 w-4 my-auto"/>
          </a>.<br><br>
          {{ $t('index.stake.the_stake_pool') }}<br>
          {{ $t('index.stake.you_can_check') }} <a
          target="_blank"
          rel="noopener"
          class="underline inline-flex flex-nowrap"
          href="https://status.cardanoin.africa/"
        >{{ $t('index.stake.status_page') }}
          <outline-external-link-icon class="ml-1 h-4 w-4 my-auto"/>
        </a>.
        </p>
        <h4 class="text-2xl my-4 text-white">
          {{ $t('index.stake.pool_details') }}
        </h4>

        <div
          class="bg-primary-dark rounded-lg border border-primary-lightest p-4 flex flex-col"
        >
          <h5 class="underline text-white">
            {{ $t('index.stake.ticker') }}
          </h5>
          CIA
          <h5 class="underline mt-1 text-white">
            {{ $t('index.stake.pool_name') }}
          </h5>
          {{ $t('index.about.title') }}
          <h5 class="underline mt-1 text-white">
            {{ $t('index.stake.pool_id') }}
          </h5>
          <label for="pool-id" class="hidden" aria-hidden="false">
            Pool Id
          </label>
          <input
            id="pool-id"
            type="text"
            class="overflow-ellipsis rounded-lg bg-primary p-1 cursor-pointer border border-primary-lightest"
            value="9e4ecaff3dac5c4c754a96cad961b404b9eab497afe4357160bb21c7"
            readonly
            @click="copyToClipboard"
          >
        </div>
      </div>
    </section>
    <section id="contact" class="z-10 content text-gray-200">
      <div class="flex flex-col">
        <h2 class="text-4xl md:text-5xl text-white mb-3">
          {{ $t('index.contact.contact') }}
        </h2>
        <h4 class="text-xl my-4 overflow-ellipsis text-white">
          {{ $t('index.contact.if_you_have') }}<a
          href="mailto:admin@cardanoin.africa"
        >admin@cardanoin.africa</a>
        </h4>
        <p class="text-gray-200"/>
      </div>
    </section>
    <footer>
      <div class="flex flex-col justify-center items-center text-white px-8 text-center">
        <a :href="$t('index.footer.pp_href')"
           class="text-white mb-2"
           :title="$t('index.footer.privacy_policy')"
           target="_blank"
           rel="nofollow noopener"
        >
          {{ $t('index.footer.privacy_policy') }}
        </a>
        <a :href="$t('index.footer.cp_href')"
           class="text-white mb-2"
           :title="$t('index.footer.cookie_policy')"
           target="_blank"
           rel="nofollow noopener"
        >
          {{ $t('index.footer.cookie_policy') }}
        </a>
        <span class="mb-4">
          <a target="_blank" rel="nofollow noopener" href="https://www.freepik.com">Illustrations designed by
            Freepik</a>
          | Copyright by David Höglinger
        </span>
      </div>
    </footer>
    <a href="#top" class="fixed right-8 md:right-16 bottom-16 z-50" uk-totop/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    navbar: false,
    scrollUpdate: true
  }),

  head () {
    const i18head = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('index.title').toString(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('index.description').toString()
        },
        ...i18head.meta
      ],
      link: [...i18head.link],
      htmlAttrs: { ...i18head.htmlAttrs }
    }
  },

  mounted () {
    window.setInterval(() => {
      this.scrollUpdate = true
    }, 33)

    const stars = window.document.getElementById('stars')
    const moon = window.document.getElementById('moon')
    const floor2 = window.document.getElementById('floor2')
    const floor3 = window.document.getElementById('floor3')
    // const btn = window.document.getElementById('details-btn')
    const header = window.document.getElementsByTagName('header')

    window.addEventListener('scroll', () => {
      if (!this.scrollUpdate) {
        return
      }

      ['home', 'about', 'stake', 'contact'].forEach((selector) => {
        const element = document.querySelector('#' + selector)
        const navbar = document.getElementsByClassName('navbar-' + selector)
        if (this.isInViewport(element)) {
          for (let i = 0, len = navbar.length | 0; i < len; i = i + 1 | 0) {
            navbar[i].classList.add('nuxt-link-active')
          }
        } else {
          for (let i = 0, len = navbar.length | 0; i < len; i = i + 1 | 0) {
            navbar[i].classList.remove('nuxt-link-active')
          }
        }
      })

      const value = window.scrollY
      if (value < window.innerHeight * 1.1) {
        if (header.length > 0) {
          header[0].style.background = 'transparent'
        }

        if (stars) {
          stars.style.left = value * 0.25 + 'px'
        }

        if (floor3 && floor2) {
          floor3.style.bottom = -60 + value * -0.2 + 'px'
          floor2.style.bottom = -80 + value * -0.1 + 'px'
        }

        if (moon) {
          moon.style.opacity = (1 - value * 0.002).toString()
        }
      } else {
        header[0].style.background = '#1c0522'
      }

      this.scrollUpdate = false
    })

    this.$axios.get('blogs')
  },
  methods: {
    copyToClipboard (event: any) {
      event.target.select()
      document.execCommand('copy')
    },
    scrollToTop () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    scrollIntoView (selector: string) {
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
    },
    isInViewport (element: Element | null) {
      if (element === null) {
        return false
      }

      const rect = element.getBoundingClientRect()
      const center = (rect.bottom + rect.top) / 2
      return (
        center >= 0 &&
        center <= (window.innerHeight || document.documentElement.clientHeight)
      )
    }
  }
})
</script>
