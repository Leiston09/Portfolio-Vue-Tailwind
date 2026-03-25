<template>
  <div
    class="fixed top-0 left-0 right-0 flex justify-between items-center px-3 py-2 bg-[#F8F3C6] shadow-sm z-50"
  >
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
      <select
        class="px-1 sm:px-2 md:px-3 hover:bg-[#EB9D23]/20 rounded-full border border-[#442A18] text-xs md:text-sm font-semibold"
      >
        <option value="">Es</option>
        <option value="">En</option>
      </select>

      <button class="p-1 md:p-2 hover:bg-[#EB9D23]/20 rounded-full">🔔</button>

      <button
        v-if="!isLoggedIn"
        class="bg-[#EB9D23] text-[#442A18] px-2 py-1 rounded-lg border border-[#442A18] text-xs md:text-sm font-semibold"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isLoggedIn = ref(false);
</script>
