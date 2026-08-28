<template>
  <div class="fixed bottom-4 left-4 right-4 z-50 flex justify-center">
    <div
      class="relative w-fit bg-bg-light-card/40 dark:bg-bg-secondary/60 backdrop-blur-xl border border-primary/10 dark:border-primary/5 rounded-3xl shadow-2xl shadow-primary/5 dark:shadow-none overflow-hidden"
    >
      <div
        ref="scrollContainer"
        class="overflow-x-auto scrollbar-hide px-3"
        @pointerdown="pauseAutoScroll"
      >
        <ul class="flex items-center justify-center gap-1.5 min-w-max mx-auto">
          <li v-for="item in menuItems" :key="item.hash">
            <RouterLink
              :to="{ path: '/', hash: item.hash }"
              :class="[
                'flex flex-col items-center px-3.5 my-1 rounded-xl transition-all duration-300 whitespace-nowrap',
                currentHash === item.hash
                  ? 'bg-gradient-to-br from-primary/20 to-secondary/10 text-primary dark:text-primary-light font-semibold shadow-lg shadow-primary/15 dark:shadow-primary/10 border border-primary/20 dark:border-primary/30'
                  : 'text-text-light-secondary dark:text-text-secondary hover:text-primary dark:hover:text-primary-light hover:bg-primary/5 dark:hover:bg-primary/10',
              ]"
            >
              <div
                :ref="(el) => setIconRef(el, item.icon)"
                class="w-7 h-7 flex items-center justify-center"
              ></div>
              <span class="text-[10px] font-medium tracking-wide">{{
                $t(`navbar.navigation.${item.label}`)
              }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="flex items-center justify-center py-1 gap-2">
        <span
          v-for="item in menuItems"
          :key="item.hash"
          :class="
            currentHash === item.hash
              ? 'bg-gradient-to-r from-primary to-secondary w-5 h-1.5'
              : 'bg-primary/20 dark:bg-primary/10 w-1 h-1'
          "
          class="rounded-full transition-all duration-500"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useLottie } from "@/composable/useLottie";

const route = useRoute();
const currentHash = computed(() => route.hash || "#home");
const scrollContainer = ref<HTMLElement | null>(null);
const isPaused = ref(false);

const menuItems = [
  { hash: "#home", label: "home", icon: "home" },
  { hash: "#about", label: "about", icon: "Individual" },
  { hash: "#experience", label: "experience", icon: "Training" },
  { hash: "#projects", label: "projects", icon: "lightbulb" },
  { hash: "#skills", label: "skills", icon: "Iq" },
  { hash: "#certifications", label: "certifications", icon: "Warranty" },
  { hash: "#contact", label: "contact", icon: "contact" },
];

const iconRefs: Record<string, HTMLElement> = {};
const { loadIcons } = useLottie();

const setIconRef = (el: unknown, icon: string) => {
  if (el instanceof HTMLElement) {
    iconRefs[icon] = el;
  }
};

let autoScrollInterval: number | null = null;

const scrollToNext = () => {
  if (isPaused.value || !scrollContainer.value) return;
  const container = scrollContainer.value;
  const { scrollLeft, clientWidth, scrollWidth } = container;
  const itemWidth = 110;
  const maxScroll = scrollWidth - clientWidth;
  if (scrollLeft >= maxScroll - 5) {
    container.scrollTo({ left: 0, behavior: "smooth" });
    return;
  }
  const currentIndex = Math.round(scrollLeft / itemWidth);
  const nextIndex = currentIndex + 1;
  container.scrollTo({ left: nextIndex * itemWidth, behavior: "smooth" });
};

const pauseAutoScroll = () => {
  isPaused.value = true;
};

onMounted(async () => {
  await loadIcons(menuItems, (icon) => iconRefs[icon], "/icons/optionsBar");
  autoScrollInterval = window.setInterval(scrollToNext, 2000);
});
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
