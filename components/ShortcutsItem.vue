<template>
    <div :class="classTW">
        <p class="text-center font-bolt text-white text-2xl " v-html="title"></p>
        <p class=" text-center text-white py-5 csm:text-xs font-bolt " v-html="subTitle"></p>
        <div class="py-3 flex justify-center">
          <a :href="buttonActionRoute" class="text-center inline-block w-1/4 py-4 leading-none text-white bg-transparent border border-1 border-gray-200 uppercase csm:w-2/4">{{buttonActionText}}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "shortcutsItem",
    props: [ 'title', 'subTitle', 'classTW', 'buttonActionText', 'buttonActionRoute' ],
    mounted() {
        //console.log(buttonAction)
    }
}
</script>

<style>

</style>