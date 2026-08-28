<template>
  <SkeletonTestimonial v-if="isLoading" :count="1" />

  <section
    v-else
    class="relative rounded-2xl border border-primary/30 dark:border-primary/30 bg-surface/50 dark:bg-surface-dark/70 p-3 md:p-7 lg:p-3 hover:border-primary/50 transition-all duration-300 overflow-hidden"
  >
    <div
      class="absolute -top-20 -right-20 w-50 h-50 rounded-full bg-primary/10 blur-2xl pointer-events-none"
    ></div>

    <div
      class="absolute -bottom-32 -left-10 w-24 h-50 rounded-full bg-primary/10 blur-3xl pointer-events-none"
    ></div>

    <div
      class="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
    ></div>

    <div class="relative flex flex-col md:flex-row md:items-stretch gap-5">
      <div class="flex-1 min-w-0 flex flex-col justify-center">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-1 h-4 rounded-full bg-primary"></div>

          <span
            class="text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]"
          >
            {{ $t("testimonials.sectionTitle") }}
          </span>
        </div>

        <div class="relative">
          <span
            class="absolute -top-3 -left-1 text-3xl sm:text-4xl leading-none text-primary/30 font-serif"
          >
            “
          </span>

          <p
            class="pl-4 text-xs leading-relaxed text-text-light-secondary dark:text-text-secondary line-clamp-5 text-justify"
          >
            {{ $t("testimonials.quote") }}
          </p>
        </div>
      </div>

      <div
        class="md:flex-1 min-w-0 flex flex-col items-center justify-center gap-2"
      >
        <button
          type="button"
          @click="showImage = true"
          class="relative w-full max-w-[280px] h-16 md:h-22 lg:h-30 rounded-xl border border-primary/25 bg-bg-light-card/80 dark:bg-bg-secondary/60 overflow-hidden group hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
        >
          <img
            :src="profile?.image.testimonials"
            :alt="$t('testimonials.actions.viewImage')"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div
            class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/90 text-white text-[10px] font-semibold shadow-lg"
            >
              <i class="far fa-eye"></i>
              {{ $t("testimonials.actions.viewImage") }}
            </span>
          </div>
        </button>

        <a
          :href="profile?.testimonials"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 w-full max-w-[280px] px-3 py-2 rounded-lg border border-primary/20 text-primary text-[10px] sm:text-xs font-semibold hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
        >
          <i class="fab fa-linkedin-in"></i>

          <span>
            {{ $t("testimonials.actions.viewLinkedin") }}
          </span>

          <i class="fas fa-arrow-up-right-from-square text-[9px]"></i>
        </a>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="showImage"
        class="fixed inset-0 z-[50] flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4"
        @click.self="showImage = false"
      >
        <div class="relative max-w-[95vw] max-h-[95vh]">
          <button
            type="button"
            @click="showImage = false"
            class="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-bg-light-card/95 dark:bg-bg-secondary/95 text-text-light-primary dark:text-text-primary flex items-center justify-center text-lg font-semibold shadow-lg hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
            aria-label="Cerrar imagen"
          >
            x
          </button>

          <img
            :src="profile?.image.testimonials"
            :alt="$t('testimonials.actions.viewImage')"
            class="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getProfile } from "@/service/api.js";
import { ProfileType, profile as profileData } from "@/data/profile";
import SkeletonTestimonial from "../ui/Skeleton/SkeletonTestimonial.vue";

const showImage = ref(false);

const isLoading = ref(true);
const profile = ref<ProfileType | null>(null);

onMounted(async () => {
  try {
    const response = await getProfile();
    profile.value = response ?? profileData;
  } catch (error) {
    profile.value = profileData;
  } finally {
    isLoading.value = false;
  }
});
</script>
