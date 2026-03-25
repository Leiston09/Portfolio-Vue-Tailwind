<template>
  <header class="flex justify-between items-center px-3 py-2 bg-[#F8F3C6] shadow-sm">

    <div class="flex items-center gap-2">
      <div class="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full">
        <img
          src="../assets/img/imgPrueba.png"
          alt="User profile"
          class="w-full h-full object-cover"
        />
      </div>

      <h1 class="font-bold text-[#442A18] text-xs md:text-base lg:text-lg">
        Invitado
      </h1>
    </div>

    <div class="flex items-center gap-1 md:gap-3">

      <div class="hidden sm:flex">
        <button class="bg-[#EB9D23] text-[#442A18] px-2 py-1 rounded-l-xl border border-[#442A18] font-semibold text-xs md:text-sm">
          EN
        </button>
        <button class="bg-[#EB9D23] text-[#442A18] px-2 py-1 rounded-r-xl border border-[#442A18] font-semibold text-xs md:text-sm">
          ES
        </button>
      </div>

      <button class="p-1 md:p-2 hover:bg-[#EB9D23]/20 rounded-full">
        🔔
      </button>

      <button class="p-1 md:p-2 hover:bg-[#EB9D23]/20 rounded-full">
        ⚙️
      </button>

      <button
        v-if="!isLoggedIn"
        class="bg-[#EB9D23] text-[#442A18] px-2 py-1 rounded-lg border border-[#442A18] text-xs md:text-sm font-semibold"
      >
        Login
      </button>

    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isLoggedIn = ref(false);
</script>