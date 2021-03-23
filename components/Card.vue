<template>

    <div class="flex-wrap w-full h-auto py-5 px-8 csm:px-2 space-be">
        <ul v-for="(speciality, index) in professionalList" :key="index" class="flex w-full">
            <li>
                <p class="text-3xl px-5 py-5 csm:text-xl">{{speciality.name}}</p> 
                <div class="flex flex-wrap csm:flex space-x-2 justify-between">
                    <div v-for="professional in speciality.profesionales" :key="professional.matricula" class="w-auto mb-5 csm:w-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 px-1 cursor-pointer flex">
                        <div class="flex rounded-lg hover:bg-blue-600 hover:text-white">
                            <img class="h-16 w-16 rounded-full mx-5 csm:h-13 csm:w-13 csm:mx-1 py-1 csm:px-1" :src="professional.avatar.fields.file.url">
                            <div class="text-center">
                                <h2 class="text-lg text-left csm:text-xs mt-3 font-bold">{{professional.suffix}} {{professional.firstName}} {{professional.lastName}}</h2>
                                <div class="text-left csm:text-xs">{{professional.speciality}}</div>
                            </div>
                        </div>
                    </div> 
                </div>
            </li>
        </ul>
    </div> 
        
</template>

<script>
export default {
    name: "Card",
   /* data () {
        return {
            objectItem:{ 
                key1: 'Dr. Perino Juan',
                key2: 'Pedriatria'
            }       
        }
    } */
    computed: {
        /*
        professionals(){
            return this.$store.state.professionals;
        }
        */
       specialities() {
            let esp = [];
            let resultado = this.$store.state.professionals.map(elemento => elemento.fields.speciality);
            resultado.map(elemento => {
                console.log(elemento)
                if (esp.indexOf(elemento) === -1) {
                esp.push(elemento);
                }
                return false;
            });
            return esp;
        },
        professionalList() {
            let list = [];
            this.specialities.forEach(esp => {
                let profesionales = this.$store.state.professionals.filter(prof => prof.fields.speciality === esp);
                list.push({ name: esp, profesionales: profesionales.map(el => el.fields) });
            });
            return list;
        }
    },
    mounted(){
        console.log(this.specialities,this.professionalList)
    }
    
}
</script>

<style>

</style>