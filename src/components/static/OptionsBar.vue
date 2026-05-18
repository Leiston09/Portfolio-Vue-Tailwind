<template>
  <div
    class="fixed top-0 left-0 right-0 flex justify-between items-center px-7 py-2 bg-[#0F172A] z-50 border-b border-gray-800"
  >
    <PersonalInformation
      :usuarioPerfil="usuarioPerfil"
      :isLoggedIn="isLoggedIn"
      :userLogin="userLogin"
    />

    <div class="hidden lg:block">
      <OptionBarPC />
    </div>

    <OptionBarSelect :isLoggedIn="isLoggedIn" @login="login" />
  </div>

  <div class="lg:hidden">
    <OptionBarMovile :isLoggedIn="isLoggedIn" />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { dataStoreUser } from "@/stores/User";
import { computed } from "vue";

import PersonalInformation from "./PersonalInformation.vue";
import OptionBarMovile from "./OptionBarMovile.vue";
import OptionBarPC from "./OptionBarPC.vue";
import OptionBarSelect from "./OptionBarSelect.vue";

const usuarioPerfil = "/img/usuarioPerfil.jpg";

const router = useRouter();

const loginUser = dataStoreUser();

const isLoggedIn = computed<boolean>(() => loginUser.authentication);

const userLogin = computed(() => loginUser.user);

const login = (): void => {
  router.push({
    name: "Access",
  });
};
</script>
