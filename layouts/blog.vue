<template>
  <!-- <div class="min-h-screen w-screen max-w-7xl mx-auto px-4 sm:px-16 pt-12 md:pt-16"> -->
  <div>
    <nav
      class="uk-navbar-container"
      uk-navbar
      data-uk-sticky
    >
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <button
              class="
                text-md
                md:text-2xl
                font-semibold
                my-auto
                align-middle
                flex
                rounded-lg
                cursor-pointer
                outline-none
                p-2
              "
              aria-label="Go Back"
              @click="$router.back()"
            >
              <outline-chevron-left-icon class="h-6 md:h-8 my-auto" />
              {{ $t("back") }}
            </button>
          </li>
        </ul>
      </div>
    </nav>

    <div class="uk-container">
      <Nuxt />
    </div>

    <a href="#top" class="fixed right-8 md:right-16 bottom-16 z-50" uk-totop />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
});
</script>
