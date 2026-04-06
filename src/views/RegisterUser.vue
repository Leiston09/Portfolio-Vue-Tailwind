<template>
  <RegisterUser @users="register" />
</template>

<script setup>
import RegisterUser from "@/components/login/RegisterUser.vue";
import { dataStoreUser } from "@/stores/User";
import { useRouter } from "vue-router";


const router = useRouter();
const storeUser = dataStoreUser();

function register(user) {

  const dataUser = {
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    date: user.date,
    password: user.password,
  };

  storeUser.login(dataUser)

  setTimeout(() => router.push({ name: "Access" }), 1000);
}


</script>
