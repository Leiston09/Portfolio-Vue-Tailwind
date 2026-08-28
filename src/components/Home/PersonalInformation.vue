<template>
  <SkeletonPersonalInformations v-if="isLoading" :count="1" />

  <div
    v-else-if="profile"
    class="relative w-full h-full rounded-2xl sm:rounded-3xl border border-primary/30 dark:border-primary/30 bg-surface/50 dark:bg-surface-dark/70 overflow-hidden hover:border-primary/50 transition-all duration-300"
  >
    <div
      class="absolute w-35 h-75 rounded-full bg-primary/15 blur-3xl pointer-events-none -top-24 -right-24 max-lg:top-auto max-lg:-bottom-24 max-lg:-right-24"
    ></div>

    <div
      class="absolute -bottom-32 -left-20 w-40 h-40 rounded-full bg-primary/15 blur-3xl pointer-events-none"
    ></div>

    <div
      class="absolute right-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/60 to-transparent"
    ></div>

    <div
      class="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
    ></div>

    <div class="relative h-full flex flex-col p-3 sm:p-4 gap-3 sm:gap-4">
      <div class="flex flex-col lg:flex-row items-center gap-4 sm:gap-5 h-full">
        <div
          class="relative w-full h-full sm:w-100 sm:h-70 md:w-80 md:h-70 lg:w-[175px] lg:h-[180px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 shrink-0 group"
        >
          <img
            :src="profile.image.profile"
            :alt="`${profile.firstName} ${profile.lastName}`"
            class="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent"
          ></div>
        </div>

        <div
          class="flex flex-col flex-1 justify-between h-full gap-4 sm:gap-5 w-full"
        >
          <div>
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
              <span
                class="text-[10px] sm:text-sm md:text-xs text-primary font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em]"
              >
                {{ $t('about.interests.title') }}
              </span>
            </div>

            <div class="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
              <span
                v-for="area in profile.areas"
                :key="area"
                class="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base md:text-sm text-text-light-primary dark:text-text-primary font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-primary shrink-0 sm:w-4 sm:h-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              {{ $t(`about.interests.${area}`) }}
              </span>
            </div>
          </div>

          <div class="flex justify-center lg:justify-start">
            <a
              :href="activeCurriculum?.download || '#'"
              download
              class="my-2 sm:my-4 lg:my-0 inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-primary/90 to-secondary-light/80 hover:from-primary hover:to-secondary/80 text-white font-bold text-xs sm:text-base md:text-sm hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 w-fit"
            >
              {{ $t('global.buttons.downloadCv') }}

              <svg
                class="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div>
        <WorkStyle :workStyle="profile.workStyle" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import WorkStyle from "./WorkStyle.vue";
import SkeletonPersonalInformations from "../ui/Skeleton/SkeletonPersonalInformations.vue";
import { ProfileType, profile as profileData } from '@/data/profile';
import { type curriculumType } from "@/data/curriculum";
import { getProfile, getCurriculum } from '@/service/api';

const isLoading = ref(true);
const profile = ref<ProfileType | null>(null);
const curriculums = ref<curriculumType[]>([]);

const activeCurriculum = computed<curriculumType | null>(() => {
  const filtered = curriculums.value.filter(
    (curriculum): curriculum is curriculumType =>
      !!curriculum && curriculum.asset === true,
  );
  return filtered.length > 0 ? filtered[0] : null;
});

onMounted(async () => {
  try {
    const [profileRes, curriculumRes] = await Promise.all([
      getProfile(),
      getCurriculum()
    ]);
    profile.value = profileRes ?? profileData;
    curriculums.value = curriculumRes;
  } catch (error) {
    profile.value = profileData;
  } finally {
    isLoading.value = false;
  }
});
</script>