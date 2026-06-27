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
import { SkillsTypes } from "@/data/skills";
import Mobile from "@/components/skills/Mobile.vue";
import SkillsComputer from "@/components/skills/SkillsComputer.vue";
import { useSkillsStore } from "@/stores/useSkillsStore";
import { computed, onMounted } from "vue";


const stateSkills = useSkillsStore();
const skills = computed<SkillsTypes[]>(() => stateSkills.skills);

const categorias = computed(() => {
  return [...new Set(skills.value.map(skill => skill.categoria))];
});

onMounted(() => {
  stateSkills.fetchSkills();
});
</script>