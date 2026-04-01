<template>
  <div class="text-white flex flex-col items-center justify-center px-2 ">

    <h1 class="text-3xl md:text-4xl font-bold mb-5">
      {{ $t('curriculum.title') }}
    </h1>

    <div class="grid md:grid-cols-2 gap-5 w-full max-w-4xl">

      <div class="bg-[#0F172A] rounded-2xl p-2 flex flex-col items-center shadow-lg hover:scale-105 transition">

        <div class="w-full h-48 overflow-hidden rounded-xl mb-4 ">
          <img src="/public/img/CurrículumIng.jpg" alt="cv ingeniero" class="w-full object-cover"/>
        </div>

        <h2 class="text-lg text-center font-semibold mb-4">
          {{ $t('curriculum.curriculumIngeniero.title') }}
        </h2>

        <a
          href="/public/pdf/Curriculum/CurriculumSistemasInformacion.pdf"
          download
          class="bg-green-600 hover:bg-green-700 px-6 py-2 mb-2 rounded-lg transition"
        >
          {{ $t('curriculum.download') }}
        </a>

      </div>

      <div class="bg-[#0F172A] rounded-2xl p-2 flex flex-col items-center shadow-lg hover:scale-105 transition">

        <div class="w-full h-48 overflow-hidden rounded-xl mb-4">
          <img src="/public/img/CurrículumDeveloper.jpg" alt="cv developer" class="w-full object-cover"/>
        </div>

        <h2 class="text-lg text-center font-semibold mb-4">
          {{ $t('curriculum.curriculumDeveloper.title') }}
        </h2>

        <a
          href="/public/pdf/Curriculum/CurriculumDeveloperJunior.pdf"
          download
          class="bg-green-600 hover:bg-green-700 px-6 py-2 mb-2 rounded-lg transition"
        >
          {{ $t('curriculum.download') }}
        </a>

      </div>

    </div>

  </div>
</template>

<script setup>

</script>