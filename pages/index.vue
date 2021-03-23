<template>
  <div>
    <Hero v-bind="parametros"></Hero>
    <Services></Services>
    <ServicesAnexos></ServicesAnexos>
    <MainInfo></MainInfo>
    <About></About>
    <Shortcuts :items="items"></Shortcuts>
    <Certifications></Certifications>
  </div>
</template>

<script>
import Hero from '../components/Hero'
import Services from '../components/Services'
import ServicesAnexos from '../components/ServicesAnexos'
import MainInfo from '../components/MainInfo'
import About from '../components/About'
import Shortcuts from '../components/Shortcuts'
import Certifications from '../components/Certifications'

export default {
  components: { Hero, ServicesAnexos,About, Services,MainInfo, Shortcuts, Certifications},
   data: () => {
     return {
       items: [
         { title: "Más de 50 años <br> de trayectoria", subTitle: "Conocé la historia de la Clinica y los valores que <br> pregonamos a lo largo de todos estos años", classTW: "w-1/2 h-auto py-12 csm:w-full bg-aqua-blue", buttonActionText: "Conocer Más", buttonActionRoute: "#"},
         { title: "Realizá Residencias <br> Médicas en la clínica", subTitle: "Sumate a nuestro equipo de Docencia e Investigación <br> prestigio y trayectoria aplicada al futuro", classTW: "w-1/2 h-auto py-12 csm:w-full bg-bluish", buttonActionText: "Conocer Más", buttonActionRoute: "#"},
       ],
       parametros: 
         { titulo: "Clínica del Niño & La Familia", secondTitle:`Crecimos para cuidarte, <span class="font-bold">siempre</span>`, descri:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original", actionButtom:"#", actionTitle:"PEDIR TURNO ONLINE", bgClass: {backgroundImage: `url(${require('~/assets/images/happy-family-at-the-zoo-Q6TUV6R@3x.png')}`}},
     }
  }
}
</script>

<style>
</style>
