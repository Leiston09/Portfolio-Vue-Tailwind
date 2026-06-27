<template>
  <div class=" h-screen flex flex-col relative"
  :style="{ 
      backgroundImage: `url(${fondo})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
    }">

    <div class="absolute inset-0 bg-black/70 backdrop-blur-xs"></div>

    <div class="relative z-10 flex flex-col h-full">

      <OptionsBar />

      <div class="flex flex-1 items-center justify-center px-4 lg:mt-20 ">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import OptionsBar from "@/components/static/OptionsBar.vue";
import { RouterView } from "vue-router";

const fondo = '/img/loginFondo.jpg';

</script>
