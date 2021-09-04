<template>
  <div>
    <div class="fixed top-0 w-full h-10 md:h-12 bg-white flex z-30">
      <nuxt-link
        class="text-md md:text-2xl font-semibold my-auto align-middle flex rounded-lg"
        :to="{name: 'tutorials' }"
      >
        <outline-chevron-left-icon class="h-6 md:h-8 my-auto" />
        Back
      </nuxt-link>
    </div>

    <h1 class="text-2xl md:text-5xl font-black text-center mb-4">{{ page.title }}</h1>
    <p class="mb-8">{{ page.description }}</p>
    <article class="prose lg:prose-xl">
      <h2>Outline</h2>
      <ul>
        <li
          v-for="link of page.toc"
          :key="link.id"
          :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
        >
          <NuxtLink :to="`#${link.id}`">
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'blog',
  async asyncData ({
    $content,
    route
  }) {
    const page = await $content(route.params.slug).fetch()

    return {
      page
    }
  },
  data () {
    return {
      page: {} as any
    }
  },
  head () {
    return {
      title: (this as any).page.title
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
