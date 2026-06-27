<template>
  <div class=" text-white flex flex-col items-center gap-4 ">
    <h1 class="titleViewAll">
      {{ $t("curriculum.title") }}
    </h1>
    <div class="lineTitle"></div>
    <div class="flex flex-col max-w-6xl pb-5 gap-5">
      <div
        v-for="curriculum in curriculums"
        :key="curriculum.id">
        <div v-if="curriculum.asset" class="bg-[#0F172A] rounded-2xl p-2 pb-5 flex flex-col items-center shadow-lg hover:scale-101 transition gap-2 ">
            <div class="w-full h-full overflow-hidden rounded-xl">
            <img
              :src="curriculum.image"
              :alt="curriculum.key"
              class="w-full h-full object-cover"
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
  </div>
</template>

<script setup lang="ts">
import { useCurriculumStore } from "@/stores/useCurriculumStore";
import { computed, onMounted } from "vue";
import { curriculumType } from "@/data/curriculum";

const storeCurriculum = useCurriculumStore();

const curriculums = computed<curriculumType[]>(() => storeCurriculum.curriculum);

onMounted(() => {
  storeCurriculum.fetchCurriculum();
});
</script>
