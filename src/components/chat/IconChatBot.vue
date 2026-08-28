<template>
  <button
    v-if="iconView"
    class="fixed bottom-20 -right-3 lg:-bottom-6 lg:-right-6 z-50 w-25 h-25 md:w-40 md:h-40 hover:scale-115 active:scale-95 transition-all duration-300 overflow-hidden"
    @click="statusChatBot"
  >
    <ChatBotIcon path="/icons/chatBot" name="CzdSNPFNzY" />
  </button>

  <div
    v-else
    class="fixed inset-0 z-40 flex items-center justify-center"
    @click.self="statusChatBot"
  >
    <div
      class="fixed bottom-25 right-3 md:right-10 lg:bottom-5 lg:right-5 z-50 w-72 sm:w-96 bg-bg-light-card/70 dark:bg-bg-secondary/95 border border-border-light dark:border-border-secondary rounded-2xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-md transition-colors duration-300"
    >
      <ChatbotTitle @close="statusChatBot" />
      <Chatcontent />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Chatcontent from "./Chatcontent.vue";
import ChatbotTitle from "./container/chatbotTitle.vue";
import ChatBotIcon from "./icon/ChatBotIcon.vue";

const iconView = ref<boolean>(true);

const statusChatBot = (): void => {
  iconView.value = !iconView.value;
};
</script>