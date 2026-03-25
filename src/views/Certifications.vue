<template>
    <div class="flex flex-col justify-center items-center" >
        <h1 class="text-2xl font-bold text-[#442A18] ">Certificaciones:</h1>
        <p class="text-[#442A18]/80 mt-2 justify-center items-center">Aquí puedes mostrar tus certificaciones relevantes.</p>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
            <div class="bg-[#442A18]/10 rounded-lg  flex flex-col items-center"  v-for="certificacion in certificaciones" :key="certificacion.id"> 
                <img src="../assets/img/imgPrueba.png" :alt="certificacion.nombre" class="w-full h-20 object-cover rounded-t-lg lg:h-40">
                <h2 class="font-bold text-[#442A18] mt-2 text-xs lg:text-xl">{{ certificacion.nombre }}</h2>
                <p class="text-[#442A18]/80 text-center text-xs px-2 lg:text-lg">{{ certificacion.descripcion }}</p>
            </div>


        </div>

    </div>
</template>

<script setup>

const certificaciones = [
    {
        id: 1,
        nombre: "Certificación 1",
        descripcion: "Descripción breve de la certificación 1.",
        imagen: "../assets/img/imgPrueba.png"
    },
    {
        id: 2,
        nombre: "Certificación 2",
        descripcion: "Descripción breve de la certificación 2.",
        imagen: "../assets/img/imgPrueba.png"
    },
    {
        id: 3,
        nombre: "Certificación 3",
        descripcion: "Descripción breve de la certificación 3.",
        imagen: "../assets/img/imgPrueba.png"
    },
    {
        id: 4,
        nombre: "Certificación 4",
        descripcion: "Descripción breve de la certificación 4.",
        imagen: "../assets/img/imgPrueba.png"
    }
]

</script>

<style lang="scss" scoped>

</style>