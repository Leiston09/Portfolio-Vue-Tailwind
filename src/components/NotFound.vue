<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0F172A]">
    <h1 class="text-7xl md:text-9xl font-extrabold text-celeste drop-shadow-[0_0_25px_rgba(56,189,248,0.5)] animate-pulse">
      404
    </h1>
    <h2 class="mt-4 text-2xl md:text-4xl font-bold text-white tracking-wide">
      {{ $t("notFounds.notFound") }}
    </h2>
    <p class="mt-4 text-gray-400 max-w-xl text-sm md:text-lg leading-relaxed">
      {{ $t("notFounds.notDescription") }}
    </p>
    <div class="flex flex-wrap justify-center gap-4 mt-8">
      <RouterLink to="/" class="bg-celeste hover:bg-celeste/80 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-celeste/30">
        {{ $t("notFounds.notHome") }}
      </RouterLink>
      <button @click="goBack" class="border border-gray-600 hover:border-celeste hover:bg-celeste/10 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
        {{ $t("globalOptions.back") }}
      </button>
    </div>
    <div class="w-40 h-1 bg-celeste rounded-full mt-12 shadow-[0_0_20px_rgba(56,189,248,0.7)]"></div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

function goBack() {
  router.back();
}
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
h1 {
  animation: float 3s ease-in-out infinite;
}
</style>