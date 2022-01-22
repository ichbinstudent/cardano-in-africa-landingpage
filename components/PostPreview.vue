<template>
  <div class="transition-all duration-500 ease-in-out" v-if="post">
    <nuxt-link
      :to="
        localePath({
          name: post.attributes.category_name + '-slug',
          params: { slug: post.attributes.slug },
        })
      "
    >
      <nuxt-img
        alt="Preview image"
        class="rounded-lg"
        :src="post.attributes.image_url"
        width="400"
        height="300"
        fit="contain"
      />
      <ul v-if="post.tags" class="flex space-x-3 mt-2">
        <li v-for="tag in post.tags" :key="tag" class="text-gray-400 font-bold">
          {{ tag }}
        </li>
      </ul>
      <h2 class="mt-2 text-center text-xl md:text-3xl font-semibold">
        {{ post.attributes.title }}
      </h2>
    </nuxt-link>
  </div>
  <div v-else>loading...</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    post: {
      required: true,
      type: Object as () => any,
    },
    category: {
      required: true,
      type: String,
    },
  },

  data() {
    return {
      backend_url: process.env.BACKEND_URL,
    };
  },
});
</script>
