<template>
  <div class="flex flex-col bg-[#442A18]/5 p-3 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
    
    <div class="w-full h-40 md:h-48 bg-[#442A18]/10 overflow-hidden rounded-xl">
      <img
        :src="fotoPerfil"
        alt="Foto de Leiston Holguin Aguirre"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="bg-[#442A18]/10 rounded-xl mt-2 p-3 flex flex-col gap-2">
      <h1 class="font-mono font-bold text-xl text-[#442A18]">
        Leiston Holguin Aguirre
      </h1>

      <ul class="flex flex-wrap gap-2 text-xs">
        <li class="bg-[#442A18]/20 px-2 py-1 rounded-2xl text-[#442A18]">{{ t("home.specialization.webDeveloper") }}</li>
        <li class="bg-[#442A18]/20 px-2 py-1 rounded-2xl text-[#442A18]">{{ t("home.specialization.softwareEngineeringStudent") }}</li>
        <li class="bg-[#442A18]/20 px-2 py-1 rounded-2xl text-[#442A18]">{{ t("home.specialization.networkKnowledge") }}</li>
        <li class="bg-[#442A18]/20 px-2 py-1 rounded-2xl text-[#442A18]">{{ t("home.specialization.databaseKnowledge") }}</li>
      </ul>

      <p class="text-justify md:text-left text-[#442A18]/80">
        {{ t("home.personalMessage") }}
      </p>

      <button class="bg-[#EB9D23]/20 rounded-2xl font-bold text-[#442A18] hover:bg-[#442A18] hover:text-[#F8F3C6] px-4 py-2 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md">
        CV
      </button>
    </div>

  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import fotoPerfil from '@/assets/IMG/FotoPerfil.jpg'
const {t} = useI18n()

</script>

<style lang="scss" scoped>

</style>