<template>
  <div class="text-white">
    <h1 class="titleViewAll ">
      {{ $t("skills.title") }}
    </h1>
    <div class="w-24 h-1 bg-[#38BDF8] mx-auto rounded-full"></div>

    <div class="pt-5">
      <div class="hidden lg:block">
        <PersonalComputer :skills="skills" />
      </div>
      <div class="lg:hidden">
        <Mobile :skills="skills" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Mobile from "@/components/skills/Mobile.vue";
import PersonalComputer from "@/components/skills/PersonalComputer.vue";
import { dataStoreSkills } from "@/stores/StoreSkills";
import { computed, onMounted } from "vue";

const stateSkills = dataStoreSkills();
const skills = computed(() => stateSkills.skills);

onMounted(() => {
  stateSkills.fetchSkills();
});
</script>
