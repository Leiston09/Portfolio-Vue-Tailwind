<template>
  <Header
    :data="{
      tag: $t('contact.tag'),
      title: $t('contact.title'),
      titleHighlight: $t('contact.titleHighlight'),
      description: $t('contact.description'),
    }"
  />
  <SkeletonContacts v-if="isLoading" />
  <div
    v-else
    class="relative w-full rounded-2xl sm:rounded-3xl bg-surface/50 dark:bg-surface-dark/70 overflow-hidden"
  >
    <div
      class="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-primary/10 dark:bg-primary/15 blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute -bottom-28 -left-20 w-56 h-56 rounded-full bg-primary/10 dark:bg-primary/15 blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
    ></div>
    <div class="relative p-4">
      <div
        class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-x-3 sm:gap-x-5"
      >
        <a
          v-for="(item, index) in contacts"
          :key="item.id"
          :href="item.url"
          :download="item.download ? item.filename : undefined"
          :target="item.download ? undefined : '_blank'"
          :rel="item.download ? undefined : 'noopener noreferrer'"
          :class="[
            'group relative min-h-[135px] flex flex-col items-center justify-center px-4 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1',
            item.colors.card,
            index === 4 ? 'col-span-2' : '',
            index < 2 ? 'md:col-span-3' : 'md:col-span-2',
            'lg:col-span-1',
          ]"
        >
          <div
            :class="[
              'absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full group-hover:w-12 transition-all duration-500',
              item.colors.brand,
            ]"
          ></div>
          <div
            class="w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
          >
            <div
              :ref="(el) => setIconRef(el, item.icon)"
              class="w-11 h-11"
            ></div>
          </div>
          <div class="mt-3 text-center">
            <span
              :class="[
                'text-sm sm:text-base font-semibold transition-colors duration-300',
                item.colors.text,
              ]"
              >{{$t(`contact.channels.${item.name }`) }}</span
            >
            <span
              class="block mt-1 text-[9px] uppercase tracking-[0.16em] font-medium text-text-light-secondary dark:text-text-secondary group-hover:text-primary transition-colors duration-300"
              >{{ item.download ? $t('global.buttons.downloadCv') : $t('global.buttons.contact') }}</span
            >
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
import Header from "../shared/Header.vue";
import SkeletonContacts from "../ui/Skeleton/SkeletonContacts.vue";
import type { ContactType } from "@/data/contact";
import { Curriculum } from "@/data/curriculum";
import { getContact } from "@/service/api.js";
import { useLottie } from "@/composable/useLottie";

const isLoading = ref(true);
const contacts = ref<ContactType[]>([]);
const { loadIcons } = useLottie();
const iconRefs: Record<string, HTMLElement> = {};

const setIconRef = (el: unknown, icon: string) => {
  if (el instanceof HTMLElement) {
    iconRefs[icon] = el;
  }
};

const loadContacts = async () => {
  try {
    contacts.value = await getContact();
    const curriculum = Curriculum.find((item) => item.asset);
    if (curriculum) {
      const cv = contacts.value.find((item) => item.name === "resume");
      if (cv) {
        cv.url = curriculum.download;
      }
    }
    isLoading.value = false;
    await nextTick();
    await loadIcons(
      contacts.value,
      (icon) => iconRefs[icon],
      "/icons/contacts",
    );
  } catch (error) {
    console.error("Error al cargar los contactos:", error);
    isLoading.value = false;
  }
};

onMounted(() => {
  loadContacts();
});
</script>
