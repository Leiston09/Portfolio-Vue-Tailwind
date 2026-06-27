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
    <div class="p-4 sm:p-6 lg:p-4 flex flex-col justify-center text-justify flex-1">
      <div class="flex flex-col gap-3 sm:gap-4">
        <h1 class="text-xl sm:text-2xl lg:text-4xl font-bold text-white text-center">
          {{ $t(`certifications.items.${selectedCertification.key}.name`) }}
        </h1>

        <p class="text-gray-400 text-center lg:text-left font-extrabold text-sm sm:text-base lg:text-xl">
           {{ $t(`certifications.institution`) }} : <span class="text-white">{{ $t(`certifications.institutions.${selectedCertification.institution}`) }}</span>
        </p>

        <p class="text-gray-300 text-justify text-sm sm:text-base lg:text-xl leading-relaxed ">
          {{ $t(`certifications.items.${selectedCertification.key}.descriptionDetail`) }}
        </p>

        <div class="flex gap-3 justify-center lg:justify-start mt-2 flex-wrap">
            <a :href="selectedCertification.certificate" download class="buttonBlue">
              {{ $t("certifications.buttons.download") }} 
              <i class="fas fa-download mr-2"></i>
            </a>

          <RouterLink :to="backRoute" class="buttonDark"">
            {{ $t("global.back") }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CertificationType } from "@/data/certifications";
import { useCertificationsStore } from "@/stores/useCertificationsStore";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const store = useCertificationsStore();
const route = useRoute();

const certifications = computed<CertificationType[]>(() => store.certifications);

const selectedCertification = computed<CertificationType | null>(() => {
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