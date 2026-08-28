<template>
  <div v-if="!selectedCertification" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="text-center">
      <div class="w-12 h-12 border-4 border-white/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
      <p class="text-white font-medium">{{ $t("global.buttons.download") }}...</p>
    </div>
  </div>

  <div v-else class="relative w-full overflow-hidden">
    <div class="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
      <div class="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-border-light dark:border-border-secondary bg-bg-light-card/80 dark:bg-bg-secondary/60 shadow-xl group">
        <img
          :src="selectedCertification.image"
          :alt="$t(`certifications.items.${selectedCertification.key}.name`)"
          class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div class="w-full lg:w-1/2 flex flex-col justify-center">
        <div class="flex flex-col gap-4">
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-light-primary dark:text-text-primary tracking-tight">
            {{ $t(`certifications.items.${selectedCertification.key}.name`) }}
          </h1>

          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 border border-primary/30 text-primary uppercase tracking-wider">
              {{ $t("certifications.institution") }}
            </span>
            <span class="text-text-light-secondary dark:text-text-secondary font-medium text-sm sm:text-base">
             {{ $t(`certifications.institutions.${selectedCertification.institution}`) }}
            </span>
          </div>

          <p class="text-text-light-secondary dark:text-text-secondary text-justify text-sm sm:text-base leading-relaxed">
            {{ $t(`certifications.items.${selectedCertification.key}.descriptionDetail`) }}
          </p>

          <div class="flex items-center gap-4 pt-4 flex-wrap">
            <a
              v-if="selectedCertification.certificate"
              :href="selectedCertification.certificate"
              download
              class="px-6 py-3 rounded-xl bg-primary/20 text-primary font-bold text-sm border border-primary/30 shadow-lg shadow-primary/10 hover:bg-primary/30 hover:text-primary-dark hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2"
            >
              <i class="fas fa-download"></i>
              <span>{{ $t("global.buttons.download") }}</span>
            </a>

            <RouterLink
              :to="backRoute"
              class="px-6 py-3 rounded-xl bg-bg-light-card/80 dark:bg-bg-secondary/60 border border-border-light dark:border-border-secondary text-text-light-secondary dark:text-text-secondary font-bold text-sm hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              <i class="fas fa-arrow-left"></i>
              <span>{{ $t("global.labels.back") }}</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Certification } from "@/data/certifications";
import { getCertifications } from "@/service/api";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const certifications = ref<Certification[]>([]);

const selectedCertification = computed<Certification | null>(() => {
  const certificationKey = route.params.id as string;
  return certifications.value.find((c) => c.key === certificationKey) || null;
});

const backRoute = computed<string>(() => {
  return (route.query.from as string) || "/certifications";
});

onMounted(async () => {
  try {
    const data = await getCertifications();
    certifications.value = data;
  } catch (error) {
    console.error("Error al cargar las certificaciones:", error);
  }
});
</script>