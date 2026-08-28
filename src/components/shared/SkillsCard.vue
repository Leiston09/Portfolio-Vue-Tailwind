<template>
  <div class="w-full max-w-6xl mx-auto">
    <div
      class="relative w-full rounded-2xl sm:rounded-3xl border border-border-light dark:border-border-secondary bg-surface dark:bg-surface-dark/70 overflow-hidden"
    >
      <div
        class="absolute w-60 h-150 rounded-full bg-primary/10 blur-3xl pointer-events-none -top-24 -right-24 max-lg:top-auto max-lg:-bottom-24 max-lg:-right-24"
      ></div>

      <div
        class="absolute -bottom-32 -left-20 w-50 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none"
      ></div>

      <div
        class="absolute right-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
      ></div>

      <div
        class="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      ></div>

      <div class="relative flex flex-col md:flex-row p-3 sm:p-4">
        <aside
          class="w-full md:w-52 lg:w-56 shrink-0 border-b md:border-b-0 md:border-r border-border-light dark:border-border-secondary"
        >
          <div class="px-5 sm:px-6 pt-6 pb-4">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-1 h-5 rounded-full bg-primary"></div>

              <span
                class="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-[0.3em]"
              >
                {{ $t("skills.stackTitle") }}
              </span>
            </div>

            <p
              class="text-xs text-text-light-secondary dark:text-text-secondary leading-relaxed"
            >
              {{ $t("skills.stackSubtitle") }}
            </p>
          </div>

          <div
            class="flex md:flex-col gap-1.5 px-4 pb-4 md:pb-6 overflow-x-auto scrollbar-hide"
          >
            <button
              v-for="(categoria, index) in categorias"
              :key="categoria"
              @click="categoriaActiva = categoria"
              :class="[
                'group relative shrink-0 md:w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-300',
                categoriaActiva === categoria
                  ? 'bg-primary/20 text-primary'
                  : 'text-text-light-secondary dark:text-text-secondary hover:bg-primary/10 hover:text-primary',
              ]"
            >
              <div class="flex items-center gap-3">
                <span
                  :class="[
                    'text-[9px] font-mono w-5 transition-colors duration-300',
                    categoriaActiva === categoria
                      ? 'text-primary'
                      : 'text-text-light-secondary/60 dark:text-text-secondary/50',
                  ]"
                >
                  {{ String(index + 1).padStart(2, "0") }}
                </span>

                <span
                  class="text-[11px] sm:text-xs font-semibold whitespace-nowrap"
                >
                  {{ $t(`skills.categories.${categoria}`) }}
                </span>
              </div>

              <span
                :class="[
                  'w-1.5 h-1.5 rounded-full transition-all duration-300',
                  categoriaActiva === categoria
                    ? 'bg-primary scale-100'
                    : 'bg-transparent scale-0',
                ]"
              ></span>
            </button>
          </div>
        </aside>

        <main class="relative flex-1 min-w-0">
          <div
            class="flex items-center justify-between gap-4 px-5 sm:px-7 py-5 border-b border-border-light dark:border-border-secondary"
          >
            <div class="min-w-0">
              <h3
                class="text-lg sm:text-xl font-bold tracking-tight text-text-light-primary dark:text-text-primary"
              >
                {{ $t(`skills.categories.${categoriaActiva}`) }}
              </h3>

              <p
                class="mt-1 text-[10px] sm:text-xs text-text-light-secondary dark:text-text-secondary"
              >
                {{ $t(`skills.groupDescription`) }}
              </p>
            </div>

            <div class="flex items-center gap-2 shrink-0">
              <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>

              <span
                class="text-[9px] uppercase tracking-widest text-text-light-secondary dark:text-text-secondary"
              >
                {{ String(skillsActivas.length).padStart(2, "0") }}
              </span>
            </div>
          </div>

          <div class="p-4 sm:p-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              <div
                v-for="skill in skillsActivas"
                :key="skill.id"
                class="group relative flex items-center gap-3 px-4 py-3.5 rounded-xl border border-border-light dark:border-border-secondary bg-white/30 dark:bg-white/[0.02] hover:bg-primary/5 dark:hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
              >
                <div
                  class="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"
                ></div>

                <div
                  class="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <i
                    :class="[
                      skill.icono,
                      'text-xl transition-transform duration-300 group-hover:scale-110',
                    ]"
                  ></i>
                </div>

                <div class="min-w-0 flex-1">
                  <p
                    class="text-xs sm:text-sm font-semibold text-text-light-primary dark:text-text-primary truncate"
                  >
                    {{ $t(`skills.items.${skill.nombre}`) }}
                  </p>

                  <p
                    class="mt-0.5 text-[9px] uppercase tracking-wider text-text-light-secondary dark:text-text-secondary"
                  >
                    {{ $t(`skills.categories.${skill.categoria}`) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { SkillsTypes } from "@/data/skills";

const props = defineProps<{
  skills: SkillsTypes[];
  categorias: string[];
}>();

const categoriaActiva = ref(
  props.categorias.includes("frontend")
    ? "frontend"
    : props.categorias[0] || "",
);

const skillsActivas = computed(() =>
  props.skills.filter((skill) => skill.categoria === categoriaActiva.value),
);
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
