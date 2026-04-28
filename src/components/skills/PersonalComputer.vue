<template>
  <div
    class="grid max-w-6xl mx-auto grid-cols-3 lg:grid-cols-4 gap-10 py-5">
    <div
      v-for="skill in skills"
      :key="skill.id"
      class="bg-[#0F172A] rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-110 hover:shadow-2xl transition duration-300 cursor-pointer">
      <i :class="skill.icono + ' text-5xl mb-4'"></i>
      <h2 class="text-lg font-semibold text-center">
        {{ skill.nombre }}
      </h2>
      <div
        v-if="skill.categoria === 'Frontend'"
        class="mt-4 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent">
      </div>
      <div
        v-else
        class="mt-4 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent">
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  skills: Array,
});
</script>
