<template>
  <div class="min-h-screen bg-[#020617] flex flex-col">
    <OptionsBar />

    <main class="pt-20 px-4 flex-1">
      <div class="max-w-7xl mx-auto">
        <RouterView />
      </div>
    </main>

    <div class="fixed bottom-4 right-4 md:right-6 z-50">
      <ChatBot />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import OptionsBar from "./components/static/OptionsBar.vue";
import ChatBot from "./components/static/ChatBot.vue";
</script>
