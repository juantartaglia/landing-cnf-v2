<template>
  <div class="relative flex h-screen w-full -mb-6 ">
    <HeroClinic  :Titulo="titulo" :SecondTitle="secondTitle" :Descri="descri" :ActionTitle="actionTitle" :ActionButtom="actionButtom" :bgClass="bgClass"></HeroClinic>
  </div>
</template>

<script>
import HeroClinic from "./HeroClinic"
export default {
  name: "Hero",
  components:{HeroClinic},
  props: ["bgClass","titulo" ,"secondTitle","descri","actionTitle","actionButtom"],
};
</script>

<style>

</style>
