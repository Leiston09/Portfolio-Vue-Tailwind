<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-lg md:text-3xl font-bold text-white ">
        {{ $t("certifications.title") }}
      </h1>
    </div>

    <div v-if="certifications.length > 3">
      <RouterLink :to="{ name: 'Certifications' }" class="buttonViewAll">
        {{ $t("globalOptions.ViewAll") }}
      </RouterLink>
    </div>
  </div>
  
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
    <div
      v-for="Certification in CertificationsHome"
      :key="Certification.id"
      class="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <img :src="Certification.image" class="w-full h-60 object-cover" />
      <div class="p-4">
        <h2 class="text-white font-bold text-lg">
          {{ $t(`certifications.items.${Certification.key}.name`) }}
        </h2>
        <p class="text-gray-400 text-sm">
          {{ Certification.institution }}
        </p>
        <p class="text-gray-400 text-sm">
          {{ $t(`certifications.items.${Certification.key}.description`) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { dataStoreCertification } from "@/stores/StoreCertifications";
import { computed, onMounted } from "vue";

const storeCertifications = dataStoreCertification();
const certifications = computed(() => storeCertifications.Certifications);

const CertificationsHome = computed(() => {
  if (certifications.value.length > 3) {
    return certifications.value.slice(0, 3);
  }
  return certifications.value;
});

onMounted(() => {
  storeCertifications.fetchCertifications();
});
</script>
