<template>
  <section>
    <Header
      :data="{
        tag: $t('experience.tag'),
        title: $t('experience.title'),
        titleHighlight: $t('experience.titleHighlight'),
      }"
    />

    <SkeletonExperience v-if="isLoading" :count="3" />

    <div v-else class="relative">
      <div
        class="absolute left-3 top-3 bottom-3 w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent"
      ></div>

      <div
        v-for="(exp, index) in experiences"
        :key="exp.key || index"
        class="relative pl-9 sm:pl-10 pb-6 last:pb-0 group"
      >
        <div
          class="absolute left-0.5 top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-primary/40 bg-bg-light-card/80 dark:bg-bg-secondary/60 flex items-center justify-center group-hover:border-primary/80 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300"
        >
          <span
            class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary group-hover:shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-all duration-300"
          ></span>
        </div>

        <div
          class="relative rounded-xl border border-primary/30 dark:border-primary/30 bg-surface/50 dark:bg-surface-dark/70 p-3 sm:p-4 hover:border-primary/60 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
        >
          <div
            class="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/5 blur-2xl pointer-events-none group-hover:bg-primary/10 transition-all duration-700"
          ></div>

          <div
            class="relative z-10 shrink-0 w-full h-36 sm:w-24 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 rounded-xl overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/15 hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            <img
              :src="exp.image"
              :alt="$t(`experience.jobs.${exp.key}.role`)"
              class="w-full h-full object-cover object-center"
            />
          </div>

          <div class="relative z-10 flex-1 min-w-0">
            <div class="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
              <h3
                class="text-sm sm:text-base lg:text-lg font-bold text-text-light-primary dark:text-text-primary tracking-tight"
              >
                {{ $t(`experience.jobs.${exp.key}.role`) }}
              </h3>

              <span
                class="text-[8px] sm:text-[9px] lg:text-[10px] bg-primary/10 text-primary px-1.5 sm:px-2 py-0.5 rounded-full font-medium tracking-wide whitespace-nowrap border border-primary/20"
              >
                {{ exp.period }}
                {{ exp.status ? `- ${$t("experience.status")}` : "" }}
              </span>
            </div>

            <p
              class="text-[11px] sm:text-xs text-text-light-secondary dark:text-text-secondary font-medium tracking-wide"
            >
              {{ $t(`experience.jobs.${exp.key}.client`) }}
            </p>

            <p
              class="text-[11px] sm:text-xs text-text-light-secondary dark:text-text-secondary leading-relaxed mt-1.5 sm:mt-2"
            >
              {{ $t(`experience.jobs.${exp.key}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Header from "../shared/Header.vue";
import SkeletonExperience from "../ui/Skeleton/SkeletonExperience.vue";
import type { TypeExperience } from "@/data/experiences";
import { getExperience } from "@/service/api.js";

const isLoading = ref(true);
const experiences = ref<TypeExperience[]>([]);

onMounted(async () => {
  try {
    const allExperience = await getExperience();
    experiences.value = Array.isArray(allExperience) ? allExperience : [];
  } finally {
    isLoading.value = false;
  }
});
</script>
