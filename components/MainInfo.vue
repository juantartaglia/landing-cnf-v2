<template>
<div>
    <div class="w-full csm:hidden py-16 mb-2">
        <p class="font-bolt text-black text-center font-bolt text-4xl">Datos Útiles</p>
        <p class="text-center text-base">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
    </div>
        <div class="w-full flex csm:flex-col">
                <a href="https://goo.gl/maps/wj2Km5MpfST927SJ8">
                    <picture>
                        <source :srcset="require('~/assets/images/MapaSucursales.png?webp&resize&size=600')" type="image/webp" />
                        <source :srcset="require('~/assets/images/MapaSucursales.png?resize&size=300')" type="image/jpeg" />
                        <img class ="w-full h-auto object-cover object-top bg-cover" :src="require('~/assets/images/MapaSucursales@3x.png')" />
                    </picture>
                </a>
            <div class="w-2/4 h-auto py-15 csm:w-full csm:order-first csm:py-5">
                <p class="font-bolt text-4xl px-20 text-black csm:text-3xl csm:w-full csm:text-center csm:px-0"> Conocé todos nuestros<br>Centros en la ciudad</p>
                <p class=" text-justify text-black py-5 font-bolt px-20 csm:text-xs csm:w-full csm:px-10 csm:text-center">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                <div class="py-5 px-20 csm:py-5"> 
                    <a href="https://goo.gl/maps/GxzAbcJ1RwVwETsQ9" class="text-center inline-block w-5/12 py-4 leading-none text-white bg-transparent border border-1 border-gray-200 uppercase bg-blue-700 csm:text-center csm:justify-center csm:w-full csm:py-5">VER EN GOOGLE MAPS</a>
                </div>
            </div>
        </div>

        <div class="text-center flex justify-between px-32 py-20 csm:w-full csm:px-1 csm:py-5 csm:flex-wrap csm:justify-center ">
            <div class="csm:w-1/2 csm:py-2">
                <p class="text-2xl font-bold csm:text-xl "><span class="text-blue-600 px-2">/01</span> -Horario</p>
                <p class="text-base csm:text-xs">Example Example Example Example Example Example </p>
            </div>
            <div class="csm:w-1/2 csm:py-2">
                <p class="text-2xl font-bold csm:text-xl"><span class="text-blue-500 px-2">/02</span> -Télefono</p>
                <p class="text-base csm:text-xs ">Example Example Example Example Example Example </p>
            </div>
            <div class="csm:w-1/2 csm:py-2">
                <p class="text-2xl font-bold csm:text-xl"><span class="text-blue-600 px-2">/03</span> -Linea Turnos</p>
                <p class="text-base csm:text-xs">Example Example Example Example Example Example </p>
            </div>
        </div>
</div>
</template>

<script>
export default {
    name: "Maininfo",

};
</script>

<style>

</style>