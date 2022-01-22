<template>
  <div class="w-full">
    <h1 class="uk-heading-large uk-heading-divider">
      {{ $t("tutorials.tutorials") }}
    </h1>
    <div uk-grid>
      <PostPreview
        v-for="post in posts.data"
        :key="post.id"
        :post="post"
        category="tutorials"
      />
    </div>
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
          params: { "filters[category_name][$eq]": "tutorials" },
        })
      ).data,
      global: (await $axios.get("global")).data,
    };
  },

  head() {
    const i18head = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: this.$t("tutorials.title").toString(),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("tutorials.description").toString(),
          ...i18head.meta,
        },
      ],
      link: [...i18head.link],
      htmlAttrs: { ...i18head.htmlAttrs },
    };
  },
});
</script>
