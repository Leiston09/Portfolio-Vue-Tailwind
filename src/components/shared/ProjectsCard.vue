<template>
  <article
    class="group relative flex flex-col h-full min-h-[450px] overflow-hidden rounded-2xl border border-border-light dark:border-border-secondary bg-surface/50 dark:bg-surface-dark/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
  >
    <div
      class="absolute w-45 h-85 rounded-full bg-primary/10 blur-3xl pointer-events-none -top-24 -right-24"
    ></div>

    <div
      class="absolute -bottom-32 -left-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl pointer-events-none"
    ></div>

    <div
      class="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
    ></div>

    <div class="relative h-48 sm:h-52 shrink-0 overflow-hidden">
      <img
        :src="project.image"
        :alt="$t(`projects.items.${project.key}.title`)"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent"
      ></div>

      <div
        v-if="project.special"
        class="absolute top-3 left-3"
      >
        <span
          class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/90 text-white text-[10px] font-semibold backdrop-blur-md"
        >
          {{ $t("global.labels.featured") }}
        </span>
      </div>

      <div
        class="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/40 text-white text-[10px] font-semibold backdrop-blur-md"
      >
        {{ project.year }}
      </div>
    </div>

    <div class="relative z-10 flex flex-col flex-1 p-5">
      <h3
        class="text-base sm:text-lg font-bold text-text-light-primary dark:text-text-primary tracking-tight min-h-[28px]"
      >
        {{ $t(`projects.items.${project.key}.title`) }}
      </h3>

      <p
        class="mt-2 text-xs sm:text-sm leading-relaxed text-text-light-secondary dark:text-text-secondary line-clamp-3 min-h-[60px]"
      >
        {{ $t(`projects.items.${project.key}.description`) }}
      </p>

      <div
        class="flex flex-wrap gap-1.5 pt-3 pb-2 min-h-[52px] content-start"
      >
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="px-2.5 py-1 rounded-md border border-border-light dark:border-border-secondary text-[10px] font-medium text-text-light-secondary dark:text-text-secondary bg-bg-light/40 dark:bg-bg-primary"
        >
          {{ tech }}
        </span>
      </div>

      <div
        class="grid gap-2 mt-auto pt-5 border-t border-border-light dark:border-border-secondary"
        :class="{
          'grid-cols-3': totalButtons === 3,
          'grid-cols-2': totalButtons === 2,
          'grid-cols-1': totalButtons === 1
        }"
      >
        <a
          v-if="project.showDetails !== false"
          :href="`/projects/${project.id}`"
          class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border-light dark:border-border-secondary py-2 text-[10px] sm:text-xs font-semibold text-text-light-secondary dark:text-text-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
        >
          <i class="fas fa-eye"></i>
          {{ $t("global.buttons.details") }}
        </a>

        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border-light dark:border-border-secondary py-2 text-[10px] sm:text-xs font-semibold text-text-light-secondary dark:text-text-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
        >
          <i class="fab fa-github"></i>
          {{ $t("global.buttons.github") }}
        </a>

        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary py-2 text-[10px] sm:text-xs font-semibold text-white hover:bg-primary-dark transition-all duration-300"
        >
          <i class="fas fa-external-link-alt"></i>
          {{ $t("global.buttons.demo") }}
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ProjectsType } from "@/data/projects";

const props = defineProps<{
  project: ProjectsType;
}>();

const totalButtons = computed(() => {
  let count = 0;
  if (props.project.showDetails !== false) count++;
  if (props.project.github) count++;
  if (props.project.demo) count++;
  return count;
});
</script>