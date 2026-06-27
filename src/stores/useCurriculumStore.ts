import type { curriculumType } from "@/data/curriculum";
import { getCurriculum } from "@/service/api";
import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useCurriculumStore = defineStore("curriculum", () => {

  const curriculum = ref<curriculumType[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  /*
  const activeCurriculum = computed(() => 
    curriculum.value.filter(c => c.asset)
  );*/

  const fetchCurriculum = async () => {
    if (loading.value) return;
    
    loading.value = true;
    error.value = null;

    try {
      const data = await getCurriculum();
      curriculum.value = data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Error desconocido";
      console.error("Error en Store CURRICULUM:", err);
    } finally {
      loading.value = false;
    }
  };

  /*const clearCurriculum = () => {
    curriculum.value = [];
    error.value = null;
  };*/

  return {
    curriculum,
    loading,
    error,
    fetchCurriculum,
    //activeCurriculum,
    //clearCurriculum,
  };
});