<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projectsList"
        :key="project.id"
        class="group flex"
      >
        <div class="bg-[#111827] border border-gray-800 rounded-3xl overflow-hidden  hover:shadow-2xl hover:shadow-celeste/10 transition-all duration-500 hover:-translate-y-2 flex flex-col w-full">
          
          <div class="relative w-full h-48 overflow-hidden">
            <img
              :src="project.image"
              :alt="$t(`projects.items.${project.key}.title`)"
              class="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
              loading="lazy"
            />

            <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
              <p class="text-gray-200 text-sm text-center">
                {{ $t(`projects.items.${project.key}.imageDescription`) }}
              </p>
            </div>

            <div class="absolute top-4 left-4 bg-[#0F172A]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-celeste/30">
              <p class="text-xs text-gray-300 font-semibold">
                {{ $t("projects.labels.year") }}
                <span class="text-celeste font-bold">
                  {{ project.year }}
                </span>
              </p>
            </div>

            <div v-if="project.special" class="absolute top-4 right-4 z-auto">
              <span class="star">
                {{ $t("global.featured") }}
              </span>
            </div>
          </div>

          <div class="p-5 flex flex-col flex-1">
            <h3 class="text-celeste/80 font-extrabold text-xl text-center tracking-wide leading-tight group-hover:text-celeste transition-all duration-300">
              {{ $t(`projects.items.${project.key}.title`) }}
            </h3>

            <p class="text-gray-300 text-sm text-justify leading-relaxed line-clamp-4 mt-2 flex-1">
              {{ $t(`projects.items.${project.key}.description`) }}
            </p>

            <div class="mt-4">
              <p class="text-gray-300 text-sm font-extrabold pb-2 text-center">
                {{ $t("projects.labels.technologies") }}
              </p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="text-xs px-2 py-1 rounded-lg bg-[#1E293B] text-celeste border border-gray-700 hover:border-celeste/40 transition-all duration-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="flex gap-3 mt-4 pt-3 border-t border-gray-800">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="buttonDark flex-1 text-center"
              >
                <i class="fab fa-github mr-1"></i>
                {{ $t("global.github") }}
              </a>

              <a
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="buttonBlue flex-1 text-center"
              >
                <i class="fas fa-external-link-alt mr-1"></i>
                {{ $t("global.demo") }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProjectsType } from '@/data/projects';

const props = defineProps<{
  projectsList: ProjectsType[];
}>();


</script>

<style scoped>

</style>