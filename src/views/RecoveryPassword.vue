<template>
  
  <div>
    <Recovery @user="handleRecovery " />
  </div>
</template>

<script setup lang="ts">
import Recovery from "@/components/login/Recovery.vue";
import { useAlertStore } from "@/stores/useAlertStore";
import { useUserStore } from "@/stores/useUserStore";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const router = useRouter();
const storeUser = useUserStore();

const alertStore = useAlertStore()
const {t} = useI18n()

const handleRecovery  = (email: string): void => {
  const user = storeUser.user;

  if (user && user.email === email) {

    alertStore.show('success', t('alerts.codeSent'))

    setTimeout((): void => {
      router.push({
        name: "Access",
      });
    }, 2000);

    return;
  }
  alertStore.show('warning', t('alerts.unregistered'))
};


onMounted(() => {
    alertStore.show('error', t('alerts.development'))
})

</script>
