<template>
  <section class="animate-pulse">
    <div
      class="relative w-full rounded-2xl sm:rounded-3xl bg-gray-50/70 dark:bg-gray-800/60 overflow-hidden"
    >
      <div
        class="absolute top-0 left-12 right-12 h-px bg-gray-200 dark:bg-gray-700"
      ></div>

      <div class="relative p-4">
        <div
          class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-x-3 sm:gap-x-5"
        >
          <div
            v-for="n in 5"
            :key="n"
            :class="[
              'min-h-[135px] flex flex-col items-center justify-center px-4 py-5 rounded-2xl',
              n === 5 ? 'col-span-2' : '',
              n <= 2
                ? 'md:col-span-3'
                : 'md:col-span-2',
              'lg:col-span-1',
            ]"
          >
            <div
              class="w-12 h-12 flex items-center justify-center"
            >
              <div
                class="w-11 h-11 rounded-xl bg-gray-200 dark:bg-gray-700"
              ></div>
            </div>

            <div
              class="mt-3 flex flex-col items-center gap-2"
            >
              <div
                :class="[
                  'h-3.5 rounded bg-gray-200 dark:bg-gray-700',
                  n % 2 === 0 ? 'w-20' : 'w-24',
                ]"
              ></div>

              <div
                :class="[
                  'h-2.5 rounded bg-gray-200 dark:bg-gray-700',
                  n % 2 === 0 ? 'w-14' : 'w-16',
                ]"
              ></div>
            </div>

            <div
              class="absolute bottom-1 w-10 h-[2px] rounded-full bg-gray-200 dark:bg-gray-700"
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
    count: 5,
  },
);
</script>