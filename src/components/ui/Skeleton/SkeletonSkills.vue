<template>
  <section class="overflow-hidden">
    <div class="relative overflow-hidden">
      <div class="flex gap-4">
        <div
          v-for="n in count"
          :key="n"
          class="min-w-20 md:min-w-30 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-800/60 p-3 md:p-5 flex flex-col items-center justify-center gap-4 shrink-0 animate-pulse"
        >
          <div
            class="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gray-200 dark:bg-gray-700"
          ></div>

          <div class="flex flex-col items-center gap-2">
            <div
              class="h-3 md:h-3.5 w-16 md:w-20 rounded bg-gray-200 dark:bg-gray-700"
            ></div>

            <div
              class="h-2.5 md:h-3 w-12 md:w-16 rounded bg-gray-200 dark:bg-gray-700"
            ></div>
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
    count: 10,
  },
);
</script>