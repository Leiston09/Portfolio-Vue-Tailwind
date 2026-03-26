<template>
  <OptionsBar />
  <div class="flex py-20 px-4 min-h-screen bg-[#F8F3C6] md:pt-20 md:pb-0  ">
    <div>
      <ViewSelectionHome />
    </div>

    <div class="flex-1 flex justify-center">
      <div class="max-w-7xl w-full">
        <RouterView />
      </div>
    </div>
  </div>
  <div class="fixed bottom-0 right-5 h-25 md:right-6 md:h-20">
    <ChatBot/>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import OptionsBar from "./components/static/OptionsBar.vue";
import ViewSelectionHome from "./components/static/ViewSelectionHome.vue";
import ChatBot from "./components/static/ChatBot.vue";
</script>
