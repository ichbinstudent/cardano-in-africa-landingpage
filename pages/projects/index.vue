<template>
  <div class="w-full">
    <div class="fixed top-0 w-full h-10 md:h-12 bg-white flex z-30">
      <nuxt-link
        class="text-md md:text-2xl font-semibold my-auto align-middle flex rounded-lg"
        :to="{ name: 'index' }"
      >
        <outline-chevron-left-icon class="h-6 md:h-8 my-auto" />
        Back
      </nuxt-link>
    </div>

    <h1 class="text-2xl md:text-5xl font-black text-center">
      Our Projects
    </h1>
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
      <PostPreview v-for="post in posts" :key="post.slug" :post="post" category="projects" />
    </ul>

    <div class="absolute bottom-0 text-xs text-center w-full">
      Icons made by <a
        href="https://www.freepik.com"
        target="_blank"
        rel="nofollow noopener"
        title="Freepik"
      >Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" rel="nofollow noopener" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'blog',

  async asyncData ({ $content }) {
    const posts = await $content('projects')
      .only(['title', 'image', 'tags', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      posts
    }
  },

  head () {
    return {
      title: 'Projects',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'We as the Cardano in Africa stake pool team have many ideas and projects that we want want to implement. Here you can find a list of all the upcoming and completed projects.'
      }]
    }
  }
})
</script>
