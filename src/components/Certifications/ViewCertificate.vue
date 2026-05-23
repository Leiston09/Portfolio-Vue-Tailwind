<template>
  <div v-if="!selectedCertification" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="text-center">
      <div class="w-12 h-12 border-4 border-white/30 border-t-sky-400 rounded-full animate-spin mx-auto mb-4"></div>
      <p class="text-white font-medium">{{ $t("global.loadingMessage") }}</p>
    </div>
  </div>

  <div v-else class="flex flex-col lg:flex-row items-center justify-center">
    <div class="w-full flex flex-1 justify-center items-center bg-neutral-900 rounded-2xl overflow-hidden">
      <img :src="selectedCertification.image" :alt="$t(`certifications.items.${selectedCertification.key}.name`)" class="w-full h-full object-cover" />
    </div>

    <div class="p-4 sm:p-6 lg:p-4 flex flex-col justify-center flex-1">
      <div class="flex flex-col gap-3 sm:gap-4">
        <h1 class="text-xl sm:text-2xl lg:text-4xl font-bold text-white text-center lg:text-left">
          {{ $t(`certifications.items.${selectedCertification.key}.name`) }}
        </h1>

        <p class="text-gray-400 text-center lg:text-left font-extrabold text-sm sm:text-base lg:text-xl">
           {{ $t(`certifications.institution`) }} : <span class="text-white">{{ $t(`certifications.institutions.${selectedCertification.institution}`) }}</span>
        </p>

        <p class="text-gray-300 text-justify lg:text-left text-sm sm:text-base lg:text-xl leading-relaxed">
          {{ $t(`certifications.items.${selectedCertification.key}.descriptionDetail`) }}
        </p>

        <div class="flex gap-3 justify-center lg:justify-start mt-2 flex-wrap">
          <a :href="selectedCertification.certificate" download class="bg-sky-400 hover:bg-sky-500 px-3 sm:px-4 py-2 rounded-lg font-semibold text-center transition-all hover:scale-105 text-white text-xs sm:text-sm">
            {{ $t("certifications.buttons.download") }}
          </a>

          <RouterLink :to="backRoute" class="border border-gray-400 hover:bg-gray-400 text-gray-400 hover:text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-center transition-all hover:scale-105 text-xs sm:text-sm">
            {{ $t("global.back") }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dataStoreCertification } from "@/stores/StoreCertifications";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

type CertificationsType = {
  id: number;
  featured: boolean;
  key: string;
  institution: string;
  image: string;
  certificate: string;
  downloadable?: boolean;
};


const store = dataStoreCertification();
const route = useRoute();

const certifications = computed<CertificationsType[]>(() => store.certifications);

const selectedCertification = computed<CertificationsType | null>(() => {
  const id = route.params.id;
  return certifications.value.find((c) => c.id === Number(id)) || null;
});

const backRoute = computed<string>(() => {
  return (route.query.from as string) || "/certifications";
});

onMounted(() => {
  store.fetchCertifications();
});
</script>