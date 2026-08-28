<template>
  <div class="flex items-center gap-1 md:gap-2 md:pr-2">
    <div class="relative">
      <button
        @click="toggleLangMenu"
        class="flex items-center gap-1.5 sm:gap-2 text-xs pl-3 pr-3 sm:pr-4 py-1.5 bg-white/90 dark:bg-bg-tertiary/90 border border-border-light dark:border-border-secondary hover:border-primary/60 text-text-light-primary dark:text-text-primary rounded-full backdrop-blur-sm shadow-sm dark:shadow-none transition-all duration-200"
      >
        <span class="hidden sm:inline">🌐</span>
        <span class="font-medium uppercase sm:capitalize">
          {{ $i18n.locale === 'es' ? ($i18n.locale === 'es' && windowWidth >= 640 ? $t('navbar.language.spanish') : 'ES') : ($i18n.locale === 'en' && windowWidth >= 640 ? $t('navbar.language.english') : 'EN') }}
        </span>
        <span class="text-[10px] sm:text-[10px] text-text-tertiary dark:text-text-muted transition-transform duration-200" :class="langOpen ? 'rotate-180' : ''">▼</span>
      </button>

      <div
        v-if="langOpen"
        class="absolute left-0 mt-2 rounded-xl border border-border-light dark:border-border-secondary bg-white/95 dark:bg-bg-secondary/95 backdrop-blur-md shadow-lg dark:shadow-none p-1 flex flex-col gap-1 z-50 w-24 sm:w-36"
      >
        <button
          v-for="lang in ['es', 'en']"
          :key="lang"
          @click="changeLang(lang)"
          :class="$i18n.locale === lang ? 'bg-primary/20 text-primary font-semibold' : 'text-text-light-secondary dark:text-text-secondary hover:bg-primary/10'"
          class="w-full text-left sm:text-left text-xs px-3 py-2 rounded-lg transition-all duration-150 uppercase sm:capitalize"
        >
          {{ lang === 'es' ? $t('navbar.language.spanish') : $t('navbar.language.english') }}
        </button>
      </div>
    </div>

    <button
      @click="toggleTheme"
      class="flex items-center justify-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/90 dark:bg-bg-tertiary/90 border border-border-light dark:border-border-secondary text-text-light-primary dark:text-text-primary hover:border-primary/60 hover:text-primary shadow-sm dark:shadow-none transition-all duration-200"
    >
      <div class="w-6 h-6 flex items-center justify-center overflow-hidden shrink-0">
        <div ref="sunIcon" v-show="!isDark" class="w-6 h-6"></div>
        <div ref="moonIcon" v-show="isDark" class="w-6 h-6"></div>
      </div>
      <span class="hidden sm:inline text-xs font-medium whitespace-nowrap">{{ isDark ? $t('navbar.theme.dark') : $t('navbar.theme.light') }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";
import { useLottie } from "@/composable/useLottie";

const langOpen = ref(false);
const { locale } = useI18n();
const windowWidth = ref(window.innerWidth);

const toggleLangMenu = () => {
  langOpen.value = !langOpen.value;
};

const changeLang = (lang: string) => {
  locale.value = lang;
  langOpen.value = false;
};

const isDark = ref(false);
const sunIcon = ref<HTMLElement | null>(null);
const moonIcon = ref<HTMLElement | null>(null);
const { loadIcon } = useLottie();

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const langMenu = target.closest('.relative');
  if (!langMenu && langOpen.value) {
    langOpen.value = false;
  }
};

onMounted(async () => {
  window.addEventListener('resize', () => { windowWidth.value = window.innerWidth; });
  document.addEventListener('click', handleClickOutside);
  
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    isDark.value = savedTheme === "dark";
  } else {
    isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  
  document.documentElement.classList.toggle("dark", isDark.value);
  await nextTick();
  
  if (sunIcon.value) await loadIcon("Sun", sunIcon.value, "/icons/dark_ligth");
  if (moonIcon.value) await loadIcon("doodle-color-1821-moon-stars-hover-pinch", moonIcon.value, "/icons/dark_ligth");
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>