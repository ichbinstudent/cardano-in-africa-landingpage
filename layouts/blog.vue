<template>
  <div class="min-h-screen w-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-16 pt-12 md:pt-16">
      <Nuxt />
    </div>

    <div
      class="fixed bg-white shadow-lg rounded-lg p-2 right-8 md:right-16 bottom-16 z-50 cursor-pointer hover:bg-gray-100"
      @click="scrollToTop"
    >
      <img
        class="h-8 w-8"
        src="/keyboard_arrow_up_black_24dp.svg"
        alt="Arrow up icon"
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: 'Tutorials'
  },
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
