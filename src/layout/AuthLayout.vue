<template>
  <div class="h-screen w-full">
    <div>
      <OptionBarLogin />
    </div>
    <div class=" my-10 mx-4 flex justify-center">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import OptionBarLogin from "@/components/static/OptionBarLogin.vue";
</script>