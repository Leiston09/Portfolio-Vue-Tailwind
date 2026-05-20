<template>
  <div class=" h-screen flex flex-col">
    <OptionsBar />

    <div class="flex flex-1 items-center justify-center px-4 lg:mt-20 ">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import OptionsBar from "@/components/static/OptionsBar.vue";
import { RouterView } from "vue-router";
</script>