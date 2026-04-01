<template>
  <div class="text-white mb-10">
    <h1 class="text-4xl font-bold text-center mb-10">{{ $t('skills.title') }}</h1>

    <PersonalComputer :skills="skills" />

    <Mobile :skills="skills" />
  </div>
</template>

<script setup>
import Mobile from "@/components/skills/Mobile.vue";
import PersonalComputer from "@/components/skills/PersonalComputer.vue";
import { getSkills } from "@/service/api";
import { onMounted, ref } from "vue";


const skills = ref([])

onMounted(async() => {
    let result = await getSkills()
    skills.value = result
})
</script>
