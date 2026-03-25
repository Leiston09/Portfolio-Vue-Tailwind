<template>
  <div
    class="bg-[#442A18]/5 my-1 rounded-2xl p-3 flex flex-col justify-center items-center mt-2"
  >
    <h1 class="font-bold text-3xl text-[#442A18] ">Contacto</h1>
    <p class="text-[#442A18]/80 text-center mt-2">
      ¡Contáctame para discutir oportunidades o colaboraciones!
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 w-full">
      <div
        class="flex items-center gap-1 md:gap-2 md:flex-col  bg-[#442A18]/10 p-3 rounded-lg hover:bg-[#EB9D23]/20 transition-colors"
        v-for="contacto in contactInfo"
        :key="contacto.name"
      >
        <i :class="[contacto.icon, contacto.color]" class="text-xl md:text-5xl"></i>
        <a
          :href="contacto.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#442A18] hover:text-[#EB9D23] transition-colors"
        >
          {{ contacto.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const contactInfo = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "fab fa-github",
    color: "text-gray-800",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "fab fa-linkedin",
    color: "text-blue-700",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/1234567890",
    icon: "fab fa-whatsapp",
    color: "text-green-600",
  },
  {
    name: "your.email@example.com",
    url: "your.email@example.com",
    icon: "fas fa-envelope",
    color: "text-blue-600",
  }
];
</script>

<style lang="scss" scoped></style>
