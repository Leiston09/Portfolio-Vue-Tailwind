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
        <span class="text-xs text-gray-400 truncate"></span>
      </div>
    </div>

    <div class="hidden lg:block">
      <ul class="flex gap-6 text-sm font-semibold text-gray-200">
        <li>
          <RouterLink :to="{ path: '/', hash: '#home' }">{{
            $t("navbar.menu.home")
          }} </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ path: '/', hash: '#projects' }">{{
            $t("navbar.menu.projects")
          }}</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ path: '/', hash: '#skills' }">{{
            $t("navbar.menu.skills")
          }}</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ path: '/', hash: '#certifications' }">{{
            $t("navbar.menu.certifications")
          }}</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ path: '/', hash: '#contact' }">{{
            $t("navbar.menu.contact")
          }}</RouterLink>
        </li>
      </ul>
    </div>

    <div class="flex items-center gap-1 md:gap-4 px-5">
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
        @click="login"
        v-if="!isLoggedIn"
        class="shrink-0 bg-[#38BDF8] text-[#0F172A] px-2 md:px-3 py-2 rounded-lg text-xs mx-2 md:mx-0 "
      >
        {{ $t("navbar.login") }}
      </button>
    </div>
  </div>

  <div
    class="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0F172A] border-t border-gray-800 z-50"
  >
    <ul class="flex justify-around py-2 text-xs text-gray-300">
      <li>
        <RouterLink
          :to="{ path: '/', hash: '#home' }"
          class="flex flex-col items-center hover:text-[#38BDF8]"
        >
          <i class="fas fa-home"></i>
          <span>{{ $t("navbar.menu.home") }}</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink
          :to="{ path: '/', hash: '#about' }"
          class="flex flex-col items-center hover:text-[#38BDF8]"
        >
          <i class="fas fa-user"></i>
          <span>{{ $t("navbar.menu.AboutMe") }}</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink
          :to="{ path: '/', hash: '#projects' }"
          class="flex flex-col items-center hover:text-[#38BDF8]"
        >
          <i class="fas fa-code"></i>
          <span>{{ $t("navbar.menu.projects") }}</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink
          :to="{ path: '/', hash: '#skills' }"
          class="flex flex-col items-center hover:text-[#38BDF8]"
        >
          <i class="fas fa-brain"></i>
          <span>{{ $t("navbar.menu.skills") }}</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink
          :to="{ path: '/', hash: '#contact' }"
          class="flex flex-col items-center hover:text-[#38BDF8]"
        >
          <i class="fas fa-envelope"></i>
          <span>{{ $t("navbar.menu.contact") }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import usuarioPerfil from "/public/img/usuarioPerfil.jpg";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoggedIn = ref(false);

const login = () => {
  router.push({
    name: 'Access'
  });
};


</script>
