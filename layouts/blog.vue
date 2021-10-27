<template>
  <div class="min-h-screen w-screen max-w-7xl mx-auto px-4 sm:px-16 pt-12 md:pt-16">
    <div class="fixed top-0 h-10 md:h-12 bg-white z-30">
      <button
        class="text-md md:text-2xl font-semibold my-auto align-middle flex rounded-lg cursor-pointer outline-none p-2"
        aria-label="Go Back"
        @click.stop="$router.back()"
      >
        <outline-chevron-left-icon class="h-6 md:h-8 my-auto" />
        {{ $t('back') }}
      </button>
    </div>

    <div class="">
      <Nuxt />
    </div>

    <div
      class="fixed bg-white rounded-lg p-2 right-8 md:right-16 bottom-16 z-50 cursor-pointer hover:bg-purple-200 shadow-lg"
      @click="scrollToTop"
    >
      <img
        class="h-8 w-8"
        height="2rem"
        width="2rem"
        src="/keyboard_arrow_up_black_24dp.svg"
        alt="Arrow pointing upwards"
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    scrollToTop () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
})
</script>
