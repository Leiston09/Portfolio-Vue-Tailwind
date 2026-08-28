<template>
  <div class="flex flex-col items-center w-full">
    <HeaderSpecialized
      :data="{
        tag: $t('certifications.subtitle.tag'),
        title: $t('certifications.subtitle.title'),
        titleHighlight: $t('certifications.subtitle.titleHighlight'),
        description: $t('certifications.description'),
      }"
    />

    <div class="w-full max-w-xl mx-auto flex flex-col items-center">
      <CertificationFilters
        :certifications="certifications"
        @search="handleSearch"
        @filterInstitution="handleInstitutionFilter"
        @filterFeatured="handleFeaturedFilter"
      />
    </div>

    <div
      class="w-full flex flex-col my-5 sm:flex-row items-center justify-between gap-3 px-1"
    >
      <div class="flex items-center gap-3">
        <div
          class="w-1 h-8 rounded-full bg-gradient-to-b from-primary via-primary/70 to-transparent"
        ></div>

        <div class="flex flex-col">
          <span
            class="text-[10px] uppercase tracking-[0.22em] font-semibold text-primary"
          >
            {{ $t("certifications.results") }}
          </span>

          <span
            class="text-sm sm:text-base font-semibold text-text-light-primary dark:text-text-primary"
          >
            {{
              filteredCertifications.length === certifications.length
                ? $t("certifications.allCertifications")
                : $t("certifications.certificationsfound")
            }}
          </span>
        </div>
      </div>

      <div
        class="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-primary/25 bg-surface/50 dark:bg-surface-dark/70 backdrop-blur-sm"
      >
        <span
          class="flex items-center justify-center min-w-7 h-7 px-2 rounded-lg bg-primary/10 text-primary text-sm font-bold"
        >
          {{ filteredCertifications.length }}
        </span>

        <span
          class="text-xs font-medium text-text-light-secondary dark:text-text-secondary"
        >
          {{
            filteredCertifications.length === 1
              ? $t("certifications.certificationCount")
              : $t("certifications.certificationsCount")
          }}
        </span>
      </div>
    </div>

    <div
      class="relative w-full mb-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
    >
      <span
        class="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full bg-primary/70 shadow-[0_0_10px_rgba(50,101,134,0.45)]"
      ></span>
    </div>

    <div
      v-if="filteredCertifications.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
    >
      <CertificationCard
        v-for="certification in filteredCertifications"
        :key="certification.key"
        :certification="certification"
        @view="selectedCertification"
      />
    </div>

    <div v-else class="w-full">
      <CertificationEmptyState />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import type { Certification } from "@/data/certifications";

import HeaderSpecialized from "@/components/shared/HeaderSpecialized.vue";
import CertificationFilters from "@/components/Certifications/CertificationFilters.vue";
import CertificationCard from "@/components/shared/CertificationCard.vue";
import CertificationEmptyState from "@/components/Certifications/CertificationEmptyState.vue";

import { getCertifications } from "@/service/api";
import { useRouter } from "vue-router";

const certifications = ref<Certification[]>([]);

const searchText = ref("");
const selectedInstitution = ref("");
const showFeaturedOnly = ref(false);
const router = useRouter();

const filteredCertifications = computed(() => {
  let result = certifications.value;

  if (selectedInstitution.value) {
    result = result.filter(
      (certification) =>
        certification.institution === selectedInstitution.value,
    );
  }

  if (showFeaturedOnly.value) {
    result = result.filter((certification) => certification.featured);
  }

  if (searchText.value.trim()) {
    const search = searchText.value.toLowerCase().trim();

    result = result.filter((certification) =>
      certification.key.toLowerCase().includes(search),
    );
  }

  return result;
});

function handleSearch(value: string) {
  searchText.value = value;
}

function handleInstitutionFilter(value: string) {
  selectedInstitution.value = value;
}

function handleFeaturedFilter(value: boolean) {
  showFeaturedOnly.value = value;
}

function selectedCertification(idSelect: string) {
  router.push({
    name: "CertificationDetail",
    params: {
      id: idSelect,
    },
    query: {
      from: "/certifications",
    },
  });
}
onMounted(async () => {
  certifications.value = await getCertifications();
});
</script>
