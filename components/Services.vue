<template>
  <div class="flex bg-gray-200  pl-20 w-full h-auto csm:flex-col csm:px-0 "> 
      <div class="w-2/3 h-auto py-5 csm:w-full csm:px-5 csm:text-xl ">
        <div class="text-blue-600 text-lg py-5 csm:text-xl csm:py-3"><span class="csm:hidden">Nuestros</span> Servicios</div>
          <p class="text-4xl csm:text-xl csm:w-full">Ampliamos la oferta de nuestros servicios.<span class="csm:hidden"><br></span> Al cuidado de los que más te importan,<span class="font-bold"> siempre.</span></p>
          <div class="py-5 csm:text-xs">
            <a href="#" class="bg-blue-600 text-center inline-block px-5 py-4 leading-none text-white bg-transparent border border-1 border-gray-200 uppercase">Conocer Más</a>
          </div>
      </div>
      <div class=" w-1/3 h-auto csm:order-first csm:w-full csm:px-0 csm:py-0 csm:bg-auto">
        <picture>
          <source :srcset="require('~/assets/images/doctor-with-laptop-and-a-senior-woman-in-office-P9DQGMM@3x.png?webp&resize&size=300')" type="image/webp" />
          <source :srcset="require('~/assets/images/doctor-with-laptop-and-a-senior-woman-in-office-P9DQGMM@3x.png?resize&size=300')" type="image/jpeg" />
          <img class="w-full h-auto object-fill object-top" :src="require('~/assets/images/doctor-with-laptop-and-a-senior-woman-in-office-P9DQGMM@3x.png?resize&size=300')" />
        </picture>
      </div>
  </div>
</template>

<script>
export default {
    name: "Services"
}
</script>

<style>

</style>