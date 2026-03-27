<template>
  <div class="flex flex-col md:flex-row items-center gap-12">
    <div class="flex-1 space-y-6">
      <span
        class="text-xs border border-[#38BDF8] text-[#38BDF8] px-3 py-1 rounded-full"
      >
        {{ $t("home.portfolioTitle") }}
      </span>

      <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight">
        Leiston Alexander <br />
        <span class="text-[#38BDF8]">Holguin Aguirre</span>
      </h1>

      <p class="text-gray-300 max-w-xl">
        {{ $t("home.welcomeMessage") }}
      </p>

      <div class="flex flex-wrap gap-3">
        <button
          class="bg-[#38BDF8] text-[#020617] px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          {{ $t("home.ViewProjects") }}
        </button>

        <button
          class="border border-gray-500 text-white px-5 py-2 rounded-lg hover:bg-[#1E293B] transition"
        >
          {{ $t("home.ViewCV") }}
        </button>

        <button
          class="border border-gray-500 text-white px-5 py-2 rounded-lg hover:bg-[#1E293B] transition"
        >
          {{ $t("home.ViewContact") }}
        </button>
      </div>
    </div>

    <div class="flex-1 flex justify-center">
      <div class="relative">
        <div
          class="absolute inset-0 bg-[#38BDF8] blur-3xl opacity-20 rounded-full"
        ></div>

        <div
          class=" w-56 h-56 md:w-100 md:h-100 overflow-hidden shadow-xl relative mask-radial-[50%_50%] mask-radial-from-80%"
        >
          <img
            :src="PerfilError"
            alt="Foto"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PerfilError from "@/assets/img/GIF/PerfilError.gif";
</script>
