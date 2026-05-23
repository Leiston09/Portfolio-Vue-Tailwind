<template>
  <div
    class="fixed top-0 left-0 right-0 flex justify-between items-center px-3 py-2 bg-[#0F172A] z-50 border-b border-gray-800"
  >
    <PersonalInformation
      :usuarioPerfil="usuarioPerfil"
      :isLoggedIn="isLoggedIn"
      :userLogin="userLogin"
    />

    <div v-if="!positionLogin" class="hidden lg:block">
      <OptionBarPC />
    </div>

    <span >
            <OptionBarSelect 
            :positionLogin="positionLogin"
            :isLoggedIn="isLoggedIn" @login="login" />
    </span>

  </div>

  <div v-if="!positionLogin"  class="lg:hidden">
    <OptionBarMovile :isLoggedIn="isLoggedIn" />
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { dataStoreUser } from "@/stores/User";
import { computed, onMounted, ref } from "vue";

import PersonalInformation from "./PersonalInformation.vue";
import OptionBarMovile from "./OptionBarMovile.vue";
import OptionBarPC from "./OptionBarPC.vue";
import OptionBarSelect from "./OptionBarSelect.vue";


type UserType = {
  name: string;
  lastName: string;
  email: string;
  date: string;
  password: string;
  confirmPassword: string;
};

const usuarioPerfil = "/img/usuarioPerfil.jpg";

const router = useRouter();
const route = useRoute();

const loginUser = dataStoreUser();

const isLoggedIn = computed<boolean>(() => loginUser.authentication);

const userLogin = computed<UserType | null>(() => loginUser.user);

const positionLogin = ref<boolean>(false);



const login = (): void => {
  router.push({
    name: "Access",
  });
};

const positionLoginCheck = (): void => {
  if (route.name === "Access" || route.name === "RegisterUser" || route.name === "RecoverPassword") {
    positionLogin.value = true;
  } else {
    positionLogin.value = false;
  }
};


onMounted(() => {
  positionLoginCheck();
});


</script>
