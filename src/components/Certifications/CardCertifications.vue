<template>
  <div v-if="filterCertificationsUser.length === 0">
    <p class="text-gray-400 text-center mt-10 font-extrabold text-2xl">
       {{ $t("certifications.noResults") }}
    </p>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-8">
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
          class="hidden lg:flex md:opacity-0 md:group-hover:opacity-100 absolute inset-0 bg-black/50 items-center justify-center transition-all duration-300 gap-5"
        >
          <button
            @click="$emit('validateCertificated', certification.id)"
            class="bg-[#38BDF8] px-3 py-1 rounded-lg text-sm font-semibold hover:scale-105 transition"
          >
            {{ $t("certifications.buttons.view") }}
          </button>

          <a
            :href="certification.pdf"
            download
            class="border border-white text-white px-3 py-1 rounded-lg text-sm hover:bg-white transition"
          >
            {{ $t("certifications.buttons.download") }}
          </a>
        </div>
      </div>

      <div class="p-4 flex flex-col gap-2">
        <h2 class="font-bold text-white text-sm md:text-lg">
          {{ $t(`certifications.items.${certification.key}.name`) }}
        </h2>

        <p class="text-gray-400 text-xs">
          {{ certification.institution }}
        </p>

        <p class="text-gray-300 text-xs md:text-sm text-justify">
          {{ $t(`certifications.items.${certification.key}.description`) }}
        </p>

        <div class="lg:hidden flex justify-between items-center mt-2 gap-5"> 
            <button
            @click="$emit('validateCertificated', certification.id)"
              class="bg-[#38BDF8] px-3 py-1 rounded-lg text-xs font-semibold hover:scale-105 transition">
              {{ $t("certifications.buttons.view") }}
            </button>

          <a
            :href="certification.pdf"
            download
            class="border border-white text-white px-3 py-1 rounded-lg text-xs hover:bg-white transition"
          >
            {{ $t("certifications.buttons.download") }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const emit = defineEmits(["validateCertificated"]);

const props = defineProps({
  filterCertificationsUser: {
    type: Array,
    required: true,
  },
});


</script>

<style lang="scss" scoped></style>
