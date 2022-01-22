<template>
  <div class="w-full">
    <h1 class="uk-heading-large uk-heading-divider">
      {{ $t("projects.our_projects") }}
    </h1>
    <div uk-grid>
      <PostPreview
        v-for="post in posts.data"
        :key="post.id"
        :post="post"
        category="projects"
      />
    </div>

    <p class="absolute bottom-0 left-auto right-auto text-xs text-center">
      Icons made by
      <a
        href="https://www.freepik.com"
        target="_blank"
        rel="nofollow noopener"
        title="Freepik"
        >Freepik</a
      >
      from
      <a
        href="https://www.flaticon.com/"
        target="_blank"
        rel="nofollow noopener"
        title="Flaticon"
        >www.flaticon.com</a
      >
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "blog",

  async asyncData({ $axios }) {
    return {
      posts: (
        await $axios.get("blogs", {
          params: { "filters[category_name][$eq]": "projects" },
        })
      ).data
    };
  },

  head() {
    const i18head = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: this.$t("projects.title").toString(),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("projects.description").toString(),
          ...i18head.meta,
        },
      ],
      link: [...i18head.link],
      htmlAttrs: { ...i18head.htmlAttrs },
    };
  },
});
</script>
