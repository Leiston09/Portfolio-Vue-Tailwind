<template>
  <section class="flex bg-black/10 gap-2 p-3">
    <div class="w-1/6 bg-black/20 rounded-2xl">
      <div class="flex items-center">
        <div class="m-4 w-12 h-12 overflow-hidden rounded-full">
          <img src="../assets/img/imgPrueba.png" alt="" class=" w-full h-full object-cover"/>
        </div>
        <div class="flex-1 m-2 bg-black/20 p-3 rounded-2xl">
          <h1 class="font-bold mx-auto w-fit">Invitado</h1>
        </div>
      </div>
      <div>
        <ul class="flex flex-col gap-2 m-2">
          <li class="border rounded-lg p-2">Home</li>
          <li class="border rounded-lg p-2">Proyectos</li>
          <li class="border rounded-lg p-2">Habilidades</li>
          <li class="border rounded-lg p-2">Contacto</li>
          <li class="border rounded-lg p-2">Certificaciones</li>
        </ul>
      </div>
    </div>
    <div class="flex-1 bg-black/20 p-3 rounded-xl">
      <h1 class="font-mono text-xs m-2 border w-fit px-2 rounded-2xl">
        Portafolio Profesional:
      </h1>
      <h1 class="font-mono font-bold text-4xl m-2 underline">
        Leiston Holguin Aguirre
      </h1>
      <p class="m-2 text-justify">
        MSJ de prueba. Mi objetivo es convertirme en desarrollador full stack,
        iniciando desde el frontend, donde ya cuento con bases sólidas. Me
        considero una persona con alta capacidad de aprendizaje y adaptación,
        por lo que busco una oportunidad para aportar valor y seguir
        desarrollando mis habilidades dentro de un entorno profesional.
      </p>
      <div class="flex justify-around gap-5 m-2">
        <div class="rounded-lg bg-black/10 flex-1 p-3">
          <h1 class="font-bold text-3xl">12+</h1>
          <h1 class="text-xs">Proyecto</h1>
        </div>
        <div class="rounded-lg bg-black/10 flex-1 p-3">
          <h1 class="font-bold text-3xl">20</h1>
          <h1 class="text-xs">Edad</h1>
        </div>
        <div class="rounded-lg bg-black/10 flex-1 p-3">
          <h1 class="font-bold text-3xl">1</h1>
          <h1 class="text-xs">Exp.</h1>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-1/4 bg-black/20 p-3 rounded-xl justify-center">
      <div class="w-full h-48 bg-amber-700 overflow-hidden rounded-xl">
        <img  src="../assets/img/imgPrueba.png" alt="" class=" w-full h-full object-cover"/>
      </div>
      <div class=" bg-black/10 rounded-xl mt-2 p-3 flex flex-col gap-1">
        <h1 class="font-mono font-bold text-xl text-white">Leiston Holguin Aguirre</h1>
        <ul class="flex flex-wrap gap-2 text-[11px]">
          <li class="bg-black/10 px-2 rounded-2xl">Desarrollador Web</li>
          <li class="bg-black/10 px-2 rounded-2xl">Estudiante de Ingeniería</li>
          <li class="bg-black/10 px-2 rounded-2xl">Vue.js</li>
        </ul>
        <p class="text-justify ">MSJ DE PRUEBA... soy un desarrollador web en formación con conocimientos en tecnologías modernas. y con una pasión por crear experiencias digitales innovadoras.</p>
        <button class=" bg-black/10 rounded-2xl font-bold text-white">CV</button>
    </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
