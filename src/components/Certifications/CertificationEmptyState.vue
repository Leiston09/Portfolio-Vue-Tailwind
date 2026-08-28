<template>
  <div class="w-full flex flex-col items-center justify-center py-16 px-4">
    <div
      ref="animationContainer"
      class="w-24 h-24 mb-4 flex items-center justify-center"
    ></div>

    <p
      class="text-text-light-primary dark:text-text-primary text-center font-bold text-xl"
    >
      {{ $t("certifications.messages.noResults") }}
    </p>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useLottie } from "@/composable/useLottie";

const animationContainer = ref<HTMLElement>();

const { loadIcon } = useLottie();

onMounted(() => {
  if (!animationContainer.value) return;

  loadIcon(
    "doodle-color-243-glasses-hover-searching",
    animationContainer.value,
    "/icons/certifications"
  );
});
</script>