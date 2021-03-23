<template>
     <div class="relative flex h-screen w-full -mb-6">
    <div id='Background' class="absolute w-full h-full bg-center bg-cover" :style="BgClasStaff"></div>
    <div class="px-32 py-32 text-white mt-16 csm:w-full csm:px-5 z-0 csm:py-40">
      <p class="text-4xl csm:text-xl csm:px-6 mt-16" v-html="TitleStaff"></p>
      <p class="text-4xl csm:text-lg csm:px-6 -mt-2 csm:mt-0 " v-html="SecondTitleStaff"></p>
      <p class="text-base w-2/5 py-5 csm:text-xs csm:w-full csm:py-0 csm:mt-5 csm:mb-2 csm:px-5 " v-html="DescriStaff"></p>
      <div class="py-1 flex csm:px-5">
        <a
          href="ButtomStaff" class="text-center inline-block py-4 leading-none text-white bg-transparent uppercase px-8 bg-blue-600 csm:px-4 csm:text-xs ">{{ActionTitleStaff}}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "HeroStaff",
    props: ['BgClasStaff', 'ButtomStaff', 'ActionTitleStaff', 'DescriStaff', 'TitleStaff', 'SecondTitleStaff'],
}
</script>

<style>
#Background {
filter: contrast(60%);
background-position: 50% 50%;
transform: scale(1.0);
}
</style>