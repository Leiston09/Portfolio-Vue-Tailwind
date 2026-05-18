<template>
  <div
    class=" rounded-2xl p-6 flex flex-col items-center border border-gray-800">
    <h1 class="titleOptions">
      {{ $t("contact.title") }}
    </h1>

    <p class="text-gray-400 text-center mt-2 max-w-xl">
      {{ $t("contact.contactIntro") }}
    </p>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-8 w-full"
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
import { dataStoreCurriculum } from '@/stores/StateCurriculum';
import { dataStoreContact } from '@/stores/StoreContacts';
import { computed, onMounted } from "vue";

type ContactType = {
  id: number;
  name: string;
  url: string;
  icon: string;
  color: string;
  download?: boolean;
};

type curriculumType = {
  id: number;
  asset: boolean;
  name: string;
  image: string;
  download: string;
};

const storeContact = dataStoreContact();
const storeCurriculo = dataStoreCurriculum();


const curriculo = computed<curriculumType[]>(() => storeCurriculo.curriculum);

const contacts = computed<ContactType[]>(() => {
  const curriculumDownload = curriculo.value.find(
    (c) => c.name === "curriculumDeveloper"
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