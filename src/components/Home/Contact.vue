<template>
  <div
    class="bg-[#020617] my-10 rounded-2xl p-6 flex flex-col items-center border border-gray-800"
  >
    <h1 class="font-bold text-3xl text-white">
      {{ t("contact.title") }}
    </h1>

    <p class="text-gray-400 text-center mt-2 max-w-xl">
      {{ t("contact.contactIntro") }}
    </p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 w-full"
    >
      <div
        v-for="contact in contacts"
        :key="contact.id"
        :class="[contact.color, 'flex items-center gap-3 md:flex-col md:gap-2 p-5 rounded-xl border hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group']">
        <i
          :class="[contact.icon, contact.color]"
          class="text-2xl md:text-5xl"
        ></i>
        <a
          :href="contact.url"
          target="_blank"
          class="text-white font-semibold transition"
        >
          {{ contact.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getProfile } from "@/service/api";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const contacts = ref([]);

onMounted(async () => {
  contacts.value = await getProfile();
});
</script>
