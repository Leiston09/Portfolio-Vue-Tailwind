<template>

  <div class="titleOptionsAll pb-5">
    <h1 class="titleOptions">
      {{ $t("projects.title") }}
    </h1>

    <RouterLink
      :to="{ name: 'Projects' }"
      class="buttonViewAll"
      v-if="projects.length > 3"
    >
      {{ $t("global.viewAll") }}
      <i class="fas fa-arrow-right ml-2"></i>

    </RouterLink>
  </div>

  <Containers
    :projectsList="filteredProjects"
  />

</template>

<script setup lang="ts">
import { ProjectsType } from "@/data/projects";
import { useProjectsStore } from "@/stores/useProjectsStore";
import { computed, onMounted } from "vue";
import Containers from "../projects/containers.vue";


const storeProjects = useProjectsStore();
const projects = computed<ProjectsType[]>(() => storeProjects.projects);

const filteredProjects = computed<ProjectsType[]>(() => {
  return projects.value.filter((e) => e.special);
});

onMounted(() => {
  storeProjects.fetchProjects();
});
</script>
