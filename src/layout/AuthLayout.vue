<template>
  <div class="min-h-screen w-full">
    <OptionBarLogin />

    <div class="mx-4 flex justify-center">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import OptionBarLogin from "@/components/static/OptionBarLogin.vue";
</script>