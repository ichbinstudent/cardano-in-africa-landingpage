<template>
  <div>
    <header
      class="
        fixed
        top-0
        left-0
        px-0
        md:px-32
        py-12
        flex
        text-xl
        justify-between
        items-center
        w-full
        z-50
      "
    >
      <a href="#top" class="logo mx-auto">C I A</a>
      <ul
        class="list-none content-center items-center text-white hidden md:flex"
      >
        <li class="mx-2">
          <nuxt-link to="#top" class="rounded-lg p-2"> Home </nuxt-link>
        </li>
        <li class="mx-2">
          <nuxt-link to="#about" class="rounded-lg p-2">About</nuxt-link>
        </li>
        <li class="mx-2">
          <nuxt-link to="#stake" class="rounded-lg p-2">Stake</nuxt-link>
        </li>
        <li class="mx-2">
          <nuxt-link to="#contact" class="rounded-lg p-2">Contact</nuxt-link>
        </li>
      </ul>
    </header>
    <section class="relative w-full scroll-art" id="top">
      <img
        class="z-10 top-auto"
        src="/images/background/elephants.png"
        id="elephants"
      />
      <img
        class="fixed mx-auto z-0"
        src="/images/background/moon.svg"
        id="moon"
      />
      <img class="z-0" src="/images/background/stars.svg" id="stars" />
      <img
        class="mountain z-0 top-auto"
        src="/images/background/floor_3.png"
        id="floor3"
      />
      <img
        class="mountain z-0 top-auto"
        src="/images/background/floor_2.png"
        id="floor2"
      />
      <img
        class="mountain top-auto"
        src="/images/background/floor.png"
        id="floor"
      />
      <a
        class="
          uppercase
          display-inline-block
          bg-white
          decoration-none
          p-3
          rounded-xl
          text-2xl
          z-20
        "
        id="details-btn"
        href="#about"
      >
        About us
      </a>
    </section>
    <section class="content" id="about">
      <div class="pt-16 sm:pt-0">
        <h1 class="text-3xl sm:text-5xl text-white mb-3 uppercase">
          Cardano In Africa
        </h1>
        <h4 class="text-2xl text-white mb-3">
          Welcome to the unofficial stake pool for Cardano in Africa!
        </h4>
        <p class="text-gray-200">
          Our goal is to increase adoption and provide education to the people
          of the continent.
        </p>
      </div>
    </section>
    <section class="z-10 content" id="stake">
      <div class="text-gray-200 flex flex-col w-full md:max-w-5xl">
        <h2 class="text-5xl text-white mb-3">Stake</h2>
        <p class="">
          Join our cause to improve the education on blockchain and the adoption
          of Cardano in Africa. You can find more technical details on
          <a
            class="underline"
            href="https://adapools.org/pool/9e4ecaff3dac5c4c754a96cad961b404b9eab497afe4357160bb21c7"
            target="_blank"
            rel="noopener"
            >ADAPools</a
          >
        </p>
        <h4 class="text-2xl my-4">Pool Details</h4>

        <div
          class="
            bg-gray-900
            rounded-lg
            border border-gray-800
            p-4
            flex flex-col
          "
        >
          <h5 class="underline">Ticker</h5>
          CIA
          <h5 class="underline mt-1">Pool Name</h5>
          Cardano in Africa
          <h5 class="underline mt-1">Pool ID (click to copy)</h5>
          <input
            type="text"
            class="overflow-ellipsis rounded-lg bg-gray-700 p-1 cursor-pointer"
            @click="copyToClipboard"
            value="9e4ecaff3dac5c4c754a96cad961b404b9eab497afe4357160bb21c7"
            readonly
          />
        </div>
      </div>
    </section>
    <section class="z-10 content text-gray-200" id="contact">
      <div class="flex flex-col">
        <h2 class="text-5xl text-white mb-3">Contact</h2>
        <h4 class="text-xl my-4 overflow-ellipsis">
          You can send us an email at
          <a href="mailto:admin@cardanoin.africa">admin@cardanoin.africa</a>
        </h4>
        <p class="text-gray-200"></p>
      </div>
    </section>
    <footer>
      <div
        class="
          flex
          justify-center
          items-center
          h-32
          text-white
          px-8
          text-center
        "
      >
        <p>
          <a href="http://www.freepik.com">Illustrations designed by Freepik</a>
          | Copyright by David Höglinger
        </p>
      </div>
    </footer>
    <a
      href="#top"
      class="fixed bg-white rounded-full p-4 right-16 bottom-16 z-50"
      ><img class="h-8 w-8" src="/images/keyboard_arrow_up_black_24dp.svg"
    /></a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {
    if (
      ["#top", "#about", "#stake", "#contact"].indexOf(
        window.location.href.split("/").slice(-1)[0]
      ) < 0
    ) {
      window.location.href = "#top";
    }

    let stars = window.document.getElementById("stars");
    let moon = window.document.getElementById("moon");
    let floor = window.document.getElementById("floor");
    let floor2 = window.document.getElementById("floor2");
    let floor3 = window.document.getElementById("floor3");
    let elephants = window.document.getElementById("elephants");
    let btn = window.document.getElementById("details-btn");
    let header = window.document.getElementsByTagName("header");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      if (value < 1100) {
        header[0].style.background = "transparent";

        if (stars) stars.style.left = value * 0.25 + "px";

        if (floor3 && floor2) {
          floor3.style.bottom = -60 + value * -0.2 + "px";
          floor2.style.bottom = -80 + value * -0.1 + "px";
        }

        if (elephants) elephants.style.right = value * -0.12 + "px";
        if (moon) moon.style.opacity = (1 - value * 0.002).toString();
      } else {
        header[0].style.background = "#1c0522";
      }
    });
  },
  methods: {
    copyToClipboard(event: any) {
      event.target.select();
      document.execCommand("copy");
    },
  },
});
</script>
