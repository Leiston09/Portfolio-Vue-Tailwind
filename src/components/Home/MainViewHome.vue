<template>
  <div class="flex-1 bg-[#442A18]/5 p-3 rounded-xl">
    <h1
      class="font-mono text-xs m-2 border-2 border-[#EB9D23] text-[#442A18] w-fit px-2 rounded-2xl"
    >
      Portafolio Profesional:
    </h1>
    <h1 class="font-mono font-bold text-4xl m-2 text-[#442A18]">
      Leiston Holguin Aguirre
    </h1>
    <p class="m-2 text-justify text-[#442A18]/80">
      MSJ de prueba. Mi objetivo es convertirme en desarrollador full stack,
      iniciando desde el frontend, donde ya cuento con bases sólidas. Me
      considero una persona con alta capacidad de aprendizaje y adaptación, por
      lo que busco una oportunidad para aportar valor y seguir desarrollando mis
      habilidades dentro de un entorno profesional.
    </p>
    <div class="flex justify-around gap-5 m-2">
      <div class="rounded-lg bg-[#442A18]/10 flex-1 p-3">
        <h1 class="font-bold text-3xl text-[#442A18]">12+</h1>
        <h1 class="text-xs text-[#442A18]/70">Proyecto</h1>
      </div>
      <div class="rounded-lg bg-[#442A18]/10 flex-1 p-3">
        <h1 class="font-bold text-3xl text-[#442A18]">20</h1>
        <h1 class="text-xs text-[#442A18]/70">Edad</h1>
      </div>
      <div class="rounded-lg bg-[#442A18]/10 flex-1 p-3">
        <h1 class="font-bold text-3xl text-[#442A18]">1</h1>
        <h1 class="text-xs text-[#442A18]/70">Exp.</h1>
      </div>
    </div>
    <div
      class="m-2 bg-[#442A18]/5 p-3 rounded-lg flex flex-col justify-center items-center gap-5"
    >
      <h1 class="font-bold text-3xl text-[#442A18]">Habilidades:</h1>
      <div class="flex flex-wrap justify-center gap-4">
        <div
          v-for="lenguaje in lenguajes"
          :key="lenguaje.id"
          class="rounded-lg justify-center items-center flex flex-col gap-2 p-3 w-20 bg-[#442A18]/10"
        >
          <i :class="lenguaje.icono" class="text-6xl"></i>
          <h2 class="flex justify-center items-center">
            {{ lenguaje.nombre }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const lenguajes = [
  { id: 1, nombre: "HTML", icono: "devicon-html5-plain colored" },
  { id: 2, nombre: "CSS", icono: "devicon-css3-plain colored" },
  { id: 3, nombre: "JavaScript", icono: "devicon-javascript-plain colored" },
  { id: 4, nombre: "Vue.js", icono: "devicon-vuejs-plain colored" },
  { id: 5, nombre: "Node.js", icono: "devicon-nodejs-plain colored" },
  { id: 6, nombre: "Python", icono: "devicon-python-plain colored" },
];
</script>

<style lang="scss" scoped></style>
