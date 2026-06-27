<template>
  <div class="text-center mb-5">
    <h2 class="titleViewAll">
      {{ $t("projects.internalTitle") }}
    </h2>
    <div class="lineTitle"></div>
    <p class="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
      {{ $t("projects.subtitle") }}
    </p>
  </div>
  
  <Containers :projectsList="projectsList" />
</template>

<script setup lang="ts">
import Containers from "@/components/projects/containers.vue";
import type { ProjectsType } from "@/data/projects";
import { useProjectsStore } from "@/stores/useProjectsStore";
import { computed, onMounted } from "vue";

const storeProjects = useProjectsStore();
const projectsList = computed<ProjectsType[]>(() => storeProjects.projects);

onMounted(() => {
  storeProjects.fetchProjects();
});
</script>
