<template>
  <div class="flex csm:flex-col">
    <shortcutsItem  v-for="(item,index) in items" :key="index" :title="item.title" :classTW="item.classTW" :subTitle="item.subTitle" :buttonActionText="item.buttonActionText" :buttonActionRoute="item.buttonActionRoute" ></shortcutsItem>
  </div>
</template>

<script>
'use strict'
import shortcutsItem from "./ShortcutsItem"
export default {
   name: "Shortcuts",
   components: {shortcutsItem},
   props: ['items']
   
   }
;
</script>

<style>
.bg-bluish {
  background-color: var(--bluish);
}
.bg-aqua-blue{
  background-color: var(--aqua-blue);
}
</style>
