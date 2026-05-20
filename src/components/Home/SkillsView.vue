<template>
  <div class="titleOptionsAll">
    <div>
      <h1 class="titleOptions">
        {{ $t("skills.title") }}
      </h1>
    </div>

    <RouterLink :to="{ name: 'Skills' }" class="buttonViewAll">
      {{ $t("globalOptions.ViewAll") }}
    </RouterLink>
  </div>

  <div class="overflow-hidden py-5 ">
    <div class="flex gap-4 animate-scroll">
      <!-- Skills originales -->
      <div
        v-for="skill in skills"
        :key="skill.id"
class="min-w-20 md:min-w-30 bg-[#111827]/80 border border-gray-800 rounded-2xl p-3 md:p-5 flex flex-col items-center justify-center gap-4 backdrop-blur-md hover:border-celeste hover:-translate-y-2 hover:shadow-xl hover:shadow-celeste/20 transition-all duration-300 group shrink-0">
        <div
          class="w-16 h-16 rounded-2xl bg-[#1E293B] flex items-center justify-center group-hover:bg-celeste/10 transition-all duration-300">
          <i
            :class="skill.icono"
            class="text-4xl group-hover:scale-110 transition-all duration-300">
          </i>
        </div>

        <div class="text-center">
          <h1 class="text-white font-semibold text-sm">
            {{ $t(`skills.name.${ skill.nombre }`) }}
          </h1>

          <p class="text-xs text-gray-400 mt-1">
            {{ $t(`skills.categories.${ skill.categoria }`) }}
          </p>
        </div>
      </div>

      <!-- Los mismos skills duplicados para que sea infinito -->
      <div
        v-for="skill in skills"
        :key="`dup-${skill.id}`"
        class="min-w-20 md:min-w-30 bg-[#111827]/80 border border-gray-800 rounded-2xl p-3 md:p-5 flex flex-col items-center justify-center gap-4 backdrop-blur-md hover:border-celeste/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-celeste/10 transition-all duration-300 group shrink-0">
        <div
          class="w-16 h-16 rounded-2xl bg-[#1E293B] flex items-center justify-center group-hover:bg-celeste/10 transition-all duration-300">
          <i
            :class="skill.icono"
            class="text-4xl group-hover:scale-110 transition-all duration-300">
          </i>
        </div>

        <div class="text-center">
          <h1 class="text-white font-semibold text-sm">
            {{ $t(`skills.name.${ skill.nombre }`) }}
          </h1>

          <p class="text-xs text-gray-400 mt-1">
            {{ $t(`skills.categories.${ skill.categoria }`) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dataStoreSkills } from "@/stores/StoreSkills";
import { computed, onMounted } from "vue";
import { RouterLink } from "vue-router";

type SkillsTypes = {
  id: number;
  categoria: string;
  nombre: string;
  icono: string;
};

const storeSkills = dataStoreSkills();

const skills = computed<SkillsTypes[]>(() => storeSkills.skills);

onMounted(() => {
  storeSkills.fetchSkills();
});
</script>

<style scoped>
.animate-scroll {
  animation: scroll 40s linear infinite;
  display: flex;
  gap: 1rem;
  width: fit-content;
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