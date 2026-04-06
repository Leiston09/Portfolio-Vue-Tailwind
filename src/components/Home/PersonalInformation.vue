<template>
  <div
    class="bg-[#111827] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl shadow-sky-900/50 transition-all duration-300 border border-gray-800 max-w-100"
  >
    <div class="w-full h-55 overflow-hidden">
      <img
        :src="profile.image"
        alt="Leiston Holguin Aguirre"
        class="w-full h-full object-cover hover:scale-110 transition-all duration-300"
      />
    </div>
    <div class="p-2 flex flex-col gap-2">
      <h1 class="font-mono text-xl text-white">{{ profile.name }}</h1>
      <ul class="flex flex-wrap gap-2 text-xs">
        <li
          class="bg-[#1E293B] px-2 py-1 rounded-lg text-gray-300 hover:scale-105 transition-all duration-200"
        >
          {{ $t("home.specialization.webDeveloper") }}
        </li>

        <li
          class="bg-[#1E293B] px-2 py-1 rounded-lg text-gray-300 hover:scale-105 transition-all duration-200"
        >
          {{ $t("home.specialization.databaseKnowledge") }}
        </li>
        <li
          class="bg-[#1E293B] px-2 py-1 rounded-lg text-gray-300 hover:scale-105 transition-all duration-200"
        >
          {{ $t("home.specialization.Cybersecurityknowledge") }}
        </li>
        <li
          class="bg-[#1E293B] px-2 py-1 rounded-lg text-gray-300 hover:scale-105 transition-all duration-200"
        >
          {{ $t("home.specialization.networksKnowledge") }}
        </li>
        <li
          class="bg-[#1E293B] px-2 py-1 rounded-lg text-gray-300 hover:scale-105 transition-all duration-200"
        >
          {{ $t("home.specialization.softwareEngineeringStudent") }}
        </li>
      </ul>

      <p class="text-gray-400 text-sm text-justify">
        {{ $t("home.personalMessage") }}
      </p>

      <div v-if="!developer" class="text-white">Cargando CV...</div>

      <a
        v-else
        :href="developer.download"
        download
        class="bg-green-600 hover:bg-green-700 px-6 py-2 mb-2 rounded-lg transition"
      >
        <h1 class="text-center font-bold text-white">
          {{ $t("curriculum.download") }}
        </h1>
      </a>
    </div>
  </div>
</template>

<script setup>
import { dataStoreCurriculum } from "@/stores/StateCurriculum";
import { dataStoreProfile } from "@/stores/StateProfile";
import { computed, onMounted } from "vue";

const storeProfile = dataStoreProfile();
const storeCurriculum = dataStoreCurriculum();

const profile = computed(() => storeProfile.profile);
const curriculum = computed(() => storeCurriculum.curriculum);

const developer = computed(() => {
  return curriculum.value.find((c) => c.name === profile.value?.viewCurriculo);
});

onMounted(() => {
  storeProfile.fetchProfile();
  storeCurriculum.fetchCurriculum();
});
</script>
