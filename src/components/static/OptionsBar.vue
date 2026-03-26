<template>
  <div
    class="fixed top-0 left-0 right-0 flex justify-between items-center px-3 py-2 bg-[#F8F3C6]/90 backdrop-blur-md shadow-sm z-50"
  >
    <div class="flex items-center gap-2">
      <div class="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full">
        <img
          :src="usuarioPerfil"
          alt="Foto de perfil usuario"
          class="w-full h-full object-cover"
        />
      </div>

      <h1 class="font-bold text-[#442A18] text-xs md:text-base lg:text-lg">
        {{ t("navbar.guest") }}
      </h1>
    </div>

    <div class="flex items-center gap-2 md:gap-4">
      <select
        v-model="$i18n.locale"
        class="px-1 sm:px-2 md:px-3 bg-transparent outline-none cursor-pointer hover:bg-[#EB9D23]/20 rounded-full border border-[#442A18] text-xs md:text-sm font-semibold"
      >
        <option value="es">{{ t("navbar.spanish") }}</option>
        <option value="en">{{ t("navbar.english") }}</option>
      </select>

      <button
        class="p-1 md:p-2 hover:bg-[#EB9D23]/20 rounded-full transition-all duration-200 hover:scale-110"
      >
        🔔
      </button>

      <button
        v-if="!isLoggedIn"
        class="bg-[#EB9D23] text-[#442A18] px-2 py-1 rounded-lg border border-[#442A18] text-xs md:text-sm font-semibold md:px-6 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
      >
        {{ t("navbar.login") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import usuarioPerfil from '@/assets/img/usuarioPerfil.jpg'

const { t } = useI18n();
const isLoggedIn = ref(false);
</script>
