<template>
  <div v-if="!certificatedNew" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="text-center">
      <div class="w-12 h-12 border-4 border-white/30 border-t-sky-400 rounded-full animate-spin mx-auto mb-4"></div>
      <p class="text-white font-medium">Cargando....</p>
    </div>
  </div>

  <div v-else class="fixed inset-0 bg-black/60 backdrop-blur-md z-50 overflow-y-auto">
    <div class="min-h-screen flex items-start sm:items-center justify-center p-2 sm:p-4">
      <div class="w-full max-w-7xl mx-auto my-4 sm:my-8 lg:my-0">
        <!-- Grid responsivo: 1 columna en móvil, 2 en desktop -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 bg-black/85 rounded-xl overflow-hidden shadow-2xl">
          
          <!-- Sección de imagen -->
          <div class="w-full flex justify-center items-center overflow-hidden bg-neutral-900">
            <img
              :src="certificatedNew.image"
              :alt="certificatedNew.name"
              class="w-full h-auto max-h-[60vh] sm:max-h-[70vh] lg:max-h-[80vh] object-contain"
              loading="lazy"
            />
          </div>

          <!-- Sección de contenido -->
          <div class="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
            <div class="flex flex-col gap-3 sm:gap-4">
              <!-- Título -->
              <h1 class="text-xl sm:text-2xl lg:text-4xl font-bold text-white text-center lg:text-left ">
                {{ certificatedNew.name }}
              </h1>

              <!-- Institución -->
              <p class="text-gray-400 text-center lg:text-left font-extrabold text-sm sm:text-base lg:text-xl">
                {{ certificatedNew.institution }}
              </p>

              <!-- Descripción principal -->
              <p class="text-emerald-500 text-justify lg:text-left font-mono text-xs sm:text-sm lg:text-base">
                {{ certificatedNew.description }}
              </p>

              <!-- Descripción detallada -->
              <p class="text-gray-300 text-justify lg:text-left text-sm sm:text-base lg:text-xl leading-relaxed">
                {{ $t(`certifications.items.${certificatedNew.key}.descriptionDetail`) }}
              </p>

              <!-- Botones -->
              <div class="flex gap-3 justify-center lg:justify-start mt-2 flex-wrap">
                <a
                  :href="certificatedNew.pdf"
                  download
                  class="bg-sky-400 hover:bg-sky-500 px-3 sm:px-4 py-2 rounded-lg font-semibold text-center transition-all hover:scale-105 text-white text-xs sm:text-sm"
                >
                  {{ $t("certifications.buttons.download") }}
                </a>

                <RouterLink
                  :to="{ name: 'Certifications' }"
                  class="border border-gray-400 hover:bg-gray-400 text-gray-400 hover:text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-center transition-all hover:scale-105 text-xs sm:text-sm"
                >
                  {{ $t("certifications.buttons.back") }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";

const emit = defineEmits(["notCertificated"]);

const props = defineProps({
  certificated: {
    type: Object,
    required: false,
    default: null,
  },
});

const certificatedNew = computed(() => props.certificated);

onMounted(() => {
  if (props.certificated) return;

  try {
    const data = JSON.parse(localStorage.getItem("certificationId"));

    if (data?.user && data?.id) {
      emit("notCertificated", data.id);
    }
  } catch (error) {
    console.error("Error leyendo localStorage", error);
  }
});

</script>

<style lang="scss" scoped></style>
