<template>
  <div
    class="bg-[#442A18]/5 my-1 rounded-2xl p-3 flex flex-col justify-center items-center mt-2"
  >
    <h1 class="font-bold text-3xl text-[#442A18] ">{{ t("menu.contact") }}</h1>
    <p class="text-[#442A18]/80 text-center mt-2">
      {{ t("contact.contactIntro") }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 w-full">
      <div  class=" flex items-center gap-1 md:gap-2 md:flex-col  bg-[#442A18]/10 p-3 rounded-lg hover:bg-[#EB9D23]/20 transition-colors"
        v-for="contact in contacts"
        :key="contact.id"
      >
        <i :class="[contact.icon, contact.color]" class="text-xl md:text-5xl"></i>
        <a
          :href="contact.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#442A18] hover:text-[#EB9D23] transition-colors"
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

const {t} = useI18n()

const contacts = ref([])

onMounted(async () => {
  contacts.value = await getProfile()
})

</script>

<style lang="scss" scoped></style>
