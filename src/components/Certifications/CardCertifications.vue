<template>
  <div v-if="filterCertificationsUser.length === 0">
    <p class="text-gray-400 text-center mt-10 font-extrabold text-2xl">
      {{ $t("certifications.messages.noResults") }}
    </p>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
    <div v-for="certification in filterCertificationsUser" :key="certification.id" class="relative bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-celeste/10">
      
      <div :class="(!isLoggedIn && !certification.featured) ? 'blur-[2px] pointer-events-none select-none' : ''">
        <div class="relative w-full h-52 overflow-hidden">
          <img :src="certification.image" :alt="$t(`certifications.items.${certification.key}.name`)" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
          <div v-if="certification.featured" class="absolute top-4 right-4 z-10">
            <span class="star">
              {{ $t("global.featured") }}
            </span>
          </div>
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
        
        <div class="p-5 flex flex-col gap-3">
          <h2 class="text-white font-bold text-lg leading-tight group-hover:text-celeste transition-all duration-300">
            {{ $t(`certifications.items.${certification.key}.name`) }}
          </h2>
          <div class="flex items-center gap-2">
            <span class="text-celeste text-sm">●</span>
            <p class="text-gray-300 text-sm font-medium">
              {{ $t("certifications.institution") }}:
              <span class="text-white">
                {{ $t(`certifications.institutions.${certification.institution}`) }}
              </span>
            </p>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed text-justify">
            {{ $t(`certifications.items.${certification.key}.description`) }}
          </p>
          
          <div v-if="certification.downloadable" class="flex gap-3 mt-2">
            <button @click="$emit('validateCertificated', certification.id)" :disabled="!isLoggedIn && !certification.featured" class="buttonBlue w-full disabled:opacity-40 disabled:cursor-not-allowed">
              {{ $t("certifications.buttons.view") }}
            </button>
            
            <a v-if="isLoggedIn || certification.featured" :href="certification.certificate" download class="buttonDark w-full text-center">
              {{ $t("certifications.buttons.download") }}
            </a>
            <span v-else class="buttonDark w-full text-center opacity-40 cursor-not-allowed">
              {{ $t("certifications.buttons.download") }}
            </span>
          </div>
        </div>
      </div>

      <div v-if="!isLoggedIn && !certification.featured" class="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-3 backdrop-blur-[1px]">
        <div class="w-14 h-14 rounded-full border border-celeste/40 bg-celeste/10 flex items-center justify-center">
          🔒
        </div>
        <p class="text-white font-semibold text-center px-6 text-sm">
          {{ $t("certifications.messages.locked") }}
        </p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

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
  (e: "validateCertificated", value: number): void;
}>();

defineProps<{
  filterCertificationsUser: CertificationsType[];
  isLoggedIn: boolean;
}>();
</script>

<style scoped></style>