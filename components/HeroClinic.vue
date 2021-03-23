<template>
  <div class="relative flex h-screen w-full -mb-6">
    <div id='banner' class="absolute w-full h-full bg-center bg-cover" :style="bgClass"></div>
    <div class="px-32 py-32 text-white mt-16 csm:w-full csm:px-5 z-0 csm:py-56">
      <p class="text-3xl csm:text-xl csm:px-6" v-html="Titulo"></p>
      <p class="text-3xl csm:text-lg csm:px-6" v-html="SecondTitle"></p>
      <p class="text-base w-2/5 py-8 csm:text-xs csm:w-full csm:py-0 csm:mt-5 csm:mb-2 csm:px-5 " v-html="Descri"></p>
      <div class="py-3 flex csm:px-5">
        <a
          href="ActionButtom" class="text-center inline-block py-4 leading-none text-white bg-transparent uppercase px-8 bg-blue-600 csm:px-4 csm:text-xs ">{{ActionTitle}}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "HeroClinic",
    props: ['bgClass', 'ActionButtom','ActionTitle', 'Descri', 'Titulo', 'SecondTitle'],
};
</script>

<style>

#banner {
filter: contrast(70%);
background-position: 60% 25%;
}
</style>