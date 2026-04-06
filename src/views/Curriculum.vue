<template>

  <div class=" text-white flex flex-col items-center pb-20">
    <h1 class="text-3xl md:text-4xl font-bold mb-5">
      {{ $t("curriculum.title") }}
    </h1>
    <div class="grid md:grid-cols-2 gap-5 w-full max-w-4xl">
      <div
        v-for="curriculo in curriculum"
        :key="curriculo.id"
        class="bg-[#0F172A] rounded-2xl p-2 flex flex-col items-center shadow-lg hover:scale-105 transition"
      >
        <div class="w-full h-48 overflow-hidden rounded-xl mb-4">
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
          class="bg-green-600 hover:bg-green-700 px-6 py-2 mb-2 rounded-lg transition"
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
