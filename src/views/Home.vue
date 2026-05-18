<template>
  <div class="flex flex-col gap-7" >  
    <div class="flex flex-col md:flex-row items-center justify-center gap-5 ">
      <div class="flex-1" id="home">
        <HomeView />
      </div>

      <div class="md:w-90" id="about">
        <PersonalInformation />
      </div>
    </div>

    <div id="projects" >
      <ProjectsView />
    </div>

    <div  id="skills" >
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
import CertificationsView from '@/components/Home/CertificationsView.vue';
import ContactView from '@/components/Home/ContactView.vue';
import HomeView from '@/components/Home/HomeView.vue';
import PersonalInformation from '@/components/Home/PersonalInformation.vue';
import ProjectsView from '@/components/Home/projectsView.vue';
import SkillsView from '@/components/Home/SkillsView.vue';
</script>
