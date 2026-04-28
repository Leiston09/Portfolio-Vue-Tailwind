<template>
  <div class=" text-white flex flex-col gap-8">
    <div >
      <h2 class="text-xl mb-6 border-l-4 border-blue-500 pl-4">{{ $t('skills.frontend') }}</h2>

      <div class="flex flex-col gap-3">
        <div
          v-for="skill in frontendSkills"
          :key="skill.id"
          class="bg-[#0F172A] p-5 rounded-2xl flex items-center gap-4"
        >
          <i :class="skill.icono + ' text-3xl'"></i>
          <span class="text-lg">{{ skill.nombre }}</span>
        </div>
      </div>
    </div>

    <div>
      <h2 class="text-xl mb-6 border-l-4 border-green-500 pl-4">
        {{ $t('skills.tools') }}
      </h2>

      <div class=" flex flex-col gap-3">
        <div
          v-for="skill in herramientasSkills"
          :key="skill.id"
          class="bg-[#0F172A] p-5 rounded-2xl flex items-center gap-4"
        >
          <i :class="skill.icono + ' text-3xl'"></i>
          <span class="text-lg">{{ skill.nombre }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  skills: Array,
});

const frontendSkills = computed(() =>
  props.skills.filter(skill => skill.categoria === "Frontend")
);

const herramientasSkills = computed(() =>
  props.skills.filter(skill => skill.categoria === "Herramientas")
);
</script>