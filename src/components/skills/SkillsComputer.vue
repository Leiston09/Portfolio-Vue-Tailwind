<template>
  <div class="max-w-6xl mx-auto py-5 flex flex-col gap-10">
    <div 
      v-for="categoria in categorias" 
      :key="categoria" 
      class="flex flex-col gap-6"
    >
      <div class=" flex items-center gap-4 border-l-4 border-celeste">
        <h3 class=" text-xl font-bold tracking-wide text-white uppercase px-3">
          {{ $t(`skills.categories.${categoria}`) }}
        </h3>
        <div class="h-0.5 flex-1 bg-linear-to-r from-celeste/20 to-transparent"></div>
      </div>

      <div class="grid grid-cols-3 lg:grid-cols-6 gap-5">
        <div
          v-for="skill in skillsFiltradas(categoria)"
          :key="skill.id"
          class="bg-[#0F172A] border border-celeste/30 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-110 hover:shadow-2xl hover:border-celeste/20 transition duration-300 cursor-pointer"
        >
          <i :class="skill.icono + ' text-5xl mb-4'"></i>
          <h2 class="text-lg font-semibold text-center text-gray-200">
            {{ $t(`skills.technologies.${skill.nombre}`) }}
          </h2>
          <div class="mt-4 w-full h-1 bg-linear-to-r from-transparent via-green-500/50 to-transparent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SkillsTypes } from "@/data/skills";

const props = defineProps<{
  skills: SkillsTypes[];
  categorias: string[];
}>();

const skillsFiltradas = (categoria: string) => {
  return props.skills.filter(skill => skill.categoria === categoria);
};
</script>