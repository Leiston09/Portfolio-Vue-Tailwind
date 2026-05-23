<template>
  <div>
    <div class="titleOptionsAll">
      <div>
        <h1 class="titleOptions">
          {{ $t("certifications.title") }}
        </h1>
      </div>
      <div v-if="certifications.length > 3">
        <RouterLink :to="{ name: 'Certifications' }" class="buttonViewAll">
          {{ $t("global.viewAll") }}
        </RouterLink>
      </div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
      <div v-for="certification in certificationsHome" :key="certification.id" class="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
        <div class="relative w-full h-52 overflow-hidden">
          <img :src="certification.image" :alt="$t(`certifications.items.${certification.key}.name`)" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
<div v-if="certification.featured" class="absolute top-4 right-4  ">
  
            <span class="star">
              {{ $t("global.featured") }}
            </span>
          </div>
        </div>
        <div class="p-5 flex flex-col gap-3">
          <h2 class="text-white font-bold text-lg leading-tight  transition-all duration-300">
            {{ $t(`certifications.items.${certification.key}.name`) }}
          </h2>
          <div class="flex items-center gap-2">
            <span class="text-celeste text-sm">●</span>
            <p class="text-gray-300 text-sm font-medium">
              {{ $t("certifications.institution") }}:
              <span class="text-white">
                {{ certification.institution }}
              </span>
            </p>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed text-justify">
            {{ $t(`certifications.items.${certification.key}.description`) }}
          </p>
          <div v-if="certification.key !== 'ingenieriaSistemas'" class="flex gap-3 mt-2">
            <button @click="selectedCertification(certification.id)" class="buttonBlue w-full">
              {{ $t("certifications.buttons.view") }}
            </button>
            <a :href="certification.certificate" download class="buttonDark w-full text-center">
              {{ $t("certifications.buttons.download") }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dataStoreCertification } from "@/stores/StoreCertifications";
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";

type CertificationsType = {
  id: number;
  featured: boolean;
  key: string;
  institution: string;
  image: string;
  certificate: string;
  downloadable?: boolean;
};


const router = useRouter();
const storeCertifications = dataStoreCertification();

const certifications = computed<CertificationsType[]>(
  () => storeCertifications.certifications,
);

const certificationsHome = computed<CertificationsType[]>(() => {
  return certifications.value.filter((e) => e.featured);
});

function selectedCertification(idSelect: number) {
  router.push({
    name: "CertificationDetail",
    params: { id: idSelect },
    query: {
      from: "/#certifications",
    },
  });
}

onMounted(() => {
  storeCertifications.fetchCertifications();
});
</script>