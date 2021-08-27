<template>
  <div>
    <header
      class="
        fixed
        top-0
        left-0
        px-32
        py-12
        flex
        text-xl
        justify-between
        items-center
        w-full
        z-50
      "
    >
      <a href="#" class="logo">Logo</a>
      <ul
        class="list-none content-center items-center text-white hidden md:flex"
      >
        <li class="mx-2">
          <nuxt-link to="#" class="rounded-lg p-2"> Home </nuxt-link>
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
    <section class="relative w-full scroll-art">
      <img
        class="z-10 top-auto"
        src="/images/background/elephants.png"
        id="elephants"
      />
      <img
        class="left-1/2 right-1/2 z-0"
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
    <section class="z-10 content" id="about">
      <div>
        <h2 class="text-5xl text-white mb-3 uppercase">Cardano In Africa</h2>
        <h4 class="text-2xl text-white mb-3">
          Welcome to the unofficial stake pool for Cardano in Africa!
        </h4>
        <p class="text-gray-300">
          Our goal is to increase adoption and provide education to the people
          of the continent.
        </p>
      </div>
    </section>
    <section class="z-10 content" id="stake">
      <div class="">
        <h2 class="text-5xl text-white mb-3">Stake</h2>
        <p class="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh
          tristique, convallis dui vitae, posuere nunc. Suspendisse elementum
          consequat dolor, vel aliquet lacus ultricies eu. Sed venenatis sapien
          odio, id fringilla sapien vehicula non. Duis sapien eros, sagittis sit
          amet lectus sed, sollicitudin sagittis lacus. Curabitur tincidunt
          hendrerit fringilla. Quisque fermentum vulputate sem vel sollicitudin.
          Ut quis viverra mauris. Integer non finibus lectus. Morbi semper diam
          mauris, tempus finibus orci mollis at. Quisque bibendum ligula sit
          amet scelerisque porttitor. Aenean eget dui tempus, accumsan nibh
          consequat, pellentesque erat. luctus blandit.
          <a href="http://www.freepik.com">Designed by Freepik</a>
        </p>
      </div>
    </section>
    <section class="z-10 content" id="contact">
      <div class="">
        <h2 class="text-5xl text-white mb-3">Contact</h2>
        <p class="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nibh
          tristique, convallis dui vitae, posuere nunc. Suspendisse elementum
          consequat dolor, vel aliquet lacus ultricies eu. Sed venenatis sapien
          odio, id fringilla sapien vehicula non. Duis sapien eros, sagittis sit
          amet lectus sed, sollicitudin sagittis lacus. Curabitur tincidunt
          hendrerit fringilla. Quisque fermentum vulputate sem vel sollicitudin.
          Ut quis viverra mauris. Integer non finibus lectus. Morbi semper diam
          mauris, tempus finibus orci mollis at. Quisque bibendum ligula sit
          amet scelerisque porttitor. Aenean eget dui tempus, accumsan nibh
          consequat, pellentesque erat. luctus blandit.
        </p>
      </div>
    </section>
    <footer>
      <div class="flex justify-center items-center h-32 text-white">
        <p>
        <a href="http://www.freepik.com">Illustrations designed by Freepik</a> | Copyright by David Höglinger
        </p>
      </div>
    </footer>
    <a href="#" class="fixed bg-white rounded-full p-4 right-16 bottom-16 z-50"
      ><img class="h-8 w-8" src="/images/keyboard_arrow_up_black_24dp.svg" /></a
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {
    let stars = window.document.getElementById("stars");
    let moon = window.document.getElementById("moon");
    let floor = window.document.getElementById("floor");
    let floor2 = window.document.getElementById("floor2");
    let floor3 = window.document.getElementById("floor3");
    let elephants = window.document.getElementById("elephants");
    let btn = window.document.getElementById("details-btn");

    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      if (value < 1000) {
        stars.style.left = value * 0.25 + "px";
        moon.style.top = 10 + value * 0.1 + "vh";
        floor3.style.bottom = -60 + value * -0.2 + "px";
        floor2.style.bottom = -80 + value * -0.1 + "px";
        // floor.style.bottom = value * -0.5 + "px";
        // elephants.style.bottom = 12 + value * 0.004 + "vh";
        elephants.style.right = value * -0.12 + "px";
        btn.style.opacity = 1 - value * 0.003;
      }
    });
  },
});
</script>
