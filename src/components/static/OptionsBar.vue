<template>
  <div
    class="fixed top-0 left-0 right-0 flex justify-between items-center px-3 py-2 z-50 border-b shadow-sm backdrop-blur-md transition-colors duration-300 bg-bar-light dark:bg-bar-dark border-bar-border-light dark:border-bar-border-dark shadow-gray-200/50 dark:shadow-none"
  >
    <PersonalInformation />

    <div class="hidden lg:block">
      <OptionBarPC />
    </div>

    <span>
      <OptionBarSelect />
    </span>
  </div>

  <div class="lg:hidden">
    <OptionBarMovile />
  </div>
</template>

<script setup lang="ts">
import PersonalInformation from "./PersonalInformation.vue";
import OptionBarMovile from "./OptionBarMovile.vue";
import OptionBarPC from "./OptionBarPC.vue";
import OptionBarSelect from "./OptionBarSelect.vue";
</script>
