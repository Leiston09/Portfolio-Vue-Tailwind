<template>
  <header
    class="flex items-center justify-between border-b border-border-light dark:border-border-secondary px-4 "
  >
    <div class="flex items-center h-10">
      <ChatBotIcon path="/icons/chatBot" name="CzdSNPFNzY" />
      <h2 class="text-sm font-semibold text-text-light-primary dark:text-text-primary">
        {{ $t("chatbot.title") }}
      </h2>
    </div>

    <button
      type="button"
      @click="closeChat"
      class="text-text-light-secondary dark:text-text-secondary hover:text-text-light-primary dark:hover:text-text-primary transition-colors duration-200"
    >
      ✕
    </button>
  </header>
</template>

<script setup lang="ts">
import ChatBotIcon from "../icon/ChatBotIcon.vue";

const emit = defineEmits<{
  (e: "close"): void;
}>();

const closeChat = (): void => {
  emit("close");
};
</script>