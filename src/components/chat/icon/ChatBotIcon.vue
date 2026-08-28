<template>
  <div ref="iconRef" class="w-full h-full"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useLottie } from "@/composable/useLottie";

const props = defineProps<{
  path: string;
  name: string;
}>();

const { loadIcon } = useLottie();
const iconRef = ref<HTMLElement | null>(null);

onMounted(async () => {
  if (iconRef.value) {
    await loadIcon(props.name, iconRef.value, props.path);
  }
});
</script>