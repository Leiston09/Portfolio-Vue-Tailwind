<template>
  <div class="flex flex-col items-center ">
    <SearchCertifications
      :certifications="certifications"
      @searchCertifications="certificationsSearch"
      @filterByInstitution="filterByInstitution"
    />

    <CardCertifications
      :isLoggedIn="isLoggedIn"
      :filterCertificationsUser="filterCertificationsUser"
      @validateCertificated="selectedCertification"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";

import SearchCertifications from "@/components/Certifications/SearchCertifications.vue";
import CardCertifications from "@/components/Certifications/CardCertifications.vue";
import { dataStoreCertification } from "@/stores/StoreCertifications";
import { dataStoreUser } from "@/stores/User";


type CertificationsType =   {
    id: number,
    special: boolean,
    key: string,
    name: string,
    institution: string,
    image: string,
    pdf: string,
}


const router = useRouter();
const route = useRoute();

const store = dataStoreCertification()

const certifications = computed<CertificationsType[]>(() => store.certifications);
const searchCertifications = ref("");
const selectedInstitution = ref("");

onMounted(() => {
  store.fetchCertifications();
});

function certificationsSearch(search) {
  searchCertifications.value = search;
}
function filterByInstitution(institution) {
  selectedInstitution.value = institution;
}

const filterCertificationsUser = computed<CertificationsType[]>(() => {
  let filterCertifications = certifications.value;

    if (selectedInstitution.value) {
      filterCertifications = filterCertifications.filter(
        (c) => c.institution === selectedInstitution.value,
      );
    }

    if (searchCertifications.value) {
      filterCertifications = filterCertifications.filter((c) =>
        c.name.toLowerCase().includes(searchCertifications.value.toLowerCase()),
      );
    }
    return filterCertifications;
});

function selectedCertification(idSelect : number) {
  router.push({
    name: "CertificationDetail",
    params: { id: idSelect },
    query: {
      from: route.fullPath,
    },
  });
}


const storeUser = dataStoreUser();
const isLoggedIn = computed(() => storeUser.authentication);

</script>

<style lang="scss" scoped></style>
