<template>
  <RegisterUser @NewUserRegister="NewUser" />
</template>

<script setup lang="ts">
import { RegisterType } from "@/types";
import RegisterUser from "@/components/login/RegisterUser.vue";
import { useUserStore } from "@/stores/useUserStore";
import { useRouter } from "vue-router";
import { useAlertStore } from "@/stores/useAlertStore";
import { useI18n } from "vue-i18n";

const alertStore = useAlertStore();
const router = useRouter();
const storeUser = useUserStore();
const { t } = useI18n();

function NewUser(user: RegisterType): void {

  const dataUser = {
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    birthDate: user.birthDate,
    password: user.password,
  };

  storeUser.login(dataUser);
  alertStore.show("success", t('alerts.LoginRecord'));
  setTimeout(() => router.push({ name: "Access" }), 2000);
}
</script>
