<template>
  <div>
    <h1 class="text-2xl md:text-5xl font-black text-center mb-4">
      {{ article.attributes.title }}
    </h1>
    <p class="mb-8">
      {{ article.attributes.metadescription }}
    </p>
    <article class="prose lg:prose-xl">
      <div v-html="$md.render('${toc}\n' + article.attributes.content)" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'blog',
  async asyncData({ params, $axios }) {
    const matchingBlogs = (await $axios.get('blogs', {params: {"filters[slug][$eq]": params.slug}})).data.data[0];
    return {
      article: matchingBlogs
    };
  },

  data () {
    return {
      article: {} as any
    }
  },

  head () {
    return {
      title: (this as any).article.attributes.title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: (this as any).article.metadescription
      }]
    }
  }
})
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}

.nuxt-content p {
  margin-bottom: 20px;
}
</style>
