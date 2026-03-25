<template>
  <div class="bg-[#442A18]/5 my-1 rounded-2xl p-3">
    
    <div class="flex flex-col justify-center items-center">
      <h1 class="font-bold text-3xl text-[#442A18]">Proyectos:</h1>
      <p class="text-[#442A18]/80 text-center">
        Explora mi trabajo y el stack tecnológico utilizado en cada solución.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div
        class="bg-[#442A18]/10 rounded-lg p-3 flex flex-col h-full
               transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        v-for="proyect in proyects"
        :key="proyect.id"
      >
        <img
          src="../assets/img/imgPrueba.png"
          alt="Imagen del proyecto"
          class="rounded-xl w-full h-48 object-cover"
        />

        <h2 class="font-bold text-[#442A18] mt-2">
          {{ proyect.name }}
        </h2>

        <ul class="flex flex-wrap gap-2 mt-1">
          <li
            v-for="stack in proyect.stack"
            :key="stack"
            class="bg-[#442A18]/20 px-2 py-1 rounded-lg text-xs text-[#442A18]
                   hover:bg-[#EB9D23]/20 transition-colors"
          >
            {{ stack }}
          </li>
        </ul>

        <p class="text-[#442A18]/80 line-clamp-3 mt-2">
          {{ proyect.description }}
        </p>

        <!-- BOTONES -->
        <div class="mt-auto flex gap-2 pt-3">
          <button
            class="flex-1 bg-[#EB9D23] text-[#442A18] px-3 py-1 rounded-lg text-sm
                   hover:bg-[#442A18] hover:text-[#F8F3C6] transition-colors"
          >
            Demo
          </button>

          <button
            class="flex-1 border border-[#442A18] text-[#442A18] px-3 py-1 rounded-lg text-sm
                   hover:bg-[#442A18] hover:text-[#F8F3C6] transition-colors"
          >
            GitHub
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
const proyects = [
  {
    id: 1,
    name: "Proyecto 1",
    description:
      "Descripción del proyecto 1. Stack: Vue.js, Node.js, MongoDB md de prueba asdfdsdfvsd cvscdddddddddddddddd dddddddddd ddddddddd ddddddddd.",
    stack: ["Vue.js", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    name: "Proyecto 2",
    description: "Descripción del proyecto 2. Stack: React, Express, MySQL.",
    stack: ["React", "Express", "MySQL"],
  },
  {
    id: 3,
    name: "Proyecto 3",
    description:
      "Descripción del proyecto 3. Stack: Angular, Django, PostgreSQL.",
    stack: ["Angular", "Django", "PostgreSQL"],
  },
  {
    id: 4,
    name: "Proyecto 4",
    description: "Descripción del proyecto 4. Stack: React, Node.js, MongoDB.",
    stack: ["React", "Node.js", "MongoDB"],
  },
];
</script>

<style lang="scss" scoped></style>
