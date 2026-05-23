<template>
  <header
    class="flex items-center justify-between border-b border-slate-700 px-4 py-3"
  >
    <div class="flex items-center gap-2">
      <img
        :src="chatbot"
        alt="chatbot"
        class="h-6 w-6 animate-pulse"
      />

      <h2 class="text-sm font-semibold text-white">
        {{ $t("chatbot.title") }}
      </h2>
    </div>

    <button
      type="button"
      @click="closeChat"
      class="text-slate-400 transition hover:text-white"
      aria-label="Close chatbot"
    >
      ✕
    </button>
  </header>
</template>

<script setup lang="ts">

const chatbot = "/img/ChatBotWhile.jpg";

const emit = defineEmits<{
  close: [value: boolean];
}>();

const closeChat = (): void => {
  emit("close", false);
};
</script>