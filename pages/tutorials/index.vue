<template>
  <div>
    <div class="fixed top-0 w-full h-10 md:h-12 bg-white flex z-30">
      <nuxt-link
        class="text-md md:text-2xl font-semibold my-auto align-middle flex rounded-lg"
        :to="{name: 'index' }"
      >
        <outline-chevron-left-icon class="h-6 md:h-8 my-auto" />
        Back
      </nuxt-link>
    </div>

    <h1 class="text-2xl md:text-5xl font-black text-center">
      Tutorials
    </h1>
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
      <PostPreview v-for="post in posts" :key="post.slug" :post="post" category="tutorials" />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'blog',

  async asyncData ({ $content }) {
    const posts = await $content('tutorials')
      .only(['title', 'image', 'tags', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      posts
    }
  },

  head () {
    return {
      title: 'Tutorials',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Knowledge is power. In this section we want to help you find your way into the cardano ecosystem and learn how to use decentral apps and services. We also provide you with other sources where you can find high quality tutorials and guides.'
      }]
    }
  }
})
</script>
