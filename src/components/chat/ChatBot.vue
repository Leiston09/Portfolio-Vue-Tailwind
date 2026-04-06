<template>
  <div class="w-fit">
    <button class="overflow-hidden rounded-full" @click="chatBotIA">
      <img
        :src="ChatBot"
        alt="ChatBot"
        class="object-cover w-10 h-10 md:w-15 md:h-15 hover:scale-115 transition-transform duration-300"
      />
    </button>
  </div>
  <div v-if="chatView">
    <ViewChatBot
    @close="close"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChatBot from "/img/ChatBotWhile.png";
import ViewChatBot from "./ViewChatBot.vue";

const chatView = ref(false)

const chatBotIA = () => {
  chatView.value = chatView.value === false ? true : false
}

function close(close){
  chatView.value = close
}
</script>

<style lang="scss" scoped></style>
