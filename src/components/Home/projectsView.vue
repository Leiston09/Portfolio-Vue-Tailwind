<template>
  <section>
    <Header
      :data="{
        tag: $t('projects.tag'),
        title: $t('projects.title'),
        titleHighlight: $t('projects.titleHighlight'),
        description: $t('projects.defaultDescription'),
        link: '/projects',
        button:  $t('projects.viewAll'),
      }"
    />

    <SkeletonProjects v-if="isLoading" :count="3" />

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
    >
      <ProjectsCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getProjects } from "@/service/api";
import type { ProjectsType } from "@/data/projects";

import Header from "../shared/Header.vue";
import SkeletonProjects from "../ui/Skeleton/SkeletonProjects.vue";
import ProjectsCard from "../shared/ProjectsCard.vue";

const isLoading = ref(true);

const projects = ref<ProjectsType[]>([]);

onMounted(async () => {
  try {
    const allProjects = await getProjects();

    projects.value = allProjects
      .filter((project) => project.special === true)
      .slice(0, 3);
  } finally {
    isLoading.value = false;
  }
});
</script>
