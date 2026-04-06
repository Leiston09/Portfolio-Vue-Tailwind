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
      class="relative bg-[#0B1120] rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 group"
      :class="isLoggedIn ? 'hover:border-[#38BDF8] hover:shadow-lg hover:shadow-[#38BDF8]/10' : ''"
    >
      <!-- CONTENIDO (SE DESENFOCA SI NO ESTÁ LOGUEADO) -->
      <div :class="!isLoggedIn ? 'blur-[2px] pointer-events-none select-none' : ''">
        
        <div class="relative">
          <img
            :src="certification.image"
            class="w-full h-40 object-cover group-hover:scale-105 transition-all duration-300"
          />

          <!-- BOTONES HOVER DESKTOP -->
          <div
            class="hidden lg:flex md:opacity-0 md:group-hover:opacity-100 absolute inset-0 bg-black/50 items-center justify-center transition-all duration-300 gap-5"
          >
            <button
              @click="$emit('validateCertificated', certification.id)"
              :disabled="!isLoggedIn"
              class="bg-[#38BDF8] px-3 py-1 rounded-lg text-sm font-semibold hover:scale-105 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {{ $t("certifications.buttons.view") }}
            </button>

            <a
              v-if="isLoggedIn"
              :href="certification.pdf"
              download
              class="border border-white text-white px-3 py-1 rounded-lg text-sm hover:bg-white hover:text-black transition-colors"
            >
              {{ $t("certifications.buttons.download") }}
            </a>

            <span
              v-else
              class="border border-gray-500 text-gray-500 px-3 py-1 rounded-lg text-sm cursor-not-allowed"
            >
              {{ $t("certifications.buttons.download") }}
            </span>
          </div>
        </div>

        <!-- INFO -->
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

          <!-- BOTONES MOBILE -->
          <div class="lg:hidden flex justify-between items-center mt-2 gap-5">
            <button
              @click="$emit('validateCertificated', certification.id)"
              :disabled="!isLoggedIn"
              class="bg-[#38BDF8] px-3 py-1 rounded-lg text-xs font-semibold hover:scale-105 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {{ $t("certifications.buttons.view") }}
            </button>

            <a
              v-if="isLoggedIn"
              :href="certification.pdf"
              download
              class="border border-white text-white px-3 py-1 rounded-lg text-xs hover:bg-white transition hover:text-black"
            >
              {{ $t("certifications.buttons.download") }}
            </a>

            <span
              v-else
              class="border border-gray-500 text-gray-500 px-3 py-1 rounded-lg text-xs cursor-not-allowed"
            >
              {{ $t("certifications.buttons.download") }}
            </span>
          </div>
        </div>
      </div>

      <!-- CAPA DE BLOQUEO -->
      <div
        v-if="!isLoggedIn"
        class="absolute inset-0 bg-black/60 flex items-center justify-center "
      >
        <p class="text-white text-sm font-semibold text-center px-4">
          {{ $t("certifications.locked") }}
        </p>
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
  isLoggedIn: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
</style>