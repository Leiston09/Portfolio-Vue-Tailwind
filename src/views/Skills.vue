<template>
  <div class="text-white">
    <h1 class="text-4xl font-bold text-center mb-10">
      {{ $t("skills.title") }}
    </h1>
    <div class="hidden lg:block">
      <PersonalComputer :skills="skills" />
    </div>
    <div class="lg:hidden">
      <Mobile :skills="skills" />
    </div>
  </div>
</template>

<script setup>
import Mobile from "@/components/skills/Mobile.vue";
import PersonalComputer from "@/components/skills/PersonalComputer.vue";
import { dataStoreSkills  } from "@/stores/StoreSkills";
import { computed, onMounted } from "vue";

const stateSkills = dataStoreSkills();
const skills = computed(() => stateSkills.skills);

onMounted(() => {
  stateSkills.fetchSkills();
});
</script>
