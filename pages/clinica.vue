<template>
  <div>
    <Hero v-bind="parametros"></Hero>
    <Departments></Departments>
    <About></About>
    <Shortcuts :items="items"></Shortcuts>
  </div>
</template>

<script>

import Hero from '../components/Hero'
import Departments from '../components/Departments'
import Shortcuts from '../components/Shortcuts'
import About from '../components/About'

export default {
  components: { Hero, About, Shortcuts, Departments},
  data: () => {
     return {
       items: [
         { title: "Servicio de Telemedicina", subTitle: "Conocé la historia de la Clinica y los valores que <br> pregonamos a lo largo de todos estos años", classTW: "w-1/2 h-auto py-12 csm:w-full purple-s", buttonActionText: "ACCEDER SERVICIO", buttonActionRoute: "#"},
         { title: "Solicitar Turno Online", subTitle: "Sumate a nuestro equipo de Docencia e Investigación <br> prestigio y trayectoria aplicada al futuro", classTW: "w-1/2 h-auto py-12 csm:w-full bg-bluish", buttonActionText: "Conocer Más", buttonActionRoute: "#"},
       ],
       parametros: 
         { titulo: "Incorporamos nuevos Servicios.", secondTitle:`Crecimos para cuidarte, <span class="font-bold">siempre</span>`, descri:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original", actionButtom:"#", actionTitle:"PEDIR TURNO ONLINE", bgClass: {backgroundImage: `url(${require('~/assets/images/attentive-doctor-working-on-computer-in-clinic-FW2VS6C@3x.png')}`}},
  }
},
}
</script>

<style>

</style>