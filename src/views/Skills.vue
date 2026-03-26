<template>
  <section class="mt-6">
    <h2 class="text-xl md:text-2xl font-bold text-[#442A18] mb-4">
      {{ t("skills.title") }}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm p-4 flex flex-col items-center" v-for="skill in skills">
        <i :class="skill.icono"></i>
        <h1>{{ skill.nombre }}</h1>
      </div>

    </div>
  </section>
</template>

<script setup>
import { getSkills } from "@/service/api";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";



const { t } = useI18n();
const skills = ref([])
onMounted(async () => {
  skills.value = await getSkills()
})

</script>
