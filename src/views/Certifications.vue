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

import { useI18n } from 'vue-i18n';


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
const route = useRoute();

const store = dataStoreCertification()

const certifications = computed<CertificationsType[]>(() => store.certifications);
const searchCertifications = ref("");
const selectedInstitution = ref("");

const { t, locale } = useI18n();


onMounted(() => {
  store.fetchCertifications();
});

function certificationsSearch(search : string) {
  searchCertifications.value = search;
}
function filterByInstitution(institution : string) {
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
      filterCertifications = filterCertifications.filter((c) => {
        const nameKey : string = `certifications.items.${c.key}.name`;
        const name : string = t(nameKey).toLowerCase();
        const searchLower = searchCertifications.value.toLowerCase();

        return name.includes(searchLower) 
      }
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
