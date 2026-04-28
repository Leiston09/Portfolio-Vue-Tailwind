<template>
  <div class=" text-white flex flex-col items-center gap-4">
    <h1 class="text-3xl md:text-4xl font-bold uppercase">
      {{ $t("curriculum.title") }}
    </h1>
    <div class="grid md:grid-cols-2 gap-8 w-full max-w-7xl">
      <div
        v-for="curriculo in curriculum"
        :key="curriculo.id"
        class="bg-[#0F172A] rounded-2xl p-2 flex flex-col items-center shadow-lg hover:scale-105 transition gap-3"
      >
        <div class="w-full overflow-hidden rounded-xl h-60">
          <img
            :src="curriculo.image"
            :alt="curriculo.name"
            class="w-full object-cover"
          />
        </div>

        <h2 class="text-lg text-center font-semibold mb-4">
          {{ $t(`curriculum.${curriculo.name}.title`) }}
        </h2>

        <a
          :href="curriculo.download"
          download
          class="bg-blue-500 hover:bg-blue-700 px-6 py-2 mb-2 rounded-lg transition duration-200 text-white font-medium"
        >
          {{ $t("curriculum.download") }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { dataStoreCurriculum } from "@/stores/StateCurriculum";
import { computed, onMounted } from "vue";

const storeCurriculum = dataStoreCurriculum();

const curriculum = computed(() => storeCurriculum.curriculum);

onMounted(() => {
  storeCurriculum.fetchCurriculum();
});
</script>
