<template>
  <div class="flex items-center gap-3 min-w-0">
    <div
      class="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border-2 border-[#38BDF8] flex-none"
    >
      <img :src="fotoPerfil" class="w-full h-full object-cover" />
    </div>
    <div class="text-white flex flex-col rounded-lg min-w-0">
      <h1 class="font-bold text-sm truncate">
        {{ isLoggedIn ? userData?.name : $t("navbar.status.guest") }}
      </h1>
      <span
        :class="
          isLoggedIn
            ? 'text-xs text-celeste truncate'
            : 'text-xs text-red-500 truncate'
        "
        >{{ isLoggedIn ? $t("navbar.status.online") : $t("navbar.status.offline") }}</span
      >
      <span class="text-xs text-gray-400 truncate">
        {{ isLoggedIn ? userData?.email : "" }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">

type Props = {
  fotoPerfil: string;
  isLoggedIn: boolean;
  userData: {
    name: string;
    email: string;
  } | null;
};

const props = defineProps<Props>();
</script>

<style lang="scss" scoped></style>
