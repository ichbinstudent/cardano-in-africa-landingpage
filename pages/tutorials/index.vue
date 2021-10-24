<template>
  <div class="w-full">
    <h1 class="text-2xl md:text-5xl font-black text-center">
      {{ $t('tutorials.tutorials') }}
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
      title: this.$t('tutorials.title').toString(),
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.$t('tutorials.description').toString()
      }]
    }
  }
})
</script>
