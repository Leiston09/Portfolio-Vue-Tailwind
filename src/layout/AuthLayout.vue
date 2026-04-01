<template>
  <OptionBarLogin />
  <div class="flex justify-center h-screen items-center pt-18 px-2  w-full ">
    <RouterView/>
  </div>
</template>

<script setup>
import OptionBarLogin from '@/components/static/OptionBarLogin.vue';

</script>

