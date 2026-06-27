<template>
  <AccessLogin @user="handleLogin" />
</template>

<script setup>
import AccessLogin from "@/components/login/AccessLogin.vue";
import { useUserStore } from "@/stores/useUserStore";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAlertStore } from "@/stores/useAlertStore";
import { useI18n } from "vue-i18n";

const authentication = useUserStore();
const router = useRouter();
const alertStore = useAlertStore();

const { t } = useI18n();

const handleLogin = (credentials) => {
  const success = authentication.authenticate(credentials);

  if (success) {
    alertStore.show("success", t('alerts.success'));
    router.push({ name: "Home" });
  } else {
    alertStore.show("error", t('alerts.failed'));
  }
};
</script>
