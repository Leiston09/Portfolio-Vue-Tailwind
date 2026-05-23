<template>
  <div
    class="bg-[#111827] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl shadow-sky-900/50 transition-all duration-300 border border-gray-800 max-w-100"
  >
    <div class="w-full h-55 overflow-hidden">
      <img
        :src="profile.image"
        :alt="`${profile.firstName} ${profile.lastName}`"
        class="w-full h-full object-cover hover:scale-110 transition-all duration-300"
      />
    </div>
    <div class="p-2 flex flex-col gap-3">
      <h1 class="font-mono text-sm md:text-lg text-white text-center">{{ profile.firstName }} {{ profile.lastName }}</h1>
      <ul class="flex flex-wrap gap-2 text-xs justify-center items-center">
        <li
          v-for="specialty in specialtys"
          :key="specialty.name"
          class="bg-[#1E293B] px-1 py-1 rounded-lg text-gray-300 hover:scale-105 transition-all duration-200">
          {{ $t(specialty.name) }}
        </li>
      </ul>

      <p class="text-gray-400 text-sm text-justify">
        {{ $t("home.personalMessage") }}   
      <span class="text-celeste font-bold">{{ $t("home.availability") }}</span>
      </p>

      <div v-if="!developer" class="bg-celeste text-center font-bold text-white hover:bg-celeste/50 px-6 py-2 mb-2 rounded-lg transition duration-200">{{ $t("global.loading") }}</div>

      <a
        v-else
        :href="developer?.download"
        download
        class="bg-celeste hover:bg-celeste/50 px-6 py-2 mb-2 rounded-lg transition duration-200 text-white font-medium"
      >
        <h1 class="text-center font-bold text-white">
          {{ $t("curriculum.download") }}
        </h1>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dataStoreCurriculum } from "@/stores/StateCurriculum";
import { dataStoreProfile } from "@/stores/StateProfile";
import { computed, onMounted } from "vue";

type ProfileType = {
    firstName: string,
    lastName: string,    
    age: number,
    image: string,
}

type curriculumType = {
  id: number;
  asset: boolean;
  key: string;
  image: string;
  download: string;
};

type SpecialtyType = {
  name:string
}

const specialtys: SpecialtyType[]   = [

  { name : "home.specializations.frontendDeveloper" },  
  { name : "home.specializations.databases"},
  { name : "home.specializations.networking"},
  { name : "home.specializations.softwareEngineeringStudent"},
  { name : "home.specializations.cybersecurity"},
  
]

const storeProfile = dataStoreProfile();
const storeCurriculum = dataStoreCurriculum();

const profile = computed<ProfileType>(() => storeProfile.profile);
const curriculum = computed<curriculumType[]>(() => storeCurriculum.curriculum);

const developer = computed<curriculumType | undefined>(() => {
  return curriculum.value.find((c) => c.asset);
});

onMounted(() => {
  storeProfile.fetchProfile();
  storeCurriculum.fetchCurriculum();
});
</script>
