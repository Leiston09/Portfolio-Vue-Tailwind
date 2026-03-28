<template>
  <div class="w-fit">
    <button class="overflow-hidden rounded-full">
      <img
        :src="ChatBot"
        alt="ChatBot"
        class="object-cover w-10 h-10 md:w-15 md:h-15 hover:scale-115 transition-transform"
      />
    </button>
  </div>
</template>

<script setup>
import ChatBot from '@/assets/img/ChatBotWhile.png'

</script>

<style lang="scss" scoped></style>
