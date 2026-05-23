<template>
  <div class=" text-white flex flex-col items-center gap-4 ">
    <h1 class="titleViewAll">
      {{ $t("curriculum.title") }}
    </h1>
    <div class="lineTitle"></div>
    <div class="grid md:grid-cols-2 gap-8 w-full max-w-7xl">
      <div
        v-for="curriculum in curriculums"
        :key="curriculum.id"
        class="bg-[#0F172A] rounded-2xl p-2 pb-5 flex flex-col items-center shadow-lg hover:scale-105 transition gap-2 ">
        <div class="w-full overflow-hidden rounded-xl h-60 2xl:h-90">
          <img
            :src="curriculum.image"
            :alt="curriculum.key"
            class="w-full object-cover"
          />
        </div>

        <h2 class="text-lg text-center font-semibold ">
          {{ $t(`curriculum.roles.${curriculum.key}`) }}
        </h2>
        <div v-if="curriculum.asset" class="w-1/2 flex justify-center">
            <a
              :href="curriculum.download"
              download
              class="buttonBlue"
            >
              {{ $t("curriculum.download") }}
            </a>               
       
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dataStoreCurriculum } from "@/stores/StateCurriculum";
import { computed, onMounted } from "vue";

type curriculumType = {
  id: number;
  asset: boolean;
  key: string;
  image: string;
  download: string;
};

const storeCurriculum = dataStoreCurriculum();

const curriculums = computed<curriculumType[]>(() => storeCurriculum.curriculum);

onMounted(() => {
  storeCurriculum.fetchCurriculum();
});
</script>
