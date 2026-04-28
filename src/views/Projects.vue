<template>
  <div class="container mx-auto">
    <div class="text-center mb-10">
      <h2
        class="titleViewAll"
      >
        {{ $t("projects.titleInterno") }}
      </h2>
      <div class="w-24 h-1 bg-[#38BDF8] mx-auto rounded-full"></div>
      <p class="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
        {{ $t("projects.projectIntro") }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projectsList"
        :key="project.id"
        class="group"
      >
        <!-- Imagen con overlay -->
        <div class="relative overflow-hidden rounded-t-2xl">
          <img
            :src="project.image"
            :alt="$t(`projects.items.${project.key}.title`)"
            class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <!-- Overlay con año -->
          <div
            class="absolute top-4 right-4 bg-[#38BDF8] text-gray-900 px-3 py-1 rounded-full text-sm font-bold"
          >
            {{ project.year }}
          </div>
          <div
            class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
          >
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
            </a>
            <a
              :href="project.demo"
              target="_blank"
              class="bg-[#38BDF8] hover:bg-[#38BDF8]/50 text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Contenido de la card -->
        <div
          class="bg-gray-800/50 backdrop-blur-sm p-6 rounded-b-2xl border-t border-gray-700"
        >
          <h3 class="text-xl font-bold text-white mb-2 line-clamp-2">
            {{ $t(`projects.items.${project.key}.title`) }}
          </h3>

          <p class="text-gray-300 text-sm mb-4 line-clamp-3">
            {{ $t(`projects.items.${project.key}.description`) }}
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="text-xs px-2 py-1 rounded-full bg-gray-700 text-[#38BDF8] font-medium"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex gap-3 pt-2 border-t border-gray-700">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              class="flex items-center gap-1 text-gray-400 hover:text-[#38BDF8] transition-colors text-sm"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
              <span>{{ $t('globalOptions.code') }}</span>
            </a>
            <a
              :href="project.demo"
              target="_blank"
              class="flex items-center gap-1 text-gray-400 hover:text-[#38BDF8] transition-colors text-sm"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span>{{ $t('globalOptions.demo') }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { dataStoreProjects } from "@/stores/storeProjects";
import { computed, onMounted } from "vue";

const projects = dataStoreProjects();
const projectsList = computed(() => projects.projects);

onMounted(() => {
  projects.fetchProjects();
});
</script>

<style lang="scss" scoped></style>
