<template>
  <div class="h-screen w-full" >
    <div class="">
      <OptionBarLogin />
    </div>
    <div class="my-10 mx-4 flex justify-center">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import OptionBarLogin from "@/components/static/OptionBarLogin.vue";
</script>
