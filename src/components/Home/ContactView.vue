<template>
  <div
    class=" rounded-2xl p-6 flex flex-col items-center gap-2 border border-gray-800">
    <h1 class="titleOptions">
      {{ $t("contact.title") }}
    </h1>

    <span class="text-celeste/70 font-bold text-center">{{ $t("home.availability") }}</span>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 w-full"
    >
      <a
        v-for="contact in contacts"
        :key="contact.id"
        :href="contact.url"
        download
        target="_blank"
        rel="noopener noreferrer"
        :class="[contact.color, 'flex items-center  gap-3 md:flex-col md:gap-2 p-5 rounded-xl border hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group']"
      >
        <i 
          :class="[contact.icon, contact.color]" 
          class="text-2xl md:text-5xl">
        </i>

        <span
          class="text-white font-semibold transition truncate"
        >
          {{ contact.name }}
        </span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { curriculumType } from '@/data/curriculum';
import { ContactType } from '@/data/contact';
import { useCurriculumStore } from '@/stores/useCurriculumStore';
import { useContectStore } from '@/stores/useContectStore';
import { computed, onMounted } from "vue";


const storeContact = useContectStore();
const storeCurriculo = useCurriculumStore();


const curriculum = computed<curriculumType[]>(() => storeCurriculo.curriculum);

const contacts = computed<ContactType[]>(() => {
  const curriculumDownload = curriculum.value.find(
    (c) => c.asset
  );

  return storeContact.contact.map((contact) => {

    

    if (
      contact.name === "Curriculum" &&
      curriculumDownload
    ) {
      return {
        ...contact,
        url: curriculumDownload.download,
      };
    }

    return contact;
  });
});

onMounted(() => {
  storeContact.fetchContact();
  storeCurriculo.fetchCurriculum()
});
</script>