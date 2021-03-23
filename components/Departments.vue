<template>
<div class="w-full px-32 mt-8 csm:px-4">
  <div class="w-full flex">
    <div class="mt-20 text-left text-3xl csm:px-0 csm:text-lg w-1/4 flex csm:mt-12 csm:mb-3">Departamentos</div>
    <paginate-links for="Departments" :async="true" :simple="{ prev:'<', next:'>'}" class="flex cursor-pointer mt-20 ml-auto px-5 csm:px-4 csm:mt-10 csm:w-1/6 py-2 csm:py-0 csm:"></paginate-links>
    <button class="bg-blue-600 h-12 py-3 px-5 text-white block csm:hidden mb-2 mt-20 mr-2">VER DEPARTAMENTOS </button>
    <button class="bg-blue-600 w-auto h-12 py-3 px-5 text-white csm:text-xs csm:ml-auto csm:px-2 csm:py-2 hidden csm:block mb-2 mt-8">VER TODAS LAS AREAS</button>
  </div>
  <div class="divider mt-2 mb-5"></div>
  <paginate class="w-full flex" name="Departments" :list="DepartmentsList" :per="pagination" >
    <li :key="index" v-for="(item, index) in paginated('Departments')" class="px-2 csm:px-1" :class="widthClass">
      <nuxt-link :to='item.route' class="w-full h-32 hover:aqua-blue hover:text-white flex text-xl csm:mx-0 csm:my-0 justify-center text-center my-auto border-solid border-2 border-gray-200 csm:text-xs"> <span class="my-auto"> {{ item.name }} </span> </nuxt-link>
    </li>
  </paginate>
</div> 
</template>

<script>
export default {
    name: "Departments",
    data() {
        return {
         DepartmentsList: [
            {name:'Pediatría', route:"/Pediatria"},
            {name:'Dermatologia', route: "/Dermatologia"},
            {name:'Cirugía Estética', route:"/CirugíaEstetica"},
            {name:'Análisis Clínico', route:"/AnalisisClinico"},
            {name:'Maternidad', route:"/Maternidad"},
            {name:'Ginecología', route:"/Ginecologia"},
            {name:'Neonatologia', route:"/Neonatologia"},
            {name:'Obstetricia', route:"/Obstetricia"},
            {name:'Consultorios Externos', route:"/ConsultoriosEx"},
            {name:'Emergencias Y Urgencias', route:"/EmergenciayUrgencias"}
        ],
        paginate: ['Departments'],
        windowWidth: null,
        Departments: null

    }
},
  computed: {
    widthClass: function(){
      return "w-1/" + this.pagination
    },
    pagination: function(){
      let screenX = this.windowWidth;
      return screenX < 641 ? 2 : screenX < 1025 ? 4 :5;
    }
  },
  mounted() {
    this.windowWidth =  window.innerWidth;
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  }

};
</script>

<style>

.prev{
  width: 20px;
  height: 20px;
  transform:  scale(1.6);
  margin: 8px;
  border: solid 2px rgba(59, 68, 79, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3px;
}
.next {
  width: 20px;
  height: 20px;
  transform:  scale(1.6);
  margin: 8px;
  border: solid 2px rgba(59, 68, 79, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3px;
}
.divider {
    width: 99%;
    height: 2px;
    background-color: #e2e2e2;
}

</style>