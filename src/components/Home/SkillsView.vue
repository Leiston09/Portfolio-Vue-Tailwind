<template>
  <div class="overflow-hidden">
    <Header
      :data="{
        tag: $t('skills.tag'),
        title: $t('skills.title'),
        titleHighlight: $t('skills.titleHighlight'),
        description: $t('skills.subtitle'),
        link: '/skills',
        button: $t('skills.viewAll'),
      }"
    />

    <SkeletonSkills v-if="isLoading" />

    <div v-else class="flex gap-4 animate-scroll">
      <template v-for="repeat in 2" :key="repeat">
        <div
          v-for="skill in skills"
          :key="`${repeat}-${skill.id}`"
          class="min-w-20 md:min-w-30 bg-surface/50 dark:bg-surface-dark/70 border border-primary/15 dark:border-primary/20 rounded-2xl p-3 md:p-5 flex flex-col items-center justify-center gap-4 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group shrink-0"
        >
          <div
            class="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 dark:bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300"
          >
            <i
              :class="[
                skill.icono,
                'text-3xl md:text-4xl text-primary group-hover:scale-110 transition-all duration-300',
              ]"
            ></i>
          </div>

          <div class="text-center">
            <h3
              class="text-text-light-primary dark:text-text-primary font-semibold text-xs md:text-sm"
            >
              {{ $t(`skills.items.${skill.nombre}`) }}
            </h3>

            <p
              class="text-[10px] md:text-xs text-text-light-secondary dark:text-text-secondary mt-0.5 group-hover:text-primary/80 transition-colors duration-300"
            >
              {{ $t(`skills.categories.${skill.categoria}`) }}
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Header from "../shared/Header.vue";
import SkeletonSkills from "../ui/Skeleton/SkeletonSkills.vue";
import { getSkills } from "@/service/api.js";
import type { SkillsTypes } from "@/data/skills";

const isLoading = ref(true);

const skills = ref<SkillsTypes[]>([]);

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

<style scoped>
.animate-scroll {
  animation: scroll 40s linear infinite;
  display: flex;
  gap: 1rem;
  width: max-content;
}

.animate-scroll:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>
