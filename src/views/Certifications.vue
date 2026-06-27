<template>
  <div class="flex flex-col items-center">
    <SearchCertifications
      :certifications="certifications"
      @searchCertifications="certificationsSearch"
      @filterByInstitution="filterByInstitution"
    />

    <CardCertifications
      :isLoggedIn="isLoggedIn"
      :filteredCertifications="filteredCertifications"
      @validateCertificated="selectedCertification"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";

import { CertificationType } from "@/data/certifications";

import SearchCertifications from "@/components/Certifications/SearchCertifications.vue";
import CardCertifications from "@/components/Certifications/CardCertifications.vue";
import { useCertificationsStore } from "@/stores/useCertificationsStore";
import { useUserStore } from "@/stores/useUserStore";

import { useI18n } from "vue-i18n";



const router = useRouter();
const route = useRoute();

const store = useCertificationsStore();

const certifications = computed<CertificationType[]>(
  () => store.certifications,
);
const searchCertifications = ref("");
const selectedInstitution = ref("");

const { t } = useI18n();

onMounted(() => {
  store.fetchCertifications();
});

function certificationsSearch(search: string) {
  searchCertifications.value = search;
}
function filterByInstitution(institution: string) {
  selectedInstitution.value = institution;
}

const filteredCertifications  = computed<CertificationType[]>(() => {
  let filterCertifications = certifications.value;

  if (selectedInstitution.value) {
    filterCertifications = filterCertifications.filter(
      (c) => c.institution === selectedInstitution.value,
    );
  }

  if (searchCertifications.value) {
    filterCertifications = filterCertifications.filter((c) => {
      const nameKey: string = `certifications.items.${c.key}.name`;
      const name: string = t(nameKey).toLowerCase();
      const searchLower = searchCertifications.value.toLowerCase();

      return name.includes(searchLower);
    });
  }
  return filterCertifications;
});

function selectedCertification(idSelect: number) {
  router.push({
    name: "CertificationDetail",
    params: { id: idSelect },
    query: {
      from: route.path,
    },
  });
}

const storeUser = useUserStore();
const isLoggedIn = computed(() => storeUser.authentication);
</script>

<style lang="scss" scoped></style>
