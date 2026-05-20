<template>
  <div class="flex flex-col md:flex-row items-center gap-5">
    <div class="flex-1 space-y-6">
      <span
        class="text-xs border border-celeste text-celeste px-3 py-1 rounded-full"
      >
        {{ $t("home.portfolioTitle") }}
      </span>

      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight text-center md:text-left"
      >
        {{ profile.firstName }} <br />
        <span class="text-celeste">{{ profile.lastName }}</span>
      </h1>

      <p class="text-gray-300 text-justify max-w-lg">
        {{ $t("home.welcomeMessage") }}
      </p>

      <div class="flex flex-wrap justify-center items-center gap-3">
        <RouterLink :to="{ path: '/', hash: '#projects' }" class="buttonBlue">
          {{ $t("home.ViewProjects") }}
        </RouterLink>

        <RouterLink :to="{ name: 'Curriculum' }" class="buttonDark">
          {{ $t("home.ViewCV") }}
        </RouterLink>

        <RouterLink
          :to="{ path: '/', hash: '#contact' }"
          class="hidden lg:block buttonDark"
        >
          {{ $t("home.ViewContact") }}
        </RouterLink>
      </div>
    </div>

    <div class="hidden lg:flex justify-end items-center">
      <div
        class="w-56 h-56 md:w-90 md:h-90 overflow-hidden rounded-full border border-azul-oscuro mask-radial-[50%_50%] mask-radial-from-0%"
      >
        <img :src="homeGif" alt="Foto" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dataStoreProfile } from "@/stores/StateProfile";
import { computed, onMounted } from "vue";

type profileType = {
  firstName: string;
  lastName: string;
  age: number;
  image: string;
};

const homeGif: string = "/img/gif/PerfilError.gif";

const storeProfile = dataStoreProfile();

const profile = computed<profileType>(() => storeProfile.profile);

onMounted(() => {
  storeProfile.fetchProfile();
});
</script>
