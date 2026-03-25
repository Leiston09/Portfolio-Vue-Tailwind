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
</template>

<script setup>
import { RouterView } from "vue-router";
import OptionsBar from "./components/OptionsBar.vue";
import ViewSelectionHome from "./components/ViewSelectionHome.vue";
</script>
