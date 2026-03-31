<template>
  <div
    class="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-2 bg-[#0F172A] z-50 border-b border-gray-800"
  >
    <div class="flex items-center gap-3 min-w-0 ">
      <div
        class="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border-2 border-[#38BDF8] flex-none "
      >
        <img :src="usuarioPerfil" class="w-full h-full object-cover" />
      </div>

      <div class="text-white flex flex-col rounded-lg min-w-0 ">
        <h1 class="font-bold text-sm truncate">{{ $t("navbar.guest") }}</h1>
        <span class="text-xs text-red-500/60 truncate">{{ $t("navbar.account") }}</span>
        <span class="text-xs text-gray-400 truncate">leiston09holguin@gmail.com</span>
      </div>
    </div>

    <div class="flex items-center gap-2 md:gap-4">
      <select
        v-model="$i18n.locale"
        class="hidden sm:flex text-xs px-2 py-1 bg-[#1E293B] border border-gray-500 text-white rounded-full"
      >
        <option value="es">{{ $t("navbar.spanish") }}</option>
        <option value="en">{{ $t("navbar.english") }}</option>
      </select>

      <select
        v-model="$i18n.locale"
        class="sm:hidden text-xs px-2 py-1 bg-[#1E293B] border border-gray-500 text-white rounded-full"
      >
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>

      <button
        @click="router.back()"
        class="shrink-0 bg-[#38BDF8] text-[#0F172A] px-5 py-2 rounded-lg text-xs font-bold"
      >
        {{ $t("globalOptions.back") }}
      </button>
    </div>
  </div>

</template>

<script setup>
import usuarioPerfil from "/public/img/usuarioPerfil.jpg";
import { useRouter } from "vue-router";

const router = useRouter();

const home = () => {
  router.push({
    name: 'Home'
  });
};


</script>
