<template>
  <div class="flex flex-col items-center pb-10">
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

<script setup>
import { useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";

import SearchCertifications from "@/components/Certifications/SearchCertifications.vue";
import CardCertifications from "@/components/Certifications/CardCertifications.vue";
import { dataStoreCertification } from "@/stores/StoreCertifications";
import { dataStoreUser } from "@/stores/User";


const router = useRouter();
const store = dataStoreCertification()

const certifications = computed(() => store.Certifications);
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

const filterCertificationsUser = computed(() => {
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

function selectedCertification(ids) {
  let validate = {
    id: ids,
    user: true,
  };

  localStorage.setItem("certificationId", JSON.stringify(validate));

  router.push({
    name: "CertificationDetail",
    params: { id: ids },
  });
}


const storeUser = dataStoreUser();
const isLoggedIn = computed(() => storeUser.authentication);

</script>

<style lang="scss" scoped></style>
