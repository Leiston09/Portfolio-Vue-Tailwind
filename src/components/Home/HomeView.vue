<template>
  <div class="flex flex-col md:flex-row items-center gap-5">
    <div class="flex-1 space-y-6">

      <div :class="profile.backgroundImage? '' : 'flex justify-center'">
        <span
          class="text-xs border border-celeste text-celeste px-3 py-1 rounded-full"
        >
          {{ $t("home.title") }}
        </span>        
      </div>


      <h1
      :class="profile.backgroundImage ? 'text-center md:text-left' : 'text-center'"
        class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
      >
        {{ profile.firstName }} <br />
        <span class="text-celeste">{{ profile.lastName }}</span>
      </h1>
      <div class="w-full flex justify-center">
        <p       
        class="text-gray-300 text-justify  max-w-2xl">
          {{ $t("home.welcomeMessage") }}
        </p>        
      </div>


      <div class="flex flex-wrap justify-center items-center gap-3">
        <RouterLink :to="{ path: '/', hash: '#projects' }" class="buttonBlue">
          {{ $t("home.buttons.projects") }}
        </RouterLink>

        <RouterLink :to="{ name: 'Curriculum' }" class="buttonDark">
          {{ $t("home.buttons.curriculum") }}
        </RouterLink>

        <RouterLink
          :to="{ path: '/', hash: '#contact' }"
          class="hidden lg:block buttonDark"
        >
          {{ $t("home.buttons.contact") }}
        </RouterLink>
      </div>
    </div>

    <div :class="profile.backgroundImage ? 'hidden lg:flex' :'hidden'" class="justify-end items-center">
      <div
        class="w-56 h-56 md:w-90 md:h-90 overflow-hidden rounded-full border border-azul-oscuro mask-radial-[50%_50%] mask-radial-from-0%"
      >
        <img :src="profile.backgroundImage" :alt="(profile.lastName + profile.firstName)" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { profileType } from "@/data/profile";
import { useProfileStore } from "@/stores/useProfileStore";
import { computed, onMounted } from "vue";

const storeProfile = useProfileStore();

const profile = computed<profileType>(() => storeProfile.profile);

onMounted(() => {
  storeProfile.fetchProfile();
});
</script>
