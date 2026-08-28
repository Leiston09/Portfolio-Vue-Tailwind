<template>
  <div class="text-white">
    <HeaderSpecialized
      :data="{
        tag: $t('skills.subtitles.tag'),
        title: $t('skills.subtitles.title'),
        titleHighlight: $t('skills.subtitles.titleHighlight'),
        description: $t('skills.subtitle'),
      }"
    />

    <SkeletonSkillsSpecialized v-if="isLoading" />

    <SkillsCard v-else :skills="skills" :categorias="categorias" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import type { SkillsTypes } from "@/data/skills";
import HeaderSpecialized from "@/components/shared/HeaderSpecialized.vue";
import SkillsCard from "@/components/shared/SkillsCard.vue";
import SkeletonSkillsSpecialized from "@/components/ui/Skeleton/SkeletonSkillsSpecialized.vue";
import { getSkills } from "@/service/api";

const isLoading = ref(true);
const skills = ref<SkillsTypes[]>([]);

const categorias = computed(() => [
  ...new Set(skills.value.map((skill) => skill.categoria)),
]);

onMounted(async () => {
  try {
    skills.value = await getSkills();
  } catch (error) {
    console.error("Error al cargar las habilidades:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>
