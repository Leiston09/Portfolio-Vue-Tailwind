<template>
  <div class="flex items-center gap-3 min-w-0">
    <div
      class="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border-2 border-primary dark:border-primary-light flex-none shadow-lg shadow-primary/20 dark:shadow-primary/10"
    >
      <img :src="profile?.image.navbar" class="w-full h-full object-cover" />
    </div>
    <div class="flex flex-col rounded-lg min-w-0">
      <h1 class="font-bold text-sm text-text-light-primary dark:text-white truncate">
        {{ profile?.shortName || '' }}
      </h1>
      <span class="text-xs text-primary dark:text-primary-light font-medium truncate">
        {{ $t('navbar.status') }}
      </span>
      <span class="text-xs text-text-light-secondary dark:text-gray-400 truncate">
        {{ profile?.email || '' }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ProfileType, profile as profileData } from '@/data/profile';
import { getProfile } from '@/service/api';

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