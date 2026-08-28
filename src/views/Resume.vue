<template>
  <div
    class="w-full flex flex-col items-center gap-6 text-text-light-primary dark:text-text-primary"
  >
    <div class="flex flex-col items-center gap-3">
      <h1
        class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-text-light-primary dark:text-text-primary tracking-tight text-center"
      >
        {{ $t("resume.title") }}
      </h1>
      <div class="w-16 h-1 bg-primary/60 rounded-full"></div>
    </div>

    <div
      v-if="!loading && activeCurriculum"
      class="w-full max-w-4xl flex justify-center pb-5"
    >
      <article
        class="group relative w-full overflow-hidden rounded-2xl border border-border-light dark:border-border-secondary bg-bg-light-card/80 dark:bg-bg-secondary/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
      >
        <div
          class="absolute w-40 h-40 rounded-full bg-primary/10 blur-3xl pointer-events-none -top-20 -right-20"
        ></div>
        <div
          class="absolute -bottom-24 -left-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl pointer-events-none"
        ></div>
        <div
          class="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        ></div>

        <div class="relative z-10 flex flex-col items-center gap-4 p-4 sm:p-6">
          <div class="w-full flex flex-col gap-4">
            <div
              v-for="(imgSrc, index) in normalizedImages"
              :key="index"
              class="relative w-full rounded-xl overflow-hidden border border-primary/20 bg-black/10 dark:bg-black/20"
            >
              <img
                :src="imgSrc"
                :alt="`${$t(`resume.roles.${activeCurriculum.key}`)} - ${index + 1}`"
                class="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                loading="lazy"
              />
              <div
                class="absolute inset-0 pointer-events-none bg-gradient-to-t from-bg-primary/10 via-transparent to-transparent"
              ></div>
            </div>
          </div>

          <div class="w-full flex flex-col items-center gap-4">
            <div class="flex flex-col items-center gap-2">
              <span
                class="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold"
              >
                {{ $t("resume.title") }}
              </span>
              <h2 class="text-lg sm:text-xl font-semibold text-center">
                {{ $t(`resume.roles.${activeCurriculum.key}`) }}
              </h2>
            </div>
            <div
              class="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            ></div>
            <a
              :href="activeCurriculum.download"
              download
              class="inline-flex items-center justify-center gap-2 w-full max-w-xs px-5 py-3 rounded-xl bg-primary/20 text-primary text-sm font-semibold border border-primary/30 hover:bg-primary/30 hover:text-primary-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <i class="fas fa-download text-xs"></i>
              {{ $t("global.buttons.downloadCv") }}
            </a>
          </div>
        </div>
      </article>
    </div>

    <div
      v-else-if="loading"
      class="w-full flex justify-center py-10 text-sm text-text-light-secondary dark:text-text-secondary"
    >
      {{ $t("resume.loading") }}
    </div>

    <div
      v-else
      class="w-full flex justify-center py-10 text-sm text-text-light-secondary dark:text-text-secondary"
    >
      {{ $t("resume.empty") || "No curriculum available" }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import type { curriculumType } from "@/data/curriculum";
import { getCurriculum } from "@/service/api";

const curriculums = ref<curriculumType[]>([]);
const loading = ref<boolean>(true);

const fetchCurriculums = async () => {
  try {
    loading.value = true;
    const data = await getCurriculum();
    curriculums.value = data;
  } catch (error) {
    console.error("Error fetching curriculum:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchCurriculums();
});

const filteredCurriculums = computed<curriculumType[]>(() => {
  return curriculums.value.filter(
    (curriculum): curriculum is curriculumType =>
      !!curriculum && curriculum.asset === true,
  );
});

const activeCurriculum = computed<curriculumType | null>(() => {
  return filteredCurriculums.value.length > 0 ? filteredCurriculums.value[0] : null;
});

const normalizedImages = computed<string[]>(() => {
  if (!activeCurriculum.value || !activeCurriculum.value.image) return [];
  if (Array.isArray(activeCurriculum.value.image)) {
    return activeCurriculum.value.image;
  }
  return [activeCurriculum.value.image];
});
</script>