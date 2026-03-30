<template>
  <div
    class="flex flex-col m-5 md:flex-row w-full max-w-4xl rounded-2xl shadow-2xl hover:shadow-gray-800 overflow-hidden bg-slate-200"
  >
    <div class="hidden md:block md:w-1/2">
      <img
        src="@/assets/img/ImagenLogin.jpg"
        alt="Login Image"
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="flex-1 px-4 py-2 md:p-10 flex flex-col justify-center gap-2 md:gap-4 lg:gap-5"
    >
      <div class=" md:hidden flex justify-center">
        <div class="rounded-full overflow-hidden w-25 h-25 ">
          <img
            src="@/assets/img/ImagenLogin.jpg"
            alt="Login Image"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <header class="text-center">
        <h1 class="text-2xl md:text-4xl font-extrabold text-slate-900">
          Login
        </h1>
      </header>

      <div class="space-y-2">
        <div>
          <input
            type="text"
            placeholder="Username"
            class="w-full px-3 py-1 md:p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-900"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            class="w-full px-3 py-1 md:p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-400 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-900"
          />
        </div>
      </div>

      <div class="flex justify-end">
        <button
          class="text-sky-600 hover:text-sky-700 text-sm font-semibold transition-colors"
        >
          ¿Olvidaste tu contraseña?
        </button>
      </div>

      <button
        class="w-full bg-sky-500 text-slate-900 py-2 md:py-3 rounded-lg text-lg font-bold hover:bg-sky-400 active:scale-95 transition-all shadow-lg shadow-sky-500/20"
      >
        Entrar
      </button>

      <div class="text-center text-sm text-slate-600">
        ¿No tienes una cuenta?
        <button class="text-sky-600 hover:underline font-bold ml-1">
          Regístrate
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
