<template>
  <h1 class="text-2xl md:text-4xl font-bold text-white">
    {{ $t("certifications.title") }}
  </h1>

  <p class="text-gray-400 mt-2 text-center max-w-xl">
    {{ $t("certifications.description") }}
  </p>

  <div class="flex flex-wrap justify-center items-center gap-3 mt-6">
    <input
      v-model="searchText"
      @input="$emit('searchCertifications', searchText)"
      type="text"
      :placeholder="$t('certifications.search')"
      class="bg-[#0B1120] border border-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]"
    />

    <select
      v-model="selectedInstitution"
      @change="$emit('filterByInstitution', selectedInstitution)"
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
</template>

<script setup>
import { computed, ref } from "vue";

const emit = defineEmits(["searchCertifications", "filterByInstitution"]);
const searchText = ref("");
const selectedInstitution = ref("");

const props = defineProps({
  certifications: {
    type: Array,
    required: true,
  },
});

const institutions = computed(() => {
  if (props.certifications) {
    let uniqueInstitutions = [
      ...new Set(props.certifications.map((i) => i.institution)),
    ];
    return uniqueInstitutions;

  }

  return [];
});
</script>

<style lang="scss" scoped></style>
