<template>
  <!-- Título -->
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-2xl font-bold text-white">
        {{ $t("certifications.title") }}
      </h1>
      <p class="text-gray-400 text-sm">
        {{ $t("certifications.intro") }}
      </p>
    </div>

    <button class="text-[#38BDF8] hover:underline">
      {{ $t("globalOptions.ViewAll") }}
    </button>
  </div>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
    <div
      v-for="cert in certifications"
      :key="cert.id"
      class="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <img :src="cert.image" class="w-full h-60 object-cover" />
      <div class="p-4">
        <h2 class="text-white font-bold text-lg">
          {{ $t(`certifications.items.${cert.key}.name`) }}
        </h2>
        <p class="text-gray-400 text-sm">
          {{ cert.institution }}
        </p>
        <p class="text-gray-400 text-sm">
          {{ $t(`certifications.items.${cert.key}.description`) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCertifications } from "@/service/api";
import { onMounted, ref } from "vue";

const certifications = ref([]);

onMounted(async () => {
  let data = await getCertifications();
  certifications.value = data.slice(0, 3);
});
</script>
