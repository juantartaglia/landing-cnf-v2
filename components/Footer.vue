<template>
<div class="bg-blue-600 w-full">
  <div class="flex w-1/2 mx-auto csm:w-full csm:px-8">
        <section class="py-12 w-3/4 clg:px-2 csm:w-full csm:py-0 ml-20 csm:ml-0 cmd:ml-10">
            <h2 class="text-2xl mb-8 csm:text-2xl csm:w-full text-center text-white csm:mt-10" >¡No dudes en contactarnos!</h2>
            <div class="w-full max-w-2xl mx-auto mb-12">

                <form @submit.prevent="submit">

                  <div class="mb-4">
                        <div class="form-group py-5 " :class="{ 'form-group--error': $v.name.$error }">
                            <input placeholder="Nombre y Apellido" class="form__input appearance-none block w-full py-3 px-4 leading-tight text-white bg-transparent border border-gray-200 focus:border-gray-100 focus:outline-none" v-model.trim="$v.name.$model"/>
                            <div class="error text-red-600" v-if="!$v.name.required"> * Requerido</div>
                        </div>
                    <div class="flex flex-wrap mb-4 -mx-2">
                        <div class="form-group csm:w-full px-2 w-1/2 cmd:w-full" :class="{'form-group--error': $v.email.$error}">
                            <input placeholder="Email" class="form__input appearance-none block w-full py-3 px-4 leading-tight text-white bg-transparent border border-gray-200 focus:border-gray-100 focus:outline-none " v-model.trim="$v.email.$model"/>
                            <div class="error text-red-600" v-if="!$v.email.required">* Requerido</div>
                        </div>
                        <div class="form-group csm:w-full px-2 w-1/2 cmd:w-full csm:py-5" :class="{'form-group--error': $v.number.$error }">
                            <input placeholder="Celular" class="form__inputappearance-none block w-full py-3 px-4 leading-tight text-white bg-transparent border border-gray-200 focus:border-gray-100 focus:outline-none" v-model.trim="$v.number.$model"/>
                            <div class="error text-red-600" v-if="!$v.number.required">* Requerido</div>
                        </div>
                    </div>

                    <div class="form-group mb-4" :class="{'form-group--error': $v.text.$error}">
                        <textarea placeholder="Escribí un Mensaje" class="form__input appearance-none block w-full py-3 px-4 leading-tight text-white bg-transparent border border-gray-200 focus:border-gray-100 focus:outline-none text-left" v-model.trim="$v.text.$model"/>
                        <div class="error text-red-600" v-if="!$v.text.required">* Requerido</div>
                    </div>
                    <button @click.prevent="submit" class="buttom text-center leading-none text-white bg-aqua-blue hover:text-blue-800 uppercase px-8 py-4 w-full ">Enviar Mensaje</button>
                  </div>
                </form>
                    <div v-if="submitStatus === 'ERROR' ">
                        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong class="font-bold">ERROR</strong>
                            <span class="block sm:inline">Por favor verificar el formulario</span>
                            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                                <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                            </span>
                            </div> 
                    </div>
                    <div v-if="submitStatus === 'PENDING' ">
                            <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                            <div class="flex">
                                <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                                <div>
                                <p class="font-bold">Enviando</p>
                                <p class="text-sm">Enviando la consulta</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="submitStatus === 'OK' ">
                        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                            <div class="flex">
                                <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                                <div>
                                <p class="font-bold">Correo Enviado</p>
                                <p class="text-sm">La consulta se a enviado!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="submitStatus === 'ERRORA'">
                        <div role="alert">
                            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                Error
                            </div>
                            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                <p>Error al contactar el servidor.</p>
                            </div>
                        </div>
                    </div>

            </div>
        </section>
  </div>
</div>
</template>

<script>
import {required, numeric, email} from 'vuelidate/lib/validators'
import axios from 'axios';

export default {
    name: "Footer",
    data() {
        return {
            name:'',
            email:'',
            number:'',
            text:'',
            submitStatus:'',
        }
    },
        validations: {
           name: {required},
            email: {required, email},
            number: {required, numeric},
            text: {required}
        },
  methods: {
    setName(value){
        this.name= value
        this.$v.name.$touch()
    },
    setEmail(value){
        this.email = value
        this.$v.email.$touch()
    },
    setNumber(value){
        this.number = value
        this.$v.email.$touch()
    },
    setText(value){
        this.text = value
        this.$v.text.$touch()
    },
    async submit(){
        let dataEmail = {
            name: this.name,
            email: this.email,
            number: this.number,
            text: this.text
        };
        
        this.$v.$touch()
        if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        return
      }
      try {
          this.submitStatus ='PENDING'
          let { res } = await axios.post("/api2/sendemail", dataEmail)
          this.submitStatus= 'OK'
           console.log(res);
            this.ResetForm()
      }
      catch(error){
          this.submitStatus= 'ERRORA'
      }

    },
        ResetForm(){
            this.name = "";
            this.email = "";
            this.number = "";
            this.text = "";
        }
    
    } 

}
</script>

<style>

</style>