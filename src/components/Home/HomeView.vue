<template>
  <div class="flex flex-col md:flex-row items-center gap-12">
    <div class="flex-1 space-y-6">
      <span
        class="text-xs border border-[#38BDF8] text-[#38BDF8] px-3 py-1 rounded-full"
      >
        {{ $t("home.portfolioTitle") }}
      </span>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight text-center md:text-left  ">
        Leiston Alexander <br />
        <span class="text-[#38BDF8]">Holguin Aguirre</span>
      </h1>

      <p class="text-gray-300 text-justify max-w-lg ">
        {{ $t("home.welcomeMessage") }}
      </p>

      <div class="flex flex-wrap justify-center gap-3">
        <RouterLink
        :to="{path: '/', hash: '#projects'}"
          class="bg-[#38BDF8] text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition-all">
          {{ $t("home.ViewProjects") }}
        </RouterLink>

        <RouterLink
        :to="{name: 'Curriculum'}"
          class="border border-gray-500 text-white px-5 py-2 rounded-lg hover:bg-[#1E293B] hover:scale-105 transition-all"
        >
          {{ $t("home.ViewCV") }}
        </RouterLink>

        <RouterLink
        :to="{path: '/' , hash: '#contact'}"
          class="border border-gray-500 text-white px-5 py-2 rounded-lg hover:bg-[#1E293B] hover:scale-105 transition-all"
        >
          {{ $t("home.ViewContact") }}
        </RouterLink>
      </div>
    </div>

    <div class="hidden lg:flex flex-1 justify-center items-center">
        <div
          class=" w-56 h-56 md:w-100 md:h-100 overflow-hidden rounded-full border border-azul-oscuro mask-radial-[50%_50%] mask-radial-from-0%"
        >
          <img
            :src="PerfilError"
            alt="Foto"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
</template>

<script setup>
import PerfilError from "/img/gif/PerfilError.gif";
</script>
