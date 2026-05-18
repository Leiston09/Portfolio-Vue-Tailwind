<template>
  <div class="flex items-center gap-3 min-w-0">
    <div
      class="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border-2 border-[#38BDF8] flex-none"
    >
      <img :src="usuarioPerfil" class="w-full h-full object-cover" />
    </div>
    <div class="text-white flex flex-col rounded-lg min-w-0">
      <h1 class="font-bold text-sm truncate">
        {{ isLoggedIn ? userLogin.name : $t("navbar.guest") }}
      </h1>
      <span
        :class="
          isLoggedIn
            ? 'text-xs text-celeste truncate'
            : 'text-xs text-red-500 truncate'
        "
        >{{ isLoggedIn ? $t("navbar.online") : $t("navbar.offline") }}</span
      >
      <span class="text-xs text-gray-400 truncate">
        {{ isLoggedIn ? userLogin.email : "" }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  usuarioPerfil: string;

  isLoggedIn: boolean;

  userLogin: {
    name: string;
    email: string;
  };
};

const props = defineProps<Props>();
</script>

<style lang="scss" scoped></style>
