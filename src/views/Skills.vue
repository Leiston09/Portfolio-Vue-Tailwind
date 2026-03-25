<template>
  <section class="mt-6">
    <h2 class="text-xl md:text-2xl font-bold text-[#442A18] mb-4">
      Habilidades
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      <!-- Frontend -->
      <div class="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm p-4">
        <h3 class="font-semibold text-[#442A18] mb-3">Frontend</h3>
        <div class="space-y-2">
          <div class="skill">
            <span>HTML</span>
            <div class="bar"><div class="level w-[90%]"></div></div>
          </div>
          <div class="skill">
            <span>CSS</span>
            <div class="bar"><div class="level w-[85%]"></div></div>
          </div>
          <div class="skill">
            <span>JavaScript</span>
            <div class="bar"><div class="level w-[80%]"></div></div>
          </div>
          <div class="skill">
            <span>Vue</span>
            <div class="bar"><div class="level w-[75%]"></div></div>
          </div>
        </div>
      </div>

      <!-- Backend -->
      <div class="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm p-4">
        <h3 class="font-semibold text-[#442A18] mb-3">Backend</h3>
        <div class="space-y-2">
          <div class="skill">
            <span>Java</span>
            <div class="bar"><div class=""></div></div>
          </div>
          <div class="skill">
            <span>MySQL</span>
            <div class="bar"><div class=""></div></div>
          </div>
          <div class="skill">
            <span>APIs</span>
            <div class="bar"><div class=""></div></div>
          </div>
        </div>
      </div>

      <!-- Herramientas -->
      <div class="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm p-4">
        <h3 class="font-semibold text-[#442A18] mb-3">Herramientas</h3>
        <div class="space-y-2">
          <div class="skill">
            <span>Git</span>
            <div class="bar"><div class=""></div></div>
          </div>
          <div class="skill">
            <span>GitHub</span>
            <div class="bar"><div class="level w-[40%]"></div></div>
          </div>
          <div class="skill">
            <span>Vercel</span>
            <div class="bar"><div class=""></div></div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.skill {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #442A18;
}

.bar {
  width: 100%;
  height: 6px;
  background: #eee;
  border-radius: 10px;
  margin-top: 4px;
}

.level {
  height: 6px;
  background: #EB9D23;
  border-radius: 10px;
}
</style>