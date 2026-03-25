<template>
  <div class="bg-[#442A18]/5 rounded-2xl">
    <div class="flex items-center">
      <div class="m-2 w-12 h-12 overflow-hidden rounded-full">
        <img
          src="../../assets/img/imgPrueba.png"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="flex-1 m-2 bg-[#442A18]/10 p-1 rounded-lg md:w-full w-3/4 md:ml-0"
      >
        <h1
          class="font-bold mx-auto w-fit text-[#442A18] md:text-xs lg:text-2xl"
        >
          Invitado
        </h1>
      </div>
    </div>
    <div>
      <ul class="flex flex-col gap-2 p-2">
        <li
          class="flex items-center gap-3 p-2 text-[#442A18] hover:text-[#EB9D23] hover:bg-[#442A18]/5 rounded-lg transition-colors"
        >
          <i class="fas fa-home text-lg"></i>
          <span>Home</span>
        </li>
        <li
          class="flex items-center gap-3 p-2 text-[#442A18] hover:text-[#EB9D23] hover:bg-[#442A18]/5 rounded-lg transition-colors"
        >
          <i class="fas fa-briefcase text-lg"></i>
          <span>Proyectos</span>
        </li>
        <li
          class="flex items-center gap-3 p-2 text-[#442A18] hover:text-[#EB9D23] hover:bg-[#442A18]/5 rounded-lg transition-colors"
        >
          <i class="fas fa-code text-lg"></i>
          <span>Habilidades</span>
        </li>
        <li
          class="flex items-center gap-3 p-2 text-[#442A18] hover:text-[#EB9D23] hover:bg-[#442A18]/5 rounded-lg transition-colors"
        >
          <i class="fas fa-envelope text-lg"></i>
          <span>Contacto</span>
        </li>
        <li
          class="flex items-center gap-3 p-2 text-[#442A18] hover:text-[#EB9D23] hover:bg-[#442A18]/5 rounded-lg transition-colors"
        >
          <i class="fas fa-graduation-cap text-lg"></i>
          <span>Certificaciones</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
