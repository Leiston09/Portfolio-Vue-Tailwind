<template>
  <div class="text-white flex flex-col gap-8">
    <div 
      v-for="categoria in categorias" 
      :key="categoria" 
      class="flex flex-col gap-6"
    >
      <h2 class="text-xl border-l-4 border-celeste pl-4 uppercase font-bold tracking-wide">
        {{ $t(`skills.categories.${categoria}`) }}
      </h2>

      <div class="flex flex-col gap-3">
        <div
          v-for="skill in skillsFiltradas(categoria)"
          :key="skill.id"
          class="bg-[#0F172A] border border-gray-800/40 p-5 rounded-2xl flex items-center gap-4 active:scale-95 transition-transform duration-200"
        >
          <i :class="skill.icono + ' text-3xl'"></i>
          <span class="text-lg text-gray-200">{{ $t(`skills.name.${skill.nombre}`) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type SkillsTypes = {
  id: number;
  categoria: string;
  nombre: string;
  icono: string;
};

const props = defineProps<{
  skills: SkillsTypes[];
  categorias: string[];
}>();

const skillsFiltradas = (categoria: string) => {
  return props.skills.filter(skill => skill.categoria === categoria);
};
</script>