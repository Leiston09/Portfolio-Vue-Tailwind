<template>
  <div class="min-h-screen flex flex-col">
    <OptionBarLogin />

    <div class="flex flex-1 items-center justify-center px-4 ">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import OptionBarLogin from "@/components/static/OptionBarLogin.vue";
</script>