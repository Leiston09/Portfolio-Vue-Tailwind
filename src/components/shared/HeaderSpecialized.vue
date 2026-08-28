<template>
  <div class="relative text-center mb-5">

    <div class="flex items-center justify-center gap-3 mb-4">
      <span
        class="w-8 sm:w-12 h-px bg-primary/50"
      ></span>

      <span
        class="text-[10px] sm:text-xs text-primary font-semibold uppercase tracking-[0.3em]"
      >
        {{ data.tag }}
      </span>

      <span
        class="w-8 sm:w-12 h-px bg-primary/50"
      ></span>
    </div>

    <h1
      class="text-3xl sm:text-4xl lg:text-5xl font-black
             text-text-light-primary dark:text-text-primary
             tracking-tight leading-tight"
    >
      {{ data.title }}

      <span
        class="bg-gradient-to-r from-primary to-secondary
               bg-clip-text text-transparent"
      >
        {{ data.titleHighlight }}
      </span>
    </h1>

    <p
      v-if="data.description"
      class="mt-4 mx-auto max-w-2xl
             text-sm sm:text-base
             text-text-light-secondary dark:text-text-secondary
             leading-relaxed"
    >
      {{ data.description }}
    </p>

    <div
      class="mx-auto mt-6 w-16 h-1 rounded-full
             bg-gradient-to-r from-primary to-secondary"
    ></div>

  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    tag: string;
    title: string;
    titleHighlight: string;
    description?: string;
  };
}>();
</script>