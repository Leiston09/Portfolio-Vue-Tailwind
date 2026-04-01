<template>
  <div
    class="flex flex-col md:flex-row w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
    <!-- Imagen --> 
    <div class="hidden md:block md:w-1/2">
      <img
        src="@/assets/img/ImagenLogin.jpg"
        alt="Login Image"
        class="w-full h-full object-cover opacity-90"
      />
    </div>

    <div class="flex-1 px-4 py-6 md:p-10 flex flex-col justify-center gap-4">
      <div class="md:hidden flex justify-center">
        <div
          class="rounded-full overflow-hidden w-24 h-24 border border-[#38BDF8]/40"
        >
          <img
            src="@/assets/img/ImagenLogin.jpg"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <header class="text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold text-white">Login</h1>
        <p class="text-gray-400 text-sm mt-1">Bienvenido de nuevo</p>
      </header>

      <div class="space-y-3">
        <input
          type="text"
          placeholder="Username"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all"
        />

        <input
          type="password"
          placeholder="Password"
          class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none transition-all"
        />
      </div>

      <div class="flex justify-end">
        <RouterLink
          :to="{ name: 'RecoverPassword' }"
          class="text-[#38BDF8] hover:text-[#0EA5E9] text-sm font-semibold transition-colors"
        >
          ¿Olvidaste tu contraseña?
        </RouterLink>
      </div>

      <button
        class="w-full bg-[#38BDF8] text-black py-2 md:py-3 rounded-lg text-lg font-bold hover:bg-[#0EA5E9] active:scale-95 transition-all shadow-lg shadow-[#38BDF8]/20"
      >
        Entrar
      </button>

      
      <div class="text-center text-sm text-gray-400">
        ¿No tienes una cuenta?
        <RouterLink 
        :to="{name: 'RegisterUser'}"
        class="text-[#38BDF8] hover:underline font-bold ml-1">
          Regístrate
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';



</script>
