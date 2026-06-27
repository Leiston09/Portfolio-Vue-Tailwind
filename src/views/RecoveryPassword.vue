<template>
  <div>
    <Recovery @user="email" />
  </div>
</template>

<script setup lang="ts">
import Recovery from "@/components/login/Recovery.vue";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "vue-router";

const router = useRouter();
const storeUser = useUserStore();

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

  alert("El correo electrónico no coincide con el registrado.");
};
</script>
