<template>
  <div class="flex gap-4 p-4 min-h-screen bg-[#F8F3C6]">
    <div class="w-full md:w-1/6">
      <ViewSelectionHome />
    </div>
    <div class="flex-1">
      <div class="flex gap-4 md:flex-row flex-col">
        <div class="flex-1">
          <MainViewHome />
        </div>
        <div class="md:w-80">
          <PersonalInformationHome />
        </div>
      </div>
      <div class="mt-4">
        <Projects />
      </div>
      <div class="mt-4">
        <Contact />
      </div>
    </div>
  </div>
</template>

<script setup>
import ViewSelectionHome from "../components/Home/ViewSelectionHome.vue";
import MainViewHome from "../components/Home/MainViewHome.vue";
import PersonalInformationHome from "../components/Home/PersonalInformationHome.vue";
import Projects from "@/components/Home/Projects.vue";
import Contact from "@/components/Home/Contact.vue";
</script>

<style lang="scss" scoped></style>
