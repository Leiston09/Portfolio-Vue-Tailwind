<template>
  <section class="animate-pulse">

    <div class="relative">
      <div
        class="absolute left-3 top-3 bottom-3 w-0.5 bg-gray-200 dark:bg-gray-700"
      ></div>

      <div
        v-for="n in count"
        :key="n"
        class="relative pl-9 sm:pl-10 pb-6 last:pb-0"
      >
        <div
          class="absolute left-0.5 top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
        >
          <span
            class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-300 dark:bg-gray-600"
          ></span>
        </div>

        <div
          class="relative rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-800/60 p-3 sm:p-4 overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
        >
          <div
            class="shrink-0 w-full h-36 sm:w-24 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700"
          ></div>

          <div class="flex-1 min-w-0 w-full">
            <div
              class="flex flex-wrap items-center gap-2 sm:gap-3 mb-2"
            >
              <div
                class="h-4 sm:h-5 lg:h-6 w-40 sm:w-48 rounded bg-gray-200 dark:bg-gray-700"
              ></div>

              <div
                class="h-4 w-20 sm:w-24 rounded-full bg-gray-200 dark:bg-gray-700"
              ></div>
            </div>

            <div
              class="h-3 w-48 sm:w-64 rounded bg-gray-200 dark:bg-gray-700 mb-2"
            ></div>

            <div class="space-y-2">
              <div
                class="h-3 w-full rounded bg-gray-200 dark:bg-gray-700"
              ></div>

              <div
                class="h-3 w-full rounded bg-gray-200 dark:bg-gray-700"
              ></div>

              <div
                class="h-3 w-4/5 rounded bg-gray-200 dark:bg-gray-700"
              ></div>
            </div>
          </div>
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
    count: 3,
  },
);
</script>