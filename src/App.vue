<template>
  <div class=" bg-azul-oscuro">
    <RouterView />
    <Alert/>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Alert from "./components/Alert/Alert.vue";
</script>
