<template>
  <div class="w-full flex flex-col gap-3">
    <div class="relative w-full">
      <i
        class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-text-light-secondary dark:text-text-secondary text-sm"
      ></i>

      <input
        v-model="searchText"
        @input="emit('search', searchText)"
        type="text"
        :placeholder="$t('certifications.searchPlaceholder')"
        class="w-full pl-10 pr-4 py-3 rounded-xl border border-primary/30 dark:border-primary/30 bg-surface/50 dark:bg-surface-dark/70 text-text-light-primary dark:text-text-primary text-sm outline-none transition-all duration-300 hover:border-primary/50 focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
      />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div class="relative w-full">
        <button
          type="button"
          @click="toggleInstitutionMenu"
          class="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-primary/30 dark:border-primary/30 bg-surface/50 dark:bg-surface-dark/70 text-text-light-primary dark:text-text-primary text-sm outline-none transition-all duration-300 hover:border-primary/60 hover:bg-surface/70 dark:hover:bg-surface-dark"
        >
          <span
            :class="
              selectedInstitution
                ? 'text-text-light-primary dark:text-text-primary'
                : 'text-text-light-secondary dark:text-text-secondary'
            "
          >
            {{ selectedInstitutionLabel }}
          </span>

          <i
            class="fas fa-chevron-down text-xs text-primary transition-transform duration-200"
            :class="institutionMenuOpen ? 'rotate-180' : ''"
          ></i>
        </button>

        <div
          v-if="institutionMenuOpen"
          class="absolute left-0 right-0 mt-2 rounded-xl border border-primary/30 dark:border-primary/30 bg-surface/95 dark:bg-surface-dark/95 backdrop-blur-md shadow-lg p-1.5 flex flex-col gap-1 z-50"
        >
          <button
            type="button"
            @click="selectInstitution('')"
            :class="[
              'w-full text-left text-sm px-3 py-2.5 rounded-lg transition-all duration-150',
              selectedInstitution === ''
                ? 'bg-primary/20 text-primary font-semibold'
                : 'text-text-light-secondary dark:text-text-secondary hover:bg-primary/10 hover:text-primary',
            ]"
          >
            {{ $t("certifications.allInstitutions") }}
          </button>

          <button
            v-for="institution in institutions"
            :key="institution"
            type="button"
            @click="selectInstitution(institution)"
            :class="[
              'w-full text-left text-sm px-3 py-2.5 rounded-lg transition-all duration-150',
              selectedInstitution === institution
                ? 'bg-primary/20 text-primary font-semibold'
                : 'text-text-light-secondary dark:text-text-secondary hover:bg-primary/10 hover:text-primary',
            ]"
          >
            {{ institutionLabels[institution] }}
          </button>
        </div>
      </div>

      <button
        type="button"
        @click="toggleFeatured"
        class="group relative w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-primary/30 dark:border-primary/30 bg-surface/50 dark:bg-surface-dark/70 overflow-hidden transition-all duration-300 hover:border-primary/60 hover:bg-surface/70 dark:hover:bg-surface-dark"
      >
        <span
          class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/70 to-transparent"
        ></span>

        <span
          class="flex-1 text-center text-sm font-semibold transition-colors duration-300"
          :class="
            featuredOnly
              ? 'text-primary'
              : 'text-text-light-secondary dark:text-text-secondary group-hover:text-primary'
          "
        >
          {{ $t("global.labels.titlefeatured") }}
        </span>

        <span
          class="relative w-12 h-6 rounded-full border shrink-0 transition-all duration-500"
          :class="
            featuredOnly
              ? 'border-primary bg-primary/15 shadow-[0_0_14px_rgba(50,101,134,0.25)]'
              : 'border-primary/30 bg-surface-light/20 dark:bg-surface-dark/40'
          "
        >
          <span
            class="absolute top-1/2 -translate-y-1/2 left-0 w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-500 ease-out"
            :class="
              featuredOnly
                ? 'translate-x-6 border-primary bg-primary shadow-[0_0_12px_rgba(50,101,134,0.65)]'
                : 'translate-x-0 border-primary/40 bg-surface-light dark:bg-surface-dark'
            "
          >
            <span
              class="w-2 h-2 rounded-full bg-primary transition-all duration-300"
              :class="featuredOnly ? 'opacity-100' : 'opacity-40'"
            ></span>
          </span>
        </span>

        <div
          ref="featuredIconContainer"
          class="w-7 h-7 flex items-center justify-center shrink-0"
        ></div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";

import { Institutions, type Certification } from "@/data/certifications";

import { useLottie } from "@/composable/useLottie";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const props = defineProps<{
  certifications: Certification[];
}>();

const emit = defineEmits<{
  (e: "search", value: string): void;
  (e: "filterInstitution", value: string): void;
  (e: "filterFeatured", value: boolean): void;
}>();

const searchText = ref("");
const selectedInstitution = ref<Certification["institution"] | "">("");
const featuredOnly = ref(false);
const institutionMenuOpen = ref(false);

const featuredIconContainer = ref<HTMLElement | null>(null);

const { loadIcon, destroyAnimation } = useLottie();

let featuredAnimation: any = null;

const institutionLabels: Record<Certification["institution"], string> = {
  [Institutions.UDEMY]: "Udemy",
  [Institutions.GOOGLE]: "Google",
  [Institutions.CISCO]: "Cisco",
  [Institutions.UNIVERSITY]: "Universidad",
};

const institutions = computed<Certification["institution"][]>(() => [
  ...new Set(
    props.certifications.map((certification) => certification.institution),
  ),
]);

/*
 * Evita el error de TypeScript:
 * selectedInstitution puede ser "" y institutionLabels
 * solamente acepta instituciones válidas.
 */
const selectedInstitutionLabel = computed(() => {
  if (!selectedInstitution.value) {
    return `${t("certifications.allInstitutions")}`;
  }

  return institutionLabels[selectedInstitution.value];
});

function toggleInstitutionMenu() {
  institutionMenuOpen.value = !institutionMenuOpen.value;
}

function selectInstitution(institution: Certification["institution"] | "") {
  selectedInstitution.value = institution;
  institutionMenuOpen.value = false;

  emit("filterInstitution", institution);
}

async function loadInactiveIcon() {
  await nextTick();

  if (!featuredIconContainer.value) return;

  if (featuredAnimation) {
    destroyAnimation(featuredAnimation);
    featuredAnimation = null;
  }

  featuredAnimation = await loadIcon(
    "wired-outline-237-star-hover-wink",
    featuredIconContainer.value,
    "/icons/certifications",
  );
}

async function loadActiveIcon() {
  await nextTick();

  if (!featuredIconContainer.value) return;

  if (featuredAnimation) {
    destroyAnimation(featuredAnimation);
    featuredAnimation = null;
  }

  featuredAnimation = await loadIcon(
    "wired-flat-237-star-hover-wink",
    featuredIconContainer.value,
    "/icons/certifications",
  );
}

function toggleFeatured() {
  featuredOnly.value = !featuredOnly.value;

  emit("filterFeatured", featuredOnly.value);

  if (featuredOnly.value) {
    loadActiveIcon();
  } else {
    loadInactiveIcon();
  }
}

onMounted(() => {
  loadInactiveIcon();
});

onBeforeUnmount(() => {
  if (featuredAnimation) {
    destroyAnimation(featuredAnimation);
    featuredAnimation = null;
  }
});
</script>
