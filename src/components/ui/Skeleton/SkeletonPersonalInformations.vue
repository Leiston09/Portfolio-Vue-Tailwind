<template>
  <section class="animate-pulse">
    <div
      class="relative w-full h-full rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-800/60 overflow-hidden"
    >
      <div
        class="absolute top-0 left-10 right-10 h-px bg-gray-200 dark:bg-gray-700"
      ></div>

      <div class="relative h-full flex flex-col p-3 sm:p-4 gap-4 sm:gap-5">
        <div class="flex flex-col lg:flex-row items-center gap-4 sm:gap-5">
          <div
            class="relative w-full h-36 sm:w-100 sm:h-70 md:w-80 md:h-70 lg:w-[175px] lg:h-[180px] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 shrink-0"
          ></div>

          <div
            class="flex flex-col flex-1 justify-between w-full gap-4 sm:gap-5"
          >
            <div>
              <div class="flex items-center gap-3 mb-3 sm:mb-4">
                <div
                  class="h-3 sm:h-4 w-32 sm:w-40 rounded bg-gray-200 dark:bg-gray-700"
                ></div>
              </div>

              <div
                class="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4"
              >
                <div
                  v-for="n in 6"
                  :key="n"
                  class="flex items-center gap-2"
                >
                  <div
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gray-200 dark:bg-gray-700 shrink-0"
                  ></div>

                  <div
                    class="h-3 sm:h-4 rounded bg-gray-200 dark:bg-gray-700"
                    :class="n % 2 === 0 ? 'w-24' : 'w-28'"
                  ></div>
                </div>
              </div>
            </div>

            <div class="flex justify-center lg:justify-start">
              <div
                class="my-2 sm:my-4 lg:my-0 h-10 sm:h-12 w-36 sm:w-44 rounded-xl bg-gray-200 dark:bg-gray-700"
              ></div>
            </div>
          </div>
        </div>

        <div class="pt-1">
          <div class="flex items-center gap-3 mb-3">
            <div
              class="h-3 sm:h-4 w-36 sm:w-44 rounded bg-gray-200 dark:bg-gray-700"
            ></div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div
              v-for="n in 3"
              :key="n"
              class="flex items-center gap-2.5"
            >
              <div
                class="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-700 shrink-0"
              ></div>

              <div class="min-w-0 flex-1 space-y-2">
                <div
                  class="h-3 w-20 rounded bg-gray-200 dark:bg-gray-700"
                ></div>

                <div
                  class="h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700"
                ></div>

                <div
                  class="h-2.5 w-4/5 rounded bg-gray-200 dark:bg-gray-700"
                ></div>
              </div>
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
    count: 1,
  },
);
</script>