<template>
  <AccessLogin @user="user" />
</template>

<script setup>
import AccessLogin from "@/components/login/AccessLogin.vue";
import { dataStoreUser } from "@/stores/User";
import { useRouter } from "vue-router";

const authentication = dataStoreUser();
const router = useRouter();

const user = (user) => {
  const success = authentication.authenticationUser(user);
  if (success) {
    router.push({ name: "Home" });
  } else {
    alert("Usuario o contraseña incorrectos");
  }
};
</script>
