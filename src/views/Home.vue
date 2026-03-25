<template>
  <OptionsBar />
  <div class="flex p-4 min-h-screen bg-[#F8F3C6] py-20">
    <div class="w-auto">
      <ViewSelectionHome />
    </div>
    <div class="flex-1 place-content-center place-items-center">
      <div class="flex gap-4 md:flex-row flex-col">
        <div class="flex-1">
          <MainViewHome />
        </div>
        <div class="md:w-64 lg:w-80">
          <PersonalInformationHome />
        </div>
      </div>
      <div class="mt-4">
        <Projects />
      </div>
      <div class="mt-4">
        <Contact />
      </div>
      <div class="mt-4">
        <Certifications />
      </div>
      <div class="fixed right-4 bottom-4 ">
        <ChatBot />
      </div>
    </div>
  </div>
</template>

<script setup>
import ViewSelectionHome from "../components/Home/ViewSelectionHome.vue";
import MainViewHome from "../components/Home/MainViewHome.vue";
import PersonalInformationHome from "../components/Home/PersonalInformationHome.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import OptionsBar from "@/components/OptionsBar.vue";
import Certifications from "@/components/Certifications.vue";
import ChatBot from "@/components/Chat/ChatBot.vue";
</script>

<style lang="scss" scoped></style>
