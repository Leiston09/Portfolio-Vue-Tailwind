<template>
  <!-- Sidebar SOLO en PC -->
  <div class="hidden md:block">
    <div class="bg-[#442A18]/5 rounded-2xl sticky top-20 shadow-sm p-2 mr-4">
      <ul class="flex flex-col gap-2">
        <li
          class="flex items-center gap-3 p-2 text-[#442A18] hover:text-[#EB9D23] hover:bg-[#442A18]/5 rounded-lg transition-all duration-200 hover:translate-x-1 cursor-pointer"
        >
          <i class="fas fa-home text-lg"></i>
          <RouterLink :to="{ name: 'Home' }">{{ $t("menu.home") }}</RouterLink>
        </li>
        <li
          class="flex items-center gap-3 p-2 text-[#442A18] hover:text-[#EB9D23] hover:bg-[#442A18]/5 rounded-lg transition-all duration-200 hover:translate-x-1 cursor-pointer"
        >
          <i class="fas fa-briefcase text-lg"></i>
          <RouterLink :to="{ name: 'Projects' }">{{
            $t("menu.projects")
          }}</RouterLink>
        </li>
        <li
          class="flex items-center gap-3 p-2 text-[#442A18] hover:text-[#EB9D23] hover:bg-[#442A18]/5 rounded-lg transition-all duration-200 hover:translate-x-1 cursor-pointer"
        >
          <i class="fas fa-code text-lg"></i>
          <RouterLink :to="{ name: 'Skills' }">{{
            $t("menu.skills")
          }}</RouterLink>
        </li>
        <li
          class="flex items-center gap-3 p-2 text-[#442A18] hover:text-[#EB9D23] hover:bg-[#442A18]/5 rounded-lg transition-all duration-200 hover:translate-x-1 cursor-pointer"
        >
          <i class="fas fa-graduation-cap text-lg"></i>
          <RouterLink :to="{ name: 'Certifications' }">{{
            $t("menu.certifications")
          }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>

  <!-- Menú móvil SOLO en móvil -->
  <div
    class="md:hidden fixed bottom-0 left-0 right-0 bg-[#F8F3C6] shadow-lg border-t z-50 backdrop-blur-md"
  >
    <ul class="flex justify-around p-2">
      <li
        class="flex flex-col items-center gap-1 text-[#442A18] hover:text-[#EB9D23] transition-colors"
      >
        <i class="fas fa-home text-lg"></i>
        <RouterLink :to="{ name: 'Home' }" class="text-xs">{{
          $t("menu.home")
        }}</RouterLink>
      </li>
      <li
        class="flex flex-col items-center gap-1 text-[#442A18] hover:text-[#EB9D23] transition-colors"
      >
        <i class="fas fa-briefcase text-lg"></i>
        <RouterLink :to="{ name: 'Projects' }" class="text-xs">{{
          $t("menu.projects")
        }}</RouterLink>
      </li>
      <li
        class="flex flex-col items-center gap-1 text-[#442A18] hover:text-[#EB9D23] transition-colors"
      >
        <i class="fas fa-code text-lg"></i>
        <RouterLink :to="{ name: 'Skills' }" class="text-xs">
          {{ $t("menu.skills") }}</RouterLink
        >
      </li>
      <li
        class="flex flex-col items-center gap-1 text-[#442A18] hover:text-[#EB9D23] transition-colors"
      >
        <i class="fas fa-graduation-cap text-lg"></i>
        <RouterLink :to="{ name: 'Certifications' }" class="text-xs">{{
          $t("menu.certifications")
        }}</RouterLink>
      </li>

    </ul>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
