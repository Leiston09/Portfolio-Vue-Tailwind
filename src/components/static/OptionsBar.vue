<template>
  <div
    class="fixed top-0 left-0 right-0 flex justify-between items-center px-3 py-2 bg-[#0F172A] z-50 border-b border-gray-800"
  >
    <PersonalInformation
      :fotoPerfil="fotoPerfil"
      :isLoggedIn="isLoggedIn"
      :userData="userData"
    />

    <div v-if="!positionLogin" class="hidden lg:block">
      <OptionBarPC />
    </div>

    <span>
      <OptionBarSelect
        :positionLogin="positionLogin"
        :isLoggedIn="isLoggedIn"
        @login="login"
      />
    </span>
  </div>

  <div v-if="!positionLogin" class="lg:hidden">
    <OptionBarMovile :isLoggedIn="isLoggedIn" />
  </div>
  
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/useUserStore.js";
import { computed, onMounted, ref } from "vue";

import { UserType } from "@/types/index.js";

import PersonalInformation from "./PersonalInformation.vue";
import OptionBarMovile from "./OptionBarMovile.vue";
import OptionBarPC from "./OptionBarPC.vue";
import OptionBarSelect from "./OptionBarSelect.vue";

const router = useRouter();
const route = useRoute();

const fotoPerfil = "/img/FotoPerfil1.jpg";
const loginUser = useUserStore();

const isLoggedIn = computed<boolean>(() => loginUser.authentication); //logeado? 
const userData = computed<UserType | null>(() => loginUser.user);   //Dtos Usuario

const positionLogin = ref<boolean>(false);

const login = (): void => {
  router.push({
    name: "Access",
  });
};

const positionLoginCheck = (): void => {
  if ( route.name === "Access" || route.name === "RegisterUser" || route.name === "RecoverPassword") { // Ocultamos las opciones de la barra en estos lugares
    positionLogin.value = true;
  } else {
    positionLogin.value = false;
  }
};

onMounted(() => {
  positionLoginCheck();
});
</script>
