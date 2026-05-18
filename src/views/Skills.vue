<template>
  <div class="text-white">
    <h1 class="titleViewAll">
      {{ $t("skills.title") }}
    </h1>
    <div class="lineTitle"></div>

    <div class="pt-5">
      <div class="hidden lg:block">
        <SkillsComputer 
          :skills="skills" 
          :categorias="categorias"
        />
      </div>
      <div class="lg:hidden">
        <Mobile 
          :skills="skills" 
          :categorias="categorias"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Mobile from "@/components/skills/Mobile.vue";
import SkillsComputer from "@/components/skills/SkillsComputer.vue";
import { dataStoreSkills } from "@/stores/StoreSkills";
import { computed, onMounted } from "vue";

type SkillsTypes = {
  id: number;
  categoria: string;
  nombre: string;
  icono: string;
};

const stateSkills = dataStoreSkills();
const skills = computed<SkillsTypes[]>(() => stateSkills.skills);

const categorias = computed(() => {
  return [...new Set(skills.value.map(skill => skill.categoria))];
});

onMounted(() => {
  stateSkills.fetchSkills();
});
</script>