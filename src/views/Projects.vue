<template>
  <div class="container mx-auto">
    <div class="text-center mb-10">
      <h2 class="titleViewAll">
        {{ $t("projects.internalTitle") }}
      </h2>
      <div class="lineTitle"></div>
      <p class="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
        {{ $t("projects.subtitle") }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in projectsList" :key="project.id" class="group flex">
        <div class="bg-[#111827] border border-gray-800 rounded-3xl overflow-hidden hover:border-celeste/40 hover:shadow-2xl hover:shadow-celeste/10 transition-all duration-500 hover:-translate-y-2 flex flex-col w-full">
          <div class="relative overflow-hidden h-56 shrink-0">
            <img :src="project.image" :alt="$t(`projects.items.${project.key}.title`)" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            
            <!-- 
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 px-16">
              <button @click="$emit('validateProject', project.id)" class="buttonBlue">
                {{ $t("projects.labels.details") }}
              </button>
            </div>
            -->

            <div class="absolute top-4 left-4 bg-[#0F172A]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-celeste/30">
              <p class="text-xs text-gray-300 font-semibold">
                {{ $t("projects.labels.year") }}
                <span class="text-celeste font-bold">
                  {{ project.year }}
                </span>
              </p>
            </div>

            <div v-if="project.special" class="absolute top-4 right-4">
              <span class="star">
                {{ $t("global.featured") }}
              </span>
            </div>
          </div>

          <div class="p-4 flex flex-col gap-1 flex-1 justify-between">
            <div class="flex flex-col gap-2">
              <h1 class="text-white font-extrabold text-xl text-center tracking-wide leading-tight group-hover:text-celeste transition-all duration-300">
                {{ $t(`projects.items.${project.key}.title`) }}
              </h1>

              <p class="text-gray-300 text-sm text-justify leading-relaxed line-clamp-4">
                {{ $t(`projects.items.${project.key}.description`) }}
              </p>
            </div>

            <div class="flex flex-col gap-3 mt-auto">
              <div> 
                <p class="text-gray-300 text-lg font-extrabold pb-2 text-center">
                  {{ $t("projects.labels.technologies") }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in project.technologies" :key="tech" class="text-xs px-3 py-1 rounded-full bg-[#1E293B] text-celeste border border-gray-700 hover:border-celeste/40 transition-all duration-300">
                    {{ tech }}
                  </span>
                </div>
              </div>
              <div class="flex gap-3">
                <a v-if="project.github" :href="project.github" target="_blank" class="buttonDark">
                  {{ $t("global.github") }}
                </a>
                <a :href="project.demo" target="_blank" class="buttonBlue">
                  {{ $t("global.demo") }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dataStoreProjects } from "@/stores/storeProjects";
import { computed, onMounted } from "vue";

type ProjectsType = {
  id: number;
  special: boolean;
  key: string;
  year: number;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
};

const projects = dataStoreProjects();
const projectsList = computed<ProjectsType[]>(() => projects.projects);

onMounted(() => {
  projects.fetchProjects();
});
</script>