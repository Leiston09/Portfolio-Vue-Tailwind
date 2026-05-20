<template>
  <div class="titleOptionsAll">
    <h1 class="titleOptions">
      {{ $t("projects.title") }}
    </h1>

    <RouterLink
      :to="{ name: 'Projects' }"
      class="buttonViewAll"
      v-if="projects.length > 3"
    >
      {{ $t("globalOptions.ViewAll") }}
    </RouterLink>
  </div>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 py-5 gap-6">
    <div
      v-for="project in filteredProjects"
      :key="project.id"
      class="bg-[#111827] rounded-2xl overflow-hidden transition-all duration-300 border border-gray-800 group"
    >
      <div class="relative w-full h-48 overflow-hidden">
        <img
          :src="project.image"
          class="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
        />

        <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
          <p class="text-gray-200 text-sm text-center">
            {{ $t(`projects.items.${project.key}.descriptionimg`) }}
          </p>
        </div>
      </div>

      <div class="p-4 flex flex-col gap-2 md:gap-3">          
        <h1
          class="text-white font-extrabold text-lg text-center tracking-wide leading-tight group-hover:text-celeste/80 transition-all duration-300"
        >
          {{ $t(`projects.items.${project.key}.title`) }}
        </h1>
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="text-celeste text-sm">●</span>

            <h1 class="font-semibold text-gray-300 text-sm tracking-wide">
              {{ $t(`projects.year`) }}
              <span class="text-white font-bold">
                {{ project.year }}
              </span>
            </h1>
          </div>
          <span class="star">
          {{ $t ("globalOptions.Featured") }}
          </span>
        </div>



        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="text-xs bg-[#1E293B] text-gray-300 px-2 py-1 rounded-lg"
          >
            {{ tech }}
          </span>
        </div>

        <div>
          <p class="text-white text-justify">
            {{ $t(`projects.items.${project.key}.description`) }}
          </p>
        </div>

        <div class="flex gap-2 mt-2">
          <a
            :href="project.github"
            target="_blank"
            class="buttonDark"
          >
            {{ $t("globalOptions.GitHub") }}
          </a>

          <a
            :href="project.demo"
            target="_blank"
            class="buttonBlue"
          >
            {{ $t("globalOptions.Demo") }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dataStoreProjects } from "@/stores/storeProjects";
import { computed, onMounted } from "vue";

type ProjectsType = {
    id: number,
    special: boolean,
    key: string,
    year: number,
    image: string,
    technologies: string[]
    github: string,
    demo: string
}


const storeProjects = dataStoreProjects();
const projects = computed<ProjectsType[]>(() => storeProjects.projects);

const filteredProjects = computed<ProjectsType[]>(() => {
  return projects.value.filter((e) => e.special);
});

onMounted(() => {
  storeProjects.fetchProjects();
});
</script>
