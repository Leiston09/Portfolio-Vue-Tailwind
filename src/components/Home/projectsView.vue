<template>
  <div class="flex justify-between items-center py-5">
    <h1 class="text-lg md:text-3xl font-bold text-white  ">
      {{ $t("projects.title") }}
    </h1>

    <button class="text-[#38BDF8] hover:underline bg-[#1E293B] px-2 rounded-lg shadow hover:shadow-cyan-500 hover:transition-all hover:duration-500 py-1" v-if="projects.length > 0">
      {{ $t("globalOptions.ViewAll") }}
    </button>
  </div>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="project in projects"
      :key="project.id"
      class="bg-[#111827] rounded-2xl overflow-hidden transition-all duration-300 border border-gray-800 group"
    >
      <div class="relative w-full h-48 overflow-hidden">
        <img
          :src="project.image"
          class="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
        />

        <div
          class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4"
        >
          <p class="text-gray-200 text-sm text-center">
            {{ $t(`projects.items.${project.key}.descriptionimg`) }}
          </p>
        </div>
      </div>

      <div class="p-4 flex flex-col gap-3">
        <h1 class="text-white font-bold text-lg">
          {{ $t(`projects.items.${project.key}.title`) }}
        </h1>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="text-xs bg-[#1E293B] text-gray-300 px-2 py-1 rounded-lg"
          >
            {{ tech }}
          </span>
        </div>

        <div>
          <p class="text-white">
            {{ $t(`projects.items.${project.key}.description`) }}
          </p>
        </div>

        <div class="flex gap-2 mt-2">
          <a
            :href="project.github"
            target="_blank"
            class="flex-1 text-center border border-gray-600 text-white rounded-lg py-1 hover:bg-[#1E293B] transition">
            GitHub
          </a>

          <a
            :href="project.demo"
            target="_blank"
            class="flex-1 text-center bg-[#38BDF8]  font-semibold rounded-lg py-1 hover:scale-105 transition">
            Demo
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getProjects } from "@/service/api";
import { onMounted, ref } from "vue";

const projects = ref([]);

onMounted(async () => {
  projects.value = await getProjects();
});
</script>
