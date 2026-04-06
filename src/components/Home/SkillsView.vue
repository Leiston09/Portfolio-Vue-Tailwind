<template>
  <div class="flex justify-between items-center">
    <h1 class="text-lg md:text-3xl font-bold text-white">{{ $t("skills.title") }}</h1>

    <RouterLink 
      :to="{ name: 'skills' }"
      class="text-[#38BDF8] hover:underline bg-[#1E293B] px-2 rounded-lg shadow hover:shadow-cyan-500 hover:transition-all hover:duration-500 py-1"
    > 
      {{ $t("globalOptions.ViewAll") }}
    </RouterLink>
  </div>

  <div class="overflow-hidden relative w-full py-6">
    <div class="flex gap-12 animate-scroll whitespace-nowrap">
      <div
        v-for="skill in skills"
        :key="'scroll1-' + skill.id"
        class="flex items-center gap-2 text-gray-300"
      >
        <i :class="skill.icono" class="text-4xl"></i>
        <span class="text-sm">{{ skill.nombre }}</span>
      </div>

      <div
        v-for="skill in skills"
        :key="'scroll2-' + skill.id"
        class="flex items-center gap-2 text-gray-300"
      >
        <i :class="skill.icono" class="text-4xl"></i>
        <span class="text-sm">{{ skill.nombre }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { dataStoreSkills } from "@/stores/StoreSkills";
import { computed, onMounted } from "vue";
import { RouterLink } from "vue-router";

const storeSkills = dataStoreSkills();
const skills = computed(() => storeSkills.skills);

onMounted(() => {
  storeSkills.fetchSkills();
});
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 25s linear infinite;
  width: max-content;
}
.animate-scroll:hover {
  animation-play-state: paused;
}
</style>