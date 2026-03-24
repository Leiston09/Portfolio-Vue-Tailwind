<template>
  <div class="bg-black/20 my-1 rounded-2xl p-3">
    <div class="flex flex-col justify-center items-center ">
      <h1 class="font-bold text-3xl">Proyectos:</h1>
      <p>Explora mi trabajo y el stack tecnológico utilizado en cada solución.</p>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-2">
      <div class="bg-black/10 rounded-lg p-3 flex flex-col justify-center items-center" v-for="proyect in proyects" :key="proyect.id">
        <img src="../../assets/img/imgPrueba.png" alt="" class="rounded-t-4xl  object-cover">
        <h2 class="font-bold">{{ proyect.name }}</h2>
        <p class="text-justify">{{ proyect.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const proyects = [
  {
    id: 1,
    name: "Proyecto 1",
    description: "Descripción del proyecto 1. Stack: Vue.js, Node.js, MongoDB md de prueba asdfdsdfvsdcvscdddddddddddddddddddddddddddddddddddddddddddd.",
  },
  {
    id: 2,
    name: "Proyecto 2",
    description: "Descripción del proyecto 2. Stack: React, Express, MySQL.",
  },
  {
    id: 3,
    name: "Proyecto 3",
    description: "Descripción del proyecto 3. Stack: Angular, Django, PostgreSQL.",
  },    
  {
    id: 4,
    name: "Proyecto 4",
    description: "Descripción del proyecto 4. Stack: React, Node.js, MongoDB.",
  }
];
</script>

<style lang="scss" scoped></style>
