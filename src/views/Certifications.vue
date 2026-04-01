<template>

  <div class="flex flex-col items-center mb-5 ">
    <SearchCertifications
      :certifications="certifications"
      @searchCertifications="certificationsSearch"
      @filterByInstitution="filterByInstitution"
    />

    <CardCertifications
      :filterCertificationsUser="filterCertificationsUser"
      @validateCertificated="selectedCertification"
    />


  </div>
</template>

<script setup>
import { getCertifications } from "@/service/api";
import { useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";

import SearchCertifications from "@/components/Certifications/SearchCertifications.vue";
import CardCertifications from "@/components/Certifications/CardCertifications.vue";

const router = useRouter();

const certifications = ref([]);
const searchCertifications = ref("");
const selectedInstitution = ref("");

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

onMounted(async () => {
  certifications.value = await getCertifications();
});


</script>

<style lang="scss" scoped></style>
