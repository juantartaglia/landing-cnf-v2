<template>
 <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
     <nuxt-link to="/">
        <img 
          width="150"
          class="ml-20"
          
          src="~/assets/images/Logo_CNF_Negativo.svg"
          :alt="brand_name"
        />
      </nuxt-link>
    
    
    
    </div>
    <div class="block lg:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full flex-grow csm:flex csm:items-center csm:w-auto">
      <div class="text-sm csm:flex-grow">
        <a href="#responsive-header" class="no-underline block mt-4 csm:inline-block csm:mt-0 text-gray-800 hover:text-white mr-4">
          Docs
        </a>
        <a href="#responsive-header" class="no-underline block mt-4 csm:inline-block csm:mt-0 text-gray-800 hover:text-white mr-4">
          Examples
        </a>
        <a href="#responsive-header" class="no-underline block mt-4 csm:inline-block csm:mt-0 text-gray-800 hover:text-white">
          Blog
        </a>
      </div>
      <div>
        <a href="#" class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 csm:mt-0">Download</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    data: ()=> {
        return {
            open:false
        }
    },
    methods: {
        toggle() {
            this.open = !this.open;
        }
    }
}
</script>