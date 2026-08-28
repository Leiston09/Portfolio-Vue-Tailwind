<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
  >
    <div
      v-for="n in count"
      :key="n"
      class="group relative flex flex-col h-full min-h-[500px] overflow-hidden rounded-2xl border border-border-light dark:border-border-secondary bg-surface/50 dark:bg-surface-dark/70 backdrop-blur-sm animate-pulse"
    >
      <div
        class="absolute w-45 h-85 rounded-full bg-primary/5 blur-3xl pointer-events-none -top-24 -right-24"
      ></div>

      <div
        class="absolute -bottom-32 -left-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none"
      ></div>

      <div
        class="absolute top-0 left-10 right-10 h-px bg-border-light dark:bg-border-secondary"
      ></div>

      <div class="relative h-48 sm:h-52 shrink-0 overflow-hidden">
        <div
          class="w-full h-full bg-gray-200 dark:bg-gray-700"
        ></div>

        <div
          class="absolute top-3 left-3 w-20 h-6 rounded-lg bg-gray-300 dark:bg-gray-600"
        ></div>

        <div
          class="absolute top-3 right-3 w-12 h-6 rounded-lg bg-gray-300 dark:bg-gray-600"
        ></div>
      </div>

      <div class="relative z-10 flex flex-col flex-1 p-5">

        <div
          class="h-6 bg-gray-200 dark:bg-gray-700 rounded-md w-3/4"
        ></div>

        <div class="mt-3 space-y-2 min-h-[60px]">
          <div
            class="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"
          ></div>

          <div
            class="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-5/6"
          ></div>

          <div
            class="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-2/3"
          ></div>
        </div>

        <div
          class="flex flex-wrap gap-1.5 pt-3 min-h-[52px] content-start"
        >
          <div
            class="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-md"
          ></div>

          <div
            class="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-md"
          ></div>

          <div
            class="h-6 w-14 bg-gray-200 dark:bg-gray-700 rounded-md"
          ></div>

          <div
            class="h-6 w-18 bg-gray-200 dark:bg-gray-700 rounded-md"
          ></div>
        </div>

        <div
          class="grid grid-cols-3 gap-2 mt-auto pt-5 border-t border-border-light dark:border-border-secondary"
        >
          <div
            class="h-9 bg-gray-200 dark:bg-gray-700 rounded-lg"
          ></div>

          <div
            class="h-9 bg-gray-200 dark:bg-gray-700 rounded-lg"
          ></div>

          <div
            class="h-9 bg-gray-200 dark:bg-gray-700 rounded-lg"
          ></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    count?: number;
  }>(),
  {
    count: 3,
  },
);
</script>