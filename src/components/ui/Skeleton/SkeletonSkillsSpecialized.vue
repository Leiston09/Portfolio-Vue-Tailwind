<template>
  <div class="w-full max-w-6xl mx-auto">
    <div
      class="relative overflow-hidden rounded-3xl border border-border-light dark:border-border-dark bg-surface-light/60 dark:bg-surface-dark/60 backdrop-blur-md"
    >
      <div
        class="absolute top-0 left-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full pointer-events-none"
      ></div>

      <div
        class="absolute bottom-0 right-0 w-40 h-40 bg-secondary/10 blur-3xl rounded-full pointer-events-none"
      ></div>

      <div class="relative flex flex-col md:flex-row">
        <aside
          class="w-full md:w-52 lg:w-56 shrink-0 border-b md:border-b-0 md:border-r border-border-light dark:border-border-dark"
        >
          <div class="px-5 sm:px-6 pt-6 pb-4">
            <div
              class="h-2.5 w-20 rounded bg-border-light dark:bg-border-dark animate-pulse"
            ></div>
            <div
              class="mt-2 h-2.5 w-28 rounded bg-border-light dark:bg-border-dark animate-pulse"
            ></div>
          </div>

          <div class="flex md:flex-col gap-1.5 px-4 pb-4 md:pb-6">
            <div
              v-for="i in 5"
              :key="i"
              class="shrink-0 md:w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl"
            >
              <div
                class="w-5 h-2.5 rounded bg-border-light dark:bg-border-dark animate-pulse"
              ></div>

              <div
                class="h-3 w-20 rounded bg-border-light dark:bg-border-dark animate-pulse"
              ></div>
            </div>
          </div>
        </aside>

        <main class="relative flex-1 min-w-0">
          <div
            class="flex items-center justify-between gap-4 px-5 sm:px-7 py-5 border-b border-border-light dark:border-border-dark"
          >
            <div class="min-w-0">
              <div
                class="h-5 w-32 rounded bg-border-light dark:bg-border-dark animate-pulse"
              ></div>

              <div
                class="mt-2 h-2.5 w-52 max-w-full rounded bg-border-light dark:bg-border-dark animate-pulse"
              ></div>
            </div>

            <div
              class="w-8 h-3 rounded bg-border-light dark:bg-border-dark animate-pulse"
            ></div>
          </div>

          <div class="p-4 sm:p-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              <div
                v-for="i in 6"
                :key="i"
                class="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-border-light dark:border-border-dark bg-white/30 dark:bg-white/[0.02]"
              >
                <div
                  class="w-9 h-9 shrink-0 rounded-lg bg-border-light dark:bg-border-dark animate-pulse"
                ></div>

                <div class="min-w-0 flex-1">
                  <div
                    class="h-3.5 w-24 rounded bg-border-light dark:bg-border-dark animate-pulse"
                  ></div>

                  <div
                    class="mt-2 h-2 w-16 rounded bg-border-light dark:bg-border-dark animate-pulse"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
