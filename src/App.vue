<template>
  <div class="min-h-screen bg-[#020617] flex flex-col">
    <OptionsBar />

    <main class="pt-20 pb-5 md:pb-0 px-4 flex-1">
      <div class="max-w-7xl mx-auto">
        <RouterView />
      </div>
    </main>

    <div class="fixed bottom-10 right-4 md:bottom-2 md:right-5 z-50">
      <ChatBot />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import OptionsBar from "./components/static/OptionsBar.vue";
import ChatBot from "./components/static/ChatBot.vue";
</script>
