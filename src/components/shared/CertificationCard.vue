<template>
  <article
    class="group relative flex flex-col h-full min-h-[450px] overflow-hidden rounded-2xl border border-primary/20 bg-surface/50 dark:bg-surface-dark/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
  >
    <div
      class="absolute w-45 h-85 rounded-full bg-primary/10 dark:bg-primary/15 blur-3xl pointer-events-none -top-24 -right-24"
    ></div>

    <div
      class="absolute -bottom-32 -left-20 w-40 h-40 rounded-full bg-primary/10 dark:bg-primary/15 blur-3xl pointer-events-none"
    ></div>

    <div
      class="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
    ></div>

    <div class="relative h-48 sm:h-52 shrink-0 overflow-hidden">
      <img
        :src="certification.image"
        :alt="$t(`certifications.items.${certification.key}.name`)"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-bg-primary/70 via-bg-primary/10 to-transparent"
      ></div>

      <div
        v-if="certification.featured"
        class="absolute top-3 right-3"
      >
        <span
          class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/90 text-white text-[10px] font-semibold backdrop-blur-md"
        >
          <i class="fas fa-star text-[9px]"></i>
          {{ $t("global.labels.featured") }}
        </span>
      </div>

      <div class="absolute bottom-3 left-3">
        <span
          class="inline-flex items-center px-2.5 py-1 rounded-lg bg-black/45 text-white text-[10px] font-semibold backdrop-blur-md"
        >
          {{ $t(`certifications.institutions.${certification.institution}`) }}
        </span>
      </div>
    </div>

    <div class="relative z-10 flex flex-col flex-1 p-5">
      <h3
        class="text-base sm:text-lg font-bold text-text-light-primary dark:text-text-primary tracking-tight min-h-[48px]"
      >
        {{ $t(`certifications.items.${certification.key}.name`) }}
      </h3>

      <p
        class="mt-3 text-xs sm:text-sm leading-relaxed text-text-light-secondary dark:text-text-secondary line-clamp-3 flex-1"
      >
        {{ $t(`certifications.items.${certification.key}.description`) }}
      </p>

      <div
        class="grid gap-2 mt-5 pt-4 border-t border-primary/15 dark:border-primary/20"
        :class="certification.certificate ? 'grid-cols-2' : 'grid-cols-1'"
      >
        <button
          type="button"
          @click="$emit('view', certification.key)"
          class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-primary/20 py-2 text-[10px] sm:text-xs font-semibold text-text-light-secondary dark:text-text-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
        >
          <i class="far fa-eye"></i>
          {{ $t("global.buttons.details") }}
        </button>

        <a
          v-if="certification.certificate"
          :href="certification.certificate"
          download
          class="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary py-2 text-[10px] sm:text-xs font-semibold text-white hover:bg-primary-dark transition-all duration-300"
        >
          <i class="fas fa-download"></i>
          {{ $t("global.buttons.download") }}
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Certification } from "@/data/certifications";

defineProps<{
  certification: Certification;
}>();

defineEmits<{
  (event: "view", key: string): void;
}>();
</script>