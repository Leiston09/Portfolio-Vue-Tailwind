<template>
  <div v-if="!certificatedNew">
    <h1 class="fixed bottom-0 left-0 right-0">Cargando....</h1>
  </div>
  <div v-else>
    <div
      class="fixed bottom-0 left-0 right-0 top-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 rounded-lg m-5">
        <div
          class="w-full flex justify-center items-center rounded-lg overflow-hidden"
        >
          <img
            :src="certificatedNew.image"
            :alt="certificatedNew.name"
            class="w-full h-full object-cover"
          />
        </div>

        <div
          class="flex flex-col justify-center lg:justify-start gap-4 lg:mt-10 bg-black/80 items-center  p-5 rounded-lg shadow-lg"
        >
          <h1
            class="text-xl md:text-3xl font-bold text-white text-center md:text-center lg:text-4xl"
          >
            {{ certificatedNew.name }}
          </h1>

          <p class="text-gray-500 text-center md:text-center lg:text-xl font-extrabold">
            {{ certificatedNew.institution }}
          </p>

          <p class="text-emerald-500 text-justify mb-2 lg:text-center font-mono">
            {{ certificatedNew.description }}
          </p>
          <p class="text-gray-300 text-justify mb-2 lg:text-center text-xl">
              {{ $t(`certifications.items.${certificatedNew.key}.descriptionDetail`) }}
          </p>

          <div class="flex gap-3 justify-center">
            <a
              :href="certificatedNew.pdf"
              download
              class="bg-[#38BDF8] px-2 text-xs py-2 rounded-lg font-semibold text-center hover:scale-105 transition"
            >
              {{ $t("certifications.buttons.download") }}
            </a>

            <RouterLink
              :to="{ name: 'Certifications' }"
              class="border px-2 border-gray-400 text-gray-400 text-xs py-2 rounded-lg font-semibold text-center hover:bg-gray-400 transition hover:text-white"
            >
              {{ $t("certifications.buttons.back") }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";

const emit = defineEmits(["notCertificated"]);

const props = defineProps({
  certificated: {
    type: Object,
    required: false,
    default: null,
  },
});

const certificatedNew = computed(() => props.certificated);

onMounted(() => {
  if (props.certificated) return;

  try {
    const data = JSON.parse(localStorage.getItem("certificationId"));

    if (data?.user && data?.id) {
      emit("notCertificated", data.id);
    }
  } catch (error) {
    console.error("Error leyendo localStorage", error);
  }
});

</script>

<style lang="scss" scoped></style>
