<template>
  <div>
    <button @click="saludo">
      <img
        src="../../assets/img/imgPrueba.png"
        alt=""
        class="object-cover rounded-full w-10 h-10 md:w-15 md:h-15 hover:scale-110 transition-transform"
      />
    </button>
  </div>
</template>

<script setup>

const saludo = () => {
  console.log("Hola, soy un chatbot de prueba!");
}
</script>

<style lang="scss" scoped></style>
