<template>
  <div>
    <Recovery @user="email" />
  </div>
</template>

<script setup lang="ts">
import Recovery from "@/components/login/Recovery.vue";
import { dataStoreUser } from "@/stores/User";
import { useRouter } from "vue-router";

const router = useRouter();
const storeUser = dataStoreUser();

const email = (email: string): void => {
  const user = storeUser.user;

  if (user && user.email === email) {
    setTimeout((): void => {
      router.push({
        name: "Access",
      });
    }, 1000);

    return;
  }

  //alert("El correo no existe");
};
</script>