<template>
  <div
    class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-5"
  >
    <div class="space-y-3 max-w-2xl">
      <div class="flex items-center gap-3">
        <span
        class="text-[10px] sm:text-xs text-primary font-light uppercase tracking-[0.3em] sm:tracking-[0.4em]"
        >
          {{ data.tag }} 
        </span>
      </div>

      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-black text-text-light-primary dark:text-text-primary tracking-tight leading-tight"
      >
        {{ data.title }}
        <span
          class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          {{ data.titleHighlight }}
        </span>
      </h2>

      <p
        class="text-sm sm:text-base text-text-light-secondary dark:text-text-secondary leading-relaxed"
      >
        {{ data.description }}
      </p>
    </div>

    <div class="flex items-center gap-4 flex-shrink-0">
      <RouterLink
        v-if="data.link"
        :to="data.link"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <span>{{ data.button }}</span>
        <span
          class="transition-transform duration-300 group-hover:translate-x-1"
          >→</span
        >
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    tag: string;
    title: string;
    titleHighlight: string;
    description?: string;
    link?: string;
    button?: string
  };
}>();
</script>
