<template>
  <div
    class="flex flex-col justify-center w-full h-full space-y-6 sm:space-y-8"
  >
    <div class="space-y-7">
      <div class="flex items-center gap-2 sm:gap-3">
        <span class="w-6 sm:w-8 h-px bg-primary/80"></span>
        <span
          class="text-[10px] sm:text-sm text-primary font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em]"
          >{{ $t("home.hero.greeting") }}</span
        >
        <span
          class="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"
        ></span>
      </div>
      <h1
        class="text-4xl flex flex-col items-center lg:items-start sm:text-4xl lg:text-[3.5rem] font-black leading-[0.9] tracking-[0.005em] lg:tracking-[-0.01em]"
      >
        <span class="block text-text-light-primary dark:text-text-primary">{{
          profile?.firstName
        }}</span>
        <span
          class="block text-primary font-serif font-medium italic tracking-[0.007em] lg:tracking-[-0.01em]"
          >{{ profile?.lastName }}</span
        >
      </h1>
    </div>
    <div class="space-y-2 sm:space-y-3">
      <div class="flex flex-wrap items-center gap-2 sm:gap-3">
        <span
          class="text-lg sm:text-lg lg:text-xl text-text-light-secondary dark:text-text-primary font-serif font-light italic"
          >{{ $t("home.hero.role") }}</span
        >
        <span
          class="hidden sm:block w-px h-5 bg-border-light dark:bg-border-secondary"
        ></span>
        <span
          class="text-lg sm:text-lg lg:text-xl text-primary font-serif italic font-bold"
          >{{ $t("home.hero.subtitle") }}</span
        >
      </div>
      <div class="flex flex-wrap items-center gap-2 sm:gap-4">
        <span
          class="inline-flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] text-primary font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]"
        >
          <span
            class="w-1 h-1 rounded-full bg-green-500 animate-[ping_1.5s_cubic-bezier(0,0,0.5,1)_infinite]"
          ></span>
          {{ $t("home.status.available") }}
        </span>
        <span
          class="w-px h-3 sm:h-4 bg-border-light dark:bg-border-secondary"
        ></span>
        <span
          class="text-[9px] sm:text-[10px] text-text-light-secondary dark:text-text-secondary font-medium"
          >{{ $t("home.status.experience") }}</span
        >
      </div>
    </div>
    <div class="flex items-start gap-3 sm:gap-4">
      <div class="flex flex-col items-center gap-1">
        <span class="w-px h-10 sm:h-4 bg-primary/60"></span>
        <span
          class="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary/60"
        ></span>
        <span class="w-px h-15 sm:h-12 bg-primary/30"></span>
      </div>
      <p
        class="text-xs sm:text-[15px] text-text-light-secondary dark:text-text-secondary leading-6 sm:leading-7 text-justify"
      >
        {{ $t("home.about.part1") }}
        <span
          class="text-text-light-primary dark:text-text-primary/80 font-medium"
          >{{ $t("home.about.highlight1") }}</span
        >
        {{ $t("home.about.part2") }}
        <span
          class="text-text-light-primary dark:text-text-primary/80 font-medium"
          >{{ $t("home.about.highlight2") }}.</span
        >.
      </p>
    </div>
    <div
      class="flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-3"
    >
      <RouterLink
        :to="{ path: '/', hash: '#projects' }"
        class="group inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/10 text-primary font-bold text-xs sm:text-sm tracking-wide hover:from-primary/40 hover:to-secondary/20 hover:text-primary-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-primary/30"
      >
        {{ $t("home.buttons.projects") }}
      </RouterLink>
      <RouterLink
        :to="{ name: 'Resume' }"
        class="group relative inline-flex items-center px-4 sm:px-6 py-3 rounded-lg border border-border-light dark:border-border-secondary text-xs sm:text-sm font-medium text-text-light-secondary dark:text-text-secondary hover:border-primary/60 hover:text-primary hover:bg-primary/5 hover:shadow-md transition-all duration-300"
      >
        {{ $t("home.buttons.resume") }}
        <span
          class="absolute left-4 right-4 bottom-1.5 h-0.5 bg-primary scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300"
        ></span>
      </RouterLink>
      <RouterLink
        :to="{ path: '/', hash: '#contact' }"
        class="group relative inline-flex items-center px-4 sm:px-6 py-3 rounded-lg border border-border-light dark:border-border-secondary text-xs sm:text-sm font-medium text-text-light-secondary dark:text-text-secondary hover:border-primary/60 hover:text-primary hover:bg-primary/5 hover:shadow-md transition-all duration-300"
      >
        {{ $t("home.buttons.contact") }}
        <span
          class="absolute left-4 right-4 bottom-1.5 h-0.5 bg-primary scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300"
        ></span>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ProfileType, profile as profileData } from "@/data/profile";
import { getProfile } from "@/service/api";

const profile = ref<ProfileType | null>(null);

onMounted(async () => {
  try {
    const response = await getProfile();
    profile.value = response ?? profileData;
  } catch (error) {
    profile.value = profileData;
  }
});
</script>
