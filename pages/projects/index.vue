<template>
  <div class="w-full">
    <h1 class="text-2xl md:text-5xl font-black text-center">
      {{ $t('projects.our_projects') }}
    </h1>
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
      <PostPreview v-for="post in posts" :key="post.slug" :post="post" category="projects" />
    </ul>

    <p class="absolute bottom-0 left-auto right-auto text-xs text-center">
      Icons made by <a
        href="https://www.freepik.com"
        target="_blank"
        rel="nofollow noopener"
        title="Freepik"
      >Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" rel="nofollow noopener" title="Flaticon">www.flaticon.com</a>
    </p>
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
      title: this.$t('projects.title'),
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.$t('projects.description')
      }]
    }
  }
})
</script>
