<template>
  <div
    class="bg-[#111827] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-800"
  >
    <div class="w-full h-52 overflow-hidden">
      <img
        :src="fotoPerfil"
        alt="Leiston Holguin Aguirre"
        class="w-full h-full object-cover hover:scale-105 transition-all duration-300"
      />
    </div>
    <div class="p-4 flex flex-col gap-3">
      <h1 class="font-bold text-xl text-white">Leiston Holguin Aguirre</h1>
      <ul class="flex flex-wrap gap-2 text-xs">
        <li class="bg-[#1E293B] px-2 py-1 rounded-lg text-gray-300">
          {{ $t("home.specialization.webDeveloper") }}
        </li>

        <li class="bg-[#1E293B] px-2 py-1 rounded-lg text-gray-300">
          {{ $t("home.specialization.databaseKnowledge") }}
        </li>
        <li class="bg-[#1E293B] px-2 py-1 rounded-lg text-gray-300">
          {{ $t("home.specialization.Cybersecurityknowledge") }}
        </li>
        <li class="bg-[#1E293B] px-2 py-1 rounded-lg text-gray-300">
          {{ $t("home.specialization.networksKnowledge") }}
        </li>
        <li class="bg-[#1E293B] px-2 py-1 rounded-lg text-gray-300">
          {{ $t("home.specialization.softwareEngineeringStudent") }}
        </li>
      </ul>

      <p class="text-gray-400 text-sm text-justify">
        {{ $t("home.personalMessage") }}
      </p>

      <!-- Botón -->
      <button
        class="bg-[#38BDF8] text-[#020617] font-semibold rounded-lg py-2 mt-2 hover:scale-105 transition-all duration-200 shadow hover:shadow-lg"
      >
        {{ $t("home.DownloadCV") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import fotoPerfil from "@/assets/img/FotoPerfil.jpg";
</script>
