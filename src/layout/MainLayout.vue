<template>
  <div class="min-h-screen flex flex-col">
    <header id="home">
      <OptionsBar />
    </header>

    <main
      class="flex flex-1 pt-20 pb-25 lg:pb-0 px-5 items-center justify-center"
    >
      <div class="max-w-7xl mx-auto w-full">
        <RouterView />
      </div>
    </main>

    <footer class="hidden lg:flex text-gray-500 text-xs justify-center py-4">
      <h1>
        © {{ new Date().getFullYear() }} | {{ profile?.firstName }}
        {{ profile?.lastName }} | {{ $t("global.allRightsreserved") }}
      </h1>
    </footer>

    <div>
      <IconChatBot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import OptionsBar from "@/components/static/OptionsBar.vue";
import { onMounted, ref } from "vue";
import IconChatBot from "@/components/chat/IconChatBot.vue";

import { ProfileType, profile as profileData } from "@/data/profile";
import { getProfile } from "@/service/api";

const profile = ref<ProfileType | null>(null);

onMounted(async () => {
  try {
    const response = await getProfile();
    profile.value = response ?? profileData;
  } catch (error) {
    profile.value = profileData;
  }
});
</script>
