<template>
  <div class="flex flex-col items-center">

    <h1 class="text-2xl md:text-4xl font-bold text-white">
      {{ $t("certifications.title") }}
    </h1>

    <p class="text-gray-400 mt-2 text-center max-w-xl">
      {{ $t("certifications.description") }}
    </p>

  
    <div class="flex flex-wrap justify-center items-center gap-3 mt-6">
      <input
        v-model="searchCertifications"
        type="text"
        :placeholder="$t('certifications.search')"
        class="bg-[#0B1120] border border-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]"
      />

      <select
        v-model="selectedInstitution"
        class="bg-[#0B1120] border border-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]"
      >
        <option value="">{{ $t("certifications.all") }}</option>
        <option
          v-for="institution in institutions"
          :key="institution"
          :value="institution"
        >
          {{ institution }}
        </option>
      </select>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-8"
    >
      <div
        v-for="certification in filterCertificationsUser"
        :key="certification.id"
        class="bg-[#0B1120] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#38BDF8] hover:shadow-lg hover:shadow-[#38BDF8]/10 transition-all duration-300 group"
      >
    
        <div class="relative">
          <img
            :src="certification.image"
            class="w-full h-40 object-cover group-hover:scale-105 transition-all duration-300"
          />

          
          <div
            class="hidden md:flex absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 items-center justify-center gap-3 transition-all duration-300"
          >
            <a
              :href="certification.image"
              target="_blank"
              class="bg-[#38BDF8] text-[#020617] px-3 py-1 rounded-lg text-sm font-semibold hover:scale-105 transition"
            >
              Ver
            </a>

            <a
              :href="certification.pdf"
              download
              class="border border-white text-white px-3 py-1 rounded-lg text-sm hover:bg-white hover:text-[#020617] transition"
            >
              Descargar
            </a>
          </div>
        </div>


        <div class="p-4 flex flex-col gap-2">
          <h2 class="font-bold text-white text-sm md:text-lg">
            {{ certification.name }}
          </h2>

          <p class="text-gray-400 text-xs">
            {{ certification.institution }}
          </p>

          <p class="text-gray-300 text-xs md:text-sm text-justify">
            {{ certification.description }}
          </p>
          <div class="flex md:hidden items-center justify-between px-2 gap-2">
            <a
              :href="certification.image"
              target="_blank"
              class="bg-[#38BDF8] text-[#020617] px-3 py-1 rounded-lg text-sm font-semibold hover:scale-105 transition"
            >
              Ver
            </a>

            <a
              :href="certification.pdf"
              download
              class="border border-white text-white px-3 py-1 rounded-lg text-sm hover:bg-white hover:text-[#020617] transition"
            >
              Descargar
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCertifications } from "@/service/api";
import { computed, onMounted, ref } from "vue";

const certifications = ref([]);
const searchCertifications = ref("");
const selectedInstitution = ref("");

const institutions = computed(() => {
  let uniqueInstitutions = [
    ...new Set(certifications.value.map((i) => i.institution)),
  ];
  return uniqueInstitutions;
});

const filterCertificationsUser = computed(() => {
  let filterCertifications = certifications.value;

  console.log("Selected Institution:", selectedInstitution.value);
  console.log("Search Term:", searchCertifications.value);
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

onMounted(async () => {
  certifications.value = await getCertifications();
});
</script>

<style lang="scss" scoped></style>
