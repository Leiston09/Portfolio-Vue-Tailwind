<template>
  <section class="animate-pulse">
    <div
      class="relative w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-800/60 overflow-hidden"
    >
      <div
        class="absolute top-0 left-10 right-10 h-px bg-gray-200 dark:bg-gray-700"
      ></div>

      <div class="relative flex flex-col md:flex-row gap-5 p-3">
        <div class="flex-1 min-w-0 flex flex-col justify-center">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-1 h-5 rounded-full bg-gray-200 dark:bg-gray-700"
            ></div>

            <div
              class="h-3 w-32 rounded bg-gray-200 dark:bg-gray-700"
            ></div>
          </div>

          <div class="space-y-2 pl-4">
            <div
              class="h-3 w-full rounded bg-gray-200 dark:bg-gray-700"
            ></div>

            <div
              class="h-3 w-[95%] rounded bg-gray-200 dark:bg-gray-700"
            ></div>

            <div
              class="h-3 w-[88%] rounded bg-gray-200 dark:bg-gray-700"
            ></div>

            <div
              class="h-3 w-[70%] rounded bg-gray-200 dark:bg-gray-700"
            ></div>
          </div>
        </div>

        <div
          class="md:flex-1 min-w-0 flex flex-col items-center justify-center gap-2"
        >
          <div
            class="w-full max-w-[280px] h-20 md:h-24 lg:h-28 rounded-xl bg-gray-200 dark:bg-gray-700"
          ></div>

          <div
            class="w-full max-w-[280px] h-8 rounded-lg bg-gray-200 dark:bg-gray-700"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    count?: number;
  }>(),
  {
    count: 1,
  },
);
</script>