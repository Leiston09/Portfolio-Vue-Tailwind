<template>
  <HeaderSpecialized
    :data="{
      tag: $t('projects.subtitle.tag'),
      title: $t('projects.subtitle.title'),
      titleHighlight: $t('projects.subtitle.titleHighlight'),
      description: $t('projects.description'),
    }"
  />
  <SkeletonProjects v-if="isLoading" :count="6" />
  <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
    <ProjectsCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getProjects } from "@/service/api";
import type { ProjectsType } from "@/data/projects";
import SkeletonProjects from "@/components/ui/Skeleton/SkeletonProjects.vue";
import ProjectsCard from "@/components/shared/ProjectsCard.vue";
import HeaderSpecialized from "@/components/shared/HeaderSpecialized.vue";

const isLoading = ref(true);
const projects = ref<ProjectsType[]>([]);

onMounted(async () => {
  try {
    projects.value = await getProjects();
  } catch (error) {
    console.error("Error al cargar los proyectos:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>