<template>
  <!-- Mensaje sin resultados -->
  <div v-if="filteredCertifications.length === 0">
    <p class="text-gray-400 text-center mt-10 font-extrabold text-2xl">
      {{ $t("certifications.messages.noResults") }}
    </p>
  </div>

  <!-- Grid de certificaciones -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
    <div
      v-for="certification in filteredCertifications"
      :key="certification.id"
      class="relative bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-celeste/10 flex flex-col h-full"
    >
      <!-- Contenido bloqueado (blur) -->
      <div
        :class="(!isLoggedIn && !certification.featured) ? 'blur-[2px] pointer-events-none select-none' : ''"
        class="flex flex-col h-full"
      >
        <!-- Imagen -->
        <div class="relative w-full h-52 overflow-hidden flex-shrink-0">
          <img
            :src="certification.image"
            :alt="$t(`certifications.items.${certification.key}.name`)"
            class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            loading="lazy"
          />

          <!-- Badge destacado -->
          <div v-if="certification.featured" class="absolute top-4 right-4 z-0">
            <span class="star">
              {{ $t("global.featured") }}
            </span>
          </div>

          <!-- Overlay oscuro al hover -->
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>

        <!-- Contenido -->
        <div class="p-5 flex flex-col flex-1">
          <!-- Título -->
          <h2 class="text-white font-bold text-lg leading-tight text-center  transition-all duration-300">
            {{ $t(`certifications.items.${certification.key}.name`) }}
          </h2>
          <div class="flex items-center justify-center">
            <p class="text-gray-300  text-sm font-medium underline">
              {{ $t("certifications.institution") }}:
              <span class="text-white">
                {{ certification.institution }}
              </span>
            </p>
          </div>

          <!-- Descripción -->
          <p class="text-gray-400 text-sm leading-relaxed text-justify mt-2 flex-1">
            {{ $t(`certifications.items.${certification.key}.description`) }}
          </p>

          <!-- Botones (siempre al final) -->
          <div v-if="certification.downloadable" class="flex flex-col sm:flex-row gap-3 mt-4 pt-3 border-t border-gray-800">
            <button
              @click="$emit('validateCertificated', certification.id)"
              :disabled="!isLoggedIn && !certification.featured"
              class="buttonBlue flex-1 disabled:opacity-40 disabled:cursor-not-allowed"
            >
                <i class="far fa-eye mr-2"></i>
              {{ $t("certifications.buttons.view") }}
            </button>

            <a
              v-if="isLoggedIn || certification.featured"
              :href="certification.certificate"
              download
              class="buttonDark flex-1 text-center"
            >
              {{ $t("certifications.buttons.download") }} 
              <i class="fas fa-download mr-2"></i>
            </a>

            <span
              v-else
              class="buttonDark flex-1 text-center opacity-40 cursor-not-allowed"
            >
              {{ $t("certifications.buttons.download") }} 
              <i class="fas fa-download mr-2"></i>
            </span>
          </div>
        </div>
      </div>

      <!-- Overlay de bloqueo (🔒) -->
      <div
        v-if="!isLoggedIn && !certification.featured"
        class="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-3 backdrop-blur-[1px]"
      >
        <div class="w-14 h-14 rounded-full border border-celeste/40 bg-celeste/10 flex items-center justify-center text-2xl">
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
import type { CertificationType } from "@/data/certifications";

defineProps<{
  filteredCertifications: CertificationType[];
  isLoggedIn: boolean;
}>();

defineEmits<{
  (e: "validateCertificated", value: number): void;
}>();
</script>
