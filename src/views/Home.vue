<template>
  <div class="space-y-5" >  
    <div class="flex flex-col md:flex-row items-center justify-center gap-10 ">
      <div class="flex-1" id="home">
        <HomeView />
      </div>

      <div class="md:w-90 " id="about">
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
      <Contact />
    </div>
  </div>
</template>

<script setup>
import CertificationsView from '@/components/Home/CertificationsView.vue';
import Contact from '@/components/Home/Contact.vue';
import HomeView from '@/components/Home/HomeView.vue';
import PersonalInformation from '@/components/Home/PersonalInformation.vue';
import ProjectsView from '@/components/Home/ProjectsView.vue';
import SkillsView from '@/components/Home/SkillsView.vue';


</script>
