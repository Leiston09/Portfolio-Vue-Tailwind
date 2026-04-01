<template>
  <div
    class="flex h-fit flex-col  md:flex-row w-full max-w-4xl rounded-2xl overflow-hidden  border-2 border-white/20"
  >
    <div class="hidden md:block md:w-1/2">
      <img
        src="@/assets/img/ImagenLogin.jpg"
        alt="Recover Image"
        class="w-full h-full object-cover opacity-90"
      />
    </div>

    <div class="flex-1 px-4 py-6 md:p-10 flex flex-col justify-center gap-4">
      <div class="md:hidden flex justify-center">
        <div class="rounded-full overflow-hidden w-24 h-24 border border-[#38BDF8]/40">
          <img
            src="@/assets/img/ImagenLogin.jpg"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <header class="text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-white">
          Recuperar contraseña
        </h1>
        <p class="text-gray-400 text-sm mt-1">
          Ingresa tu correo para recuperar tu cuenta
        </p>
      </header>

      <div class="space-y-3">
        <input
          type="email"
          placeholder="Correo electrónico"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all"
        />
      </div>

      <button
        class="w-full bg-[#38BDF8] text-black py-2 md:py-3 rounded-lg text-lg font-bold hover:bg-[#0EA5E9] active:scale-95 transition-all shadow-lg shadow-[#38BDF8]/20"
      >
        Enviar enlace
      </button>


    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>