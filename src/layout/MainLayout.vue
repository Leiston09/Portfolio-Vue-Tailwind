<template>
  <div class="min-h-screen flex flex-col ">

    <header>
      <OptionsBar />
    </header>

    <main class=" flex flex-1 py-20 lg:pt-20 lg:pb-0 px-5 items-center justify-center">
      <div class="max-w-7xl mx-auto w-full">
        <RouterView />
      </div>
    </main>

    <footer class=" hidden lg:flex text-gray-500 text-xs  justify-center py-4">
      <h1>© 2026 Leiston Holguin - {{ $t("globalOptions.webPortfolio") }}</h1>
    </footer>

    <div class="fixed bottom-15 right-5 lg:bottom-2 lg:right-5">
      <ChatBot />
    </div>

  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import OptionsBar from "@/components/static/OptionsBar.vue";
import ChatBot from "@/components/chat/ChatBot.vue";
</script>