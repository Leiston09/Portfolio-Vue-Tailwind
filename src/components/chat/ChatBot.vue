<template>
  <div class="w-fit">
    <button class="overflow-hidden rounded-full shadow-lg active:scale-90 transition" @click="chatBotIA">
      <img
        :src="ChatBot"
        alt="ChatBot"
        class="object-cover w-12 h-12 md:w-15 md:h-15 hover:scale-115 transition-transform duration-300"
      />
    </button>
  </div>

  <div v-if="chatView">
    <ViewChatBot @close="close" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ViewChatBot from "./ViewChatBot.vue";

const ChatBot = "/img/ChatBotWhile.jpg";

const chatView = ref<boolean>(false);

const chatBotIA = (): void => {
  chatView.value = !chatView.value;
};

const close = (close: boolean): void => {
  chatView.value = close;
};
</script>

<style lang="scss" scoped></style>