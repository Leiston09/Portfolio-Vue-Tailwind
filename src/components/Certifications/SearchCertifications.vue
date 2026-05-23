<template>
  <h1 class="titleViewAll">
    {{ $t("certifications.title") }}
  </h1>
  <div class="w-24 h-1 bg-[#38BDF8] mx-auto rounded-full"></div>

  <p class="text-gray-400 mt-2 text-center max-w-xl">
    {{ $t("certifications.subtitle") }}
  </p>

  <div class="flex flex-wrap justify-center items-center gap-3 mt-6">
    <input
      v-model="searchText"
      @input="$emit('searchCertifications', searchText)"
      type="text"
      :placeholder="$t('certifications.searchPlaceholder')"
      class="bg-[#0B1120] border border-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]"
    />

    <select
      v-model="selectedInstitution"
      @change="$emit('filterByInstitution', selectedInstitution)"
      class="bg-[#0B1120] border border-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]"
    >
      <option value="">{{ $t("certifications.filters.all") }}</option>
      <option
        v-for="institution in institutions"
        :key="institution"
        :value="institution"
      >
        {{ $t(`certifications.institutions.${institution}`) }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

type CertificationsType = {
  id: number;
  featured: boolean;
  key: string;
  institution: string;
  image: string;
  certificate: string;
  downloadable?: boolean;
};



const emit = defineEmits<{
  (e: "searchCertifications", value: string): void;
  (e: "filterByInstitution", value: string): void;
}>();

const searchText = ref<string>("");
const selectedInstitution = ref<string>("");

const props = defineProps<{
  certifications: CertificationsType[];
}>();

const institutions = computed<string[]>(() => {
  return [...new Set(props.certifications.map((i) => i.institution))];
});
</script>