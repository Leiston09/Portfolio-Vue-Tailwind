<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch"
  >
    <article
      v-for="n in count"
      :key="n"
      class="group relative flex flex-col h-full min-h-[450px] overflow-hidden rounded-2xl border border-primary/20 bg-bg-light-card/80 dark:bg-bg-secondary/60 backdrop-blur-sm animate-pulse"
    >
      <div
        class="absolute w-45 h-85 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl pointer-events-none -top-24 -right-24"
      ></div>

      <div
        class="absolute -bottom-32 -left-20 w-40 h-40 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl pointer-events-none"
      ></div>

      <div
        class="absolute top-0 left-10 right-10 h-px bg-primary/20"
      ></div>

      <div class="relative h-48 sm:h-52 shrink-0 overflow-hidden">
        <div
          class="w-full h-full bg-gray-200 dark:bg-gray-700"
        ></div>

        <div
          class="absolute top-3 right-3 w-24 h-6 rounded-lg bg-gray-300 dark:bg-gray-600"
        ></div>
      </div>

      <div class="relative z-10 flex flex-col flex-1 p-5">

        <div class="min-h-[48px] space-y-2">
          <div
            class="h-5 sm:h-6 bg-gray-200 dark:bg-gray-700 rounded-md w-4/5"
          ></div>

          <div
            class="h-5 sm:h-6 bg-gray-200 dark:bg-gray-700 rounded-md w-3/5"
          ></div>
        </div>

        <div class="mt-2 flex items-center gap-2">
          <div
            class="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded"
          ></div>

          <div
            class="h-3 w-28 bg-gray-200 dark:bg-gray-700 rounded"
          ></div>
        </div>

        <div class="mt-3 flex-1 space-y-2">
          <div
            class="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"
          ></div>

          <div
            class="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-full"
          ></div>

          <div
            class="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-4/5"
          ></div>
        </div>

        <div
          class="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-primary/15 dark:border-primary/20"
        >
          <div
            class="h-9 bg-gray-200 dark:bg-gray-700 rounded-lg"
          ></div>

          <div
            class="h-9 bg-gray-200 dark:bg-gray-700 rounded-lg"
          ></div>
        </div>

      </div>
    </article>
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