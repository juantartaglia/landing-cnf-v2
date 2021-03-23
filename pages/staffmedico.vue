<template>
    <div>
        <Hero v-bind="parameter"></Hero>
        <Staff></Staff>
    </div>
</template>

<script>
import Hero from '../components/HeroStaff'
import Staff from '../components/Staff'


export default {
    components : {Hero},
        data: () => {
            return {
                parameter: {BgClasStaff: {backgroundImage: `url(${require('~/assets/images/portrait-of-beautiful-young-female-doctor-with-ste-PVQ4699@3x.png')}`}, ButtomStaff: "#",  ActionTitleStaff:"PEDIR TURNO ONLINE", DescriStaff:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.", TitleStaff:"50 años de trayectoria", SecondTitleStaff:"Los profesionales de siempre"},
            }
        }
}
</script>

<style>

</style>