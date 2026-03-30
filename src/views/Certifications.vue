<template>
  <header>
    <OptionsBar />
  </header>
  <div class="flex flex-col items-center mb-5 mt-20">
    <SearchCertifications
      :certifications="certifications"
      @searchCertifications="certificationsSearch"
      @filterByInstitution="filterByInstitution"
    />

    <CardCertifications
      :filterCertificationsUser="filterCertificationsUser"
      @validateCertificated="validateCertificated"
    />

    <RouterView
      :certificated="certificated"
      @notCertificated="notNewCertificated"
    />
  </div>
  <div class="fixed bottom-10 right-5 lg:bottom-5 lg:right-10">
    <ChatBot />
  </div>
</template>

<script setup>
import { getCertifications } from "@/service/api";
import { useRouter } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";
import SearchCertifications from "@/components/Certifications/SearchCertifications.vue";
import CardCertifications from "@/components/Certifications/CardCertifications.vue";
import { useRoute } from "vue-router";
import OptionsBar from "@/components/static/OptionsBar.vue";
import ChatBot from "@/components/static/ChatBot.vue";
const route = useRoute();
const router = useRouter();

const certifications = ref([]);
const searchCertifications = ref("");
const selectedInstitution = ref("");
const certificated = ref(null);
const notCertificated = ref(null);

function certificationsSearch(search) {
  searchCertifications.value = search;
}
function filterByInstitution(institution) {
  selectedInstitution.value = institution;
}
function notNewCertificated(id) {
  notCertificated.value = id;
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

function validateCertificated(ids) {
  let validate = {
    id: ids,
    user: true,
  };

  localStorage.setItem("certificationId", JSON.stringify(validate));

  certificated.value = certifications.value.find((c) => c.id === ids);

  router.push({
    name: "CertificationDetail",
    params: { id: ids },
  });
}

onMounted(async () => {
  certifications.value = await getCertifications();
});

watch([certifications, notCertificated], () => {
  if (!certifications.value.length || !notCertificated.value) return;

  certificated.value = certifications.value.find(
    (c) => c.id === notCertificated.value,
  );
});
</script>

<style lang="scss" scoped></style>
