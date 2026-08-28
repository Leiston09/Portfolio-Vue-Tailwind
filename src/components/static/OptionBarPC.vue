<template>
  <nav class="flex items-center gap-2 bg-transparent">
    <ul class="flex items-center gap-1">
      <li v-for="item in menuItems" :key="item.hash">
        <RouterLink
          :to="{ path: '/', hash: item.hash }"
          :class="[
            'px-4 py-1 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2',
            currentHash === item.hash
              ? 'bg-primary/20 dark:bg-primary/30 text-primary dark:text-primary-light shadow-sm shadow-primary/10 dark:shadow-primary/20'
              : 'text-text-light-secondary dark:text-text-secondary hover:text-primary dark:hover:text-primary-light hover:bg-primary/10 dark:hover:bg-primary/20',
          ]"
        >
          <div
            v-if="currentHash === item.hash"
            :ref="setIconRef"
            class="w-7 h-7 flex items-center justify-center shrink-0"
          ></div>
          <span>{{ $t(`navbar.navigation.${item.label}`) }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useLottie } from "@/composable/useLottie";

const route = useRoute();
const currentHash = computed(() => route.hash || "#home");
const iconContainer = ref<HTMLElement | null>(null);
let currentAnimation: any = null;

const menuItems = [
  { hash: "#home", label: "home", icon: "home" },
  { hash: "#experience", label: "experience", icon: "Training" },
  { hash: "#projects", label: "projects", icon: "lightbulb" },
  { hash: "#skills", label: "skills", icon: "Iq" },
  { hash: "#certifications", label: "certifications", icon: "Warranty" },
  { hash: "#contact", label: "contact", icon: "contact" },
];

const { loadIcon, destroyAnimation } = useLottie();

const setIconRef = (el: unknown) => {
  if (el instanceof HTMLElement) {
    iconContainer.value = el;
  }
};

const loadActiveIcon = async () => {
  destroyAnimation(currentAnimation);
  currentAnimation = null;
  iconContainer.value = null;

  const activeItem = menuItems.find((item) => item.hash === currentHash.value);
  if (!activeItem) return;

  await nextTick();
  if (!iconContainer.value) return;

  currentAnimation = await loadIcon(
    activeItem.icon,
    iconContainer.value,
    "/icons/optionsBar",
  );
};

watch(currentHash, loadActiveIcon, { immediate: true });
</script>
