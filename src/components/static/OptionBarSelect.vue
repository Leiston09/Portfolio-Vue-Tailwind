<template>
  <div class="flex items-center gap-4">
    <!-- SELECT PERSONALIZADO (DESKTOP) -->
    <div class="hidden sm:block relative">
      <button @click="toggleLangMenu" class="flex items-center gap-2 text-xs pl-3 pr-4 py-1.5 bg-[#1E293B]/80 border border-gray-700 hover:border-[#38BDF8]/50 text-gray-200 hover:text-white rounded-full backdrop-blur-sm transition-all duration-200">
        <span>🌐</span>
        <span class="font-medium">{{ $i18n.locale === 'es' ? $t("navbar.spanish") : $t("navbar.english") }}</span>
        <span class="text-[10px] text-gray-500 transition-transform duration-200" :class="langOpen ? 'rotate-180' : ''">▼</span>
      </button>
      <div v-if="langOpen" class="absolute left-0 mt-2 w-36 rounded-xl border border-white/10 bg-[#0F172A]/95 backdrop-blur-md shadow-2xl p-1 flex flex-col gap-1 z-50">
        <button @click="changeLang('es')" :class="$i18n.locale === 'es' ? 'bg-[#38BDF8]/10 text-[#38BDF8]' : 'text-gray-300 hover:bg-white/5'" class="w-full text-left text-xs px-3 py-2 rounded-lg transition-all duration-150">
          {{ $t("navbar.spanish") }}
        </button>
        <button @click="changeLang('en')" :class="$i18n.locale === 'en' ? 'bg-[#38BDF8]/10 text-[#38BDF8]' : 'text-gray-300 hover:bg-white/5'" class="w-full text-left text-xs px-3 py-2 rounded-lg transition-all duration-150">
          {{ $t("navbar.english") }}
        </button>
      </div>
    </div>

    <!-- SELECT PERSONALIZADO (MOBILE) -->
    <div class="sm:hidden relative">
      <button @click="toggleLangMenu" class="flex items-center gap-1.5 text-xs pl-3 pr-3 py-1.5 bg-[#1E293B]/80 border border-gray-700 text-gray-200 rounded-full backdrop-blur-sm">
        <span class="font-medium uppercase">{{ $i18n.locale }}</span>
        <span class="text-[8px] text-gray-500" :class="langOpen ? 'rotate-180' : ''">▼</span>
      </button>
      <div v-if="langOpen" class="absolute left-0 mt-2 w-20 rounded-xl border border-white/10 bg-[#0F172A]/95 backdrop-blur-md shadow-2xl p-1 flex flex-col gap-1 z-50">
        <button @click="changeLang('es')" :class="$i18n.locale === 'es' ? 'bg-[#38BDF8]/10 text-[#38BDF8]' : 'text-gray-300'" class="w-full text-center text-xs py-2 rounded-lg">
          ES
        </button>
        <button @click="changeLang('en')" :class="$i18n.locale === 'en' ? 'bg-[#38BDF8]/10 text-[#38BDF8]' : 'text-gray-300'" class="w-full text-center text-xs py-2 rounded-lg">
          EN
        </button>
      </div>
    </div>

    <div v-if="!isLoggedIn">
      <button @click="$emit('login')" class="shrink-0 whitespace-nowrap bg-[#38BDF8] text-[#0F172A] px-4 md:px-6 py-2 rounded-lg text-xs mx-2 md:mx-0">
        {{ $t("navbar.login") }}
      </button>
    </div>
    <div v-else class="relative">
      <button @click="toggleMenu" :class="open ? 'bg-[#38BDF8]/20 border border-[#38BDF8]' : 'hover:bg-[#1E293B] border border-transparent'" class="px-3 py-2 rounded-full transition-all duration-200">
        ⚙️
      </button>
      <div v-if="open">
        <ConfigMenu :open="open" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import ConfigMenu from "./ConfigMenu.vue";

type Props = {
  isLoggedIn: boolean;
};

defineProps<Props>();
defineEmits<{ (e: "login"): void }>();

const open = ref<boolean>(false);
const langOpen = ref<boolean>(false);
const { locale } = useI18n();

const toggleMenu = (): void => {
  open.value = !open.value;
  if (open.value) langOpen.value = false;
};

const toggleLangMenu = (): void => {
  langOpen.value = !langOpen.value;
  if (langOpen.value) open.value = false;
};

const changeLang = (lang: string): void => {
  locale.value = lang;
  langOpen.value = false;
};
</script>