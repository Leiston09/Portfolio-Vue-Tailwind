<template>
  <div class="flex h-fit flex-col w-full max-w-4xl  p-5 border-2 m-10 rounded-4xl border-white/20">
    <div class="text-center pt-5 ">
      <h1 class="text-3xl md:text-4xl font-extrabold text-white">
        Crear cuenta
      </h1>
      <p class="text-gray-400 text-sm mt-2">
        Regístrate para acceder al sistema
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 m-5 ">
      <input
        type="text"
        placeholder="Nombre"
        class="px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
      />

      <input
        type="text"
        placeholder="Apellido"
        class="px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
      />

      <input
        type="email"
        placeholder="Correo electrónico"
        class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
      />

      <input
        type="date"
        class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
      />

      <input
        type="password"
        placeholder="Contraseña"
        class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
      />

      <input
        type="password"
        placeholder="Verificar contraseña"
        class="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#38BDF8] outline-none"
      />
    </div>
    <div class=" flex justify-center ">
      <button
        class="w-fit px-4 bg-[#38BDF8] text-black py-2 md:py-3 rounded-lg text-lg font-bold hover:bg-[#0EA5E9] active:scale-95 transition-all shadow-lg shadow-[#38BDF8]/20"
      >
        Registrarse
      </button>
    </div>
  </div>
</template>

<script setup></script>
