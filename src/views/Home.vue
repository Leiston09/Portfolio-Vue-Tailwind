<template>
  <div>
    <div class="flex gap-4 md:flex-row flex-col">
      <div class="flex-1">
        <MainViewHome />
      </div>
      <div class="md:w-64 lg:w-80">
        <PersonalInformationHome />
      </div>
    </div>

    <div>
      <Contact />
    </div>
  </div>
</template>

<script setup>
import Contact from "@/components/Contact.vue";
import MainViewHome from "@/components/Home/MainViewHome.vue";
import PersonalInformationHome from "@/components/Home/PersonalInformationHome.vue";
</script>

<style lang="scss" scoped></style>
