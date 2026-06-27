<template>
  <div
    v-if="alertStore.visible"
    :class="alertClass"
    class="fixed top-20 right-5 z-50"
  >
    {{ alertStore.message }}
  </div>
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

</style>