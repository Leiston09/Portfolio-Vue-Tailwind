<template id="layoutpro">
  <div class="min-h-screen bg-azul-oscuro flex flex-col">
    <header>
      <OptionsBar />
    </header>

    <main class="pt-20 mb-10 lg:mb-0 px-4 flex-1">
      <div class="max-w-7xl mx-auto">
        <RouterView />
      </div>
    </main>

    <footer class="text-center text-gray-500 text-xs pb-4">
      © 2026 Leiston - Portfolio
    </footer>

    <div class="fixed bottom-10 right-5 lg:bottom-5 lg:right-10">
      <ChatBot />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import OptionsBar from "./components/static/OptionsBar.vue";
import ChatBot from "./components/static/ChatBot.vue";
</script>
