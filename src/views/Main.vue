<template >
    <header>
      <OptionsBar />
    </header>

    <main class="pt-20 mb-10 lg:mb-0 px-4 flex-1">
      <div class="max-w-7xl mx-auto">
        <Home/>
      </div>
    </main>

    <footer class="text-center text-gray-500 text-xs pb-4">
      © 2026 Leiston - Portfolio
    </footer>

    <div class="fixed bottom-10 right-5 lg:bottom-5 lg:right-10">
      <ChatBot />
    </div>
</template>

<script setup>
import ChatBot from "@/components/static/ChatBot.vue";
import OptionsBar from "@/components/static/OptionsBar.vue";
import { RouterView } from "vue-router";
import Home from "./Home.vue";

</script>
