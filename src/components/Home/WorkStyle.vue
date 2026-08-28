<template>
  <section>
    <div class="flex items-center gap-3 mb-3">
      <span
        class="text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]"
      >
        {{ $t("about.workflow.title") }}
      </span>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div
        v-for="item in workStyleItems"
        :key="item.key"
        class="group flex items-center gap-2.5"
      >
        <div
          class="w-9 h-9 flex items-center justify-center shrink-0 overflow-hidden"
        >
          <div
            :ref="(el) => setIconRef(el, item.icon)"
            class="w-8 h-8"
          ></div>
        </div>

        <div class="min-w-0">
          <p
            class="text-xs font-semibold text-text-light-primary dark:text-text-primary truncate"
          >
            {{ $t(`about.workflow.${item.key}.title`) }}
          </p>

          <p
            class="text-[10px] leading-4 text-text-light-secondary dark:text-text-secondary"
          >
            {{ $t(`about.workflow.${item.key}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useLottie } from "@/composable/useLottie";

const props = defineProps<{
  workStyle: string[];
}>();

const iconMap: Record<string, string> = {
  learning: "LearnMore",
  resolution: "Imaginary",
  communication: "Support",
};

const workStyleItems = computed(() =>
  props.workStyle
    .filter((key) => iconMap[key])
    .map((key) => ({
      key,
      icon: iconMap[key],
    })),
);

const iconRefs: Record<string, HTMLElement> = {};

const setIconRef = (el: unknown, icon: string) => {
  if (el instanceof HTMLElement) {
    iconRefs[icon] = el;
  }
};

const { loadIcons } = useLottie();

onMounted(async () => {
  await loadIcons(
    workStyleItems.value,
    (icon) => iconRefs[icon],
    "/icons",
  );
});
</script>