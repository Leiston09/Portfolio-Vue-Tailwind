<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-2xl font-bold text-[#442A18]">
      {{ t("menu.certifications") }}
    </h1>
    <p class="text-[#442A18]/80 mt-2 justify-center items-center">
      {{ t("certifications.intro") }}
    </p>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
      <div
        class="bg-[#442A18]/10 rounded-lg flex flex-col items-center"
        v-for="certification in certifications"
        :key="certification.id"
      >
        <img
          :src="certification.image"
          alt="certificacion.name"
          class="w-full h-20 object-cover rounded-t-lg lg:h-40"
        />
        <h2 class="font-bold text-[#442A18] mt-2 text-xs lg:text-xl">
          {{ certification.name }}
        </h2>
        <p class="text-[#442A18]/80 text-center text-xs px-2 lg:text-lg">
          {{ certification.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCertifications } from "@/service/api";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const certifications = ref([]);

onMounted(async () => {
  certifications.value = await getCertifications();
});
</script>

<style lang="scss" scoped></style>
