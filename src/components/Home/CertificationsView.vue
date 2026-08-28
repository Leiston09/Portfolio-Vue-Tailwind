<template>
  <section class="relative">
    <Header
      :data="{
        tag: $t('certifications.tag'),
        title: $t('certifications.title'),
        titleHighlight: $t('certifications.titleHighlight'),
        description: $t('certifications.description'),
        link: '/certifications',
        button: $t('certifications.viewAll'),
      }"
    />

    <SkeletonCertifications v-if="isLoading" :count="3" />

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch"
    >
      <CertificationCard
        v-for="certification in certificationsHome"
        :key="certification.key"
        :certification="certification"
        @view="selectedCertification"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import type { Certification } from "@/data/certifications";
import { getCertifications } from "@/service/api";
import CertificationCard from "@/components/shared/CertificationCard.vue";
import Header from "../shared/Header.vue";
import SkeletonCertifications from "../ui/Skeleton/SkeletonCertifications.vue";

const router = useRouter();

const isLoading = ref(true);

const certifications = ref<Certification[]>([]);

const certificationsHome = computed(() =>
  certifications.value
    .filter((certification) => certification.featured)
    .slice(0, 3),
);

function selectedCertification(idSelect: string) {
  router.push({
    name: "CertificationDetail",
    params: {
      id: idSelect,
    },
    query: {
      from: "/#certifications",
    },
  });
}

onMounted(async () => {
  try {
    const data = await getCertifications();

    certifications.value = Array.isArray(data) ? data : [];
  } finally {
    isLoading.value = false;
  }
});
</script>
