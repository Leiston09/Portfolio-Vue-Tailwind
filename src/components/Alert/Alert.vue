<template>
  <Transition name="toast">
    <div
      v-if="alertStore.visible"
      :class="alertClass"
      class="fixed top-15 md:top-20 right-3 z-50"
    >
      {{ alertStore.message }}
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useAlertStore } from "@/stores/useAlertStore";

const alertStore = useAlertStore();

const alertClass = computed(() => {
  switch (alertStore.type) {
    case "success":
      return "alert-success";
    case "error":
      return "alert-error";
    case "warning":
      return "alert-warning";
    default:
      return "";
  }
});
</script>


<style lang="scss" scoped>

.alert-success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    padding: 10px;
    border-radius: 5px;
}
.alert-error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    padding: 10px;
    border-radius: 5px;
}
.alert-warning {
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeeba;
    padding: 10px;
    border-radius: 5px;
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.toast-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.toast-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

</style>