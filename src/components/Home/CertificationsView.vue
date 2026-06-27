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
          <i class="fas fa-arrow-right ml-2"></i>

        </RouterLink>
      </div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
      <div
        v-for="certification in certificationsHome"
        :key="certification.id"
        class="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
      >        
        <div class="relative w-full h-52 overflow-hidden ">
            <img :src="certification.image" :alt="$t(`certifications.items.${certification.key}.name`)" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
        <div class="absolute top-4 right-4  ">
  
            <span class="star">
              {{ $t("global.featured") }}
            </span>
          </div>
        </div>
        <div class="p-3 flex flex-col gap-2 flex-1">
          <h2 class="text-white font-bold text-lg leading-tight text-center  transition-all duration-300">
            {{ $t(`certifications.items.${certification.key}.name`) }}
          </h2>
          <div class="flex items-center justify-center">
            <p class="text-gray-300  text-sm font-medium underline">
              {{ $t("certifications.institution") }}:
              <span class="text-white">
                {{ certification.institution }}
              </span>
            </p>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed text-justify">
            {{ $t(`certifications.items.${certification.key}.description`) }}
          </p>
          <div class="flex  gap-2 mt-auto pt-2">
            <button @click="selectedCertification(certification.id)" class="buttonBlue w-full">
              <i class="far fa-eye mr-2"></i>
              {{ $t("certifications.buttons.view") }}
            </button>
            <a :href="certification.certificate" download class="buttonDark w-full text-center">
              {{ $t("certifications.buttons.download") }} 
              <i class="fas fa-download mr-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CertificationType } from "../../data/certifications";
import { useCertificationsStore } from "@/stores/useCertificationsStore";
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();
const storeCertifications = useCertificationsStore();

const certifications = computed<CertificationType[]>(
  () => storeCertifications.certifications,
);

const certificationsHome = computed<CertificationType[]>(() => {
    let certificationsFeatured = certifications.value.filter((e) => e.featured)
    return certificationsFeatured.slice(0,3)  
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