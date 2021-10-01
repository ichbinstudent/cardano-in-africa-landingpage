<template>
  <li class="transition-all duration-500 ease-in-out">
    <nuxt-link :to="{name: category + '-slug', params: { slug: post.slug }}">
      <nuxt-img
        class="rounded-lg"
        :src="'/images/content/previews/' + post.image"
        width="400"
        height="300"
        fit="contain"
      />
      <ul v-if="post.tags" class="flex space-x-3 mt-2">
        <li v-for="tag in post.tags" :key="tag" class="text-gray-400 font-bold">
          {{ tag }}
        </li>
      </ul>
      <h2 class="mt-2 text-xl md:text-3xl font-semibold">
        {{ post.title }}
      </h2>
    </nuxt-link>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    post: {
      required: true,
      type: Object as () => any
    },
    category: {
      required: true,
      type: String
    }
  }
})
</script>
