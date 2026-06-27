import { defineStore } from "pinia";
import { ref } from "vue";

export const useAlertStore = defineStore("alert", () => {
  const type = ref("");
  const message = ref("");
  const visible = ref(false);

  const show = (
    alertType: "success" | "error" | "warning",
    alertMessage: string,
  ) => {
    type.value = alertType;
    message.value = alertMessage;
    visible.value = true;

    setTimeout(() => {
      visible.value = false;
    }, 3000);
  };

  const hide = () => {
    visible.value = false;
  };

  return {
    type,
    message,
    visible,
    show,
    hide,
  };
});
