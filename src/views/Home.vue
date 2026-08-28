<template>
  <div class="flex flex-col space-y-10">
    <div
      class="flex flex-col md:flex-row items-center justify-center gap-5"
    >
      <div class="md:flex-1 md:mr-2">
        <HomeView />
      </div>

      <div class="md:flex-1" id="about">
        <div class="flex flex-col gap-3">
          <PersonalInformation />
          <div class="block md:hidden lg:block">
            <Testimonial />
          </div>
        </div>
      </div>

    </div>
      <div class="hidden md:block lg:hidden">
        <Testimonial />
      </div>
    <div id="experience">
      <Experience />
    </div>

    <div id="projects">
      <ProjectsView />
    </div>

    <div id="skills">
      <SkillsView />
    </div>

    <div id="certifications">
      <CertificationsView />
    </div>

    <div id="contact">
      <ContactView />
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeView from "@/components/Home/HomeView.vue";
import PersonalInformation from "@/components/Home/PersonalInformation.vue";
import Testimonial from "@/components/Home/Testimonial.vue";
import Experience from "@/components/Home/Experience.vue";
import ProjectsView from "@/components/Home/ProjectsView.vue";
import SkillsView from "@/components/Home/SkillsView.vue";
import CertificationsView from "@/components/Home/CertificationsView.vue";
import ContactView from "@/components/Home/ContactView.vue";
</script>
