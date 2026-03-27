<template>
  <!-- NAVBAR (solo arriba) -->
  <div
    class="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-2 bg-[#0F172A]/95 backdrop-blur-md shadow-md z-50"
  >
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border-2 border-[#38BDF8]">
        <img :src="usuarioPerfil" class="w-full h-full object-cover" />
      </div>

      <div class="text-white flex flex-col leading-tight">
        <h1 class="font-bold text-sm">{{ $t("navbar.guest") }}</h1>
        <span class="text-xs text-gray-300">{{ $t("navbar.account") }}</span>
        <span class="text-xs text-gray-400">leiston09holguin@gmail.com</span>
      </div>
    </div>

    <!-- MENÚ PC -->
    <div class="hidden md:block">
      <ul class="flex gap-6 text-sm font-semibold text-gray-200">
        <li><RouterLink :to="{ path: '/', hash: '#home' }">Home</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#about' }">About</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#projects' }">Projects</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#skills' }">Skills</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#certifications' }">Certifications</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#contact' }">Contact</RouterLink></li>
      </ul>
    </div>

    <!-- DERECHA -->
    <div class="flex items-center gap-2 md:gap-4">
      <select v-model="$i18n.locale" class="px-2 py-1 bg-[#1E293B] border border-gray-500 text-white rounded-full text-xs">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>

      <button v-if="!isLoggedIn" class="bg-[#38BDF8] text-[#0F172A] px-2 py-1 rounded-lg text-xs">
        {{ $t("navbar.login") }}
      </button>
    </div>
  </div>

  <!-- 🔥 MENÚ MÓVIL (SEPARADO) -->
  <div class="md:hidden fixed bottom-0 left-0 right-0 bg-[#0F172A]/95 backdrop-blur-md border-t border-gray-800 z-50">
    <ul class="flex justify-around py-2 text-xs text-gray-300">

      <li>
        <RouterLink :to="{ path: '/', hash: '#home' }" class="flex flex-col items-center hover:text-[#38BDF8]">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink :to="{ path: '/', hash: '#about' }" class="flex flex-col items-center hover:text-[#38BDF8]">
          <i class="fas fa-user"></i>
          <span>About</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink :to="{ path: '/', hash: '#projects' }" class="flex flex-col items-center hover:text-[#38BDF8]">
          <i class="fas fa-code"></i>
          <span>Projects</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink :to="{ path: '/', hash: '#skills' }" class="flex flex-col items-center hover:text-[#38BDF8]">
          <i class="fas fa-brain"></i>
          <span>Skills</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink :to="{ path: '/', hash: '#contact' }" class="flex flex-col items-center hover:text-[#38BDF8]">
          <i class="fas fa-envelope"></i>
          <span>Contact</span>
        </RouterLink>
      </li>

    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import usuarioPerfil from "@/assets/img/usuarioPerfil.jpg";

const isLoggedIn = ref(false);
</script>
