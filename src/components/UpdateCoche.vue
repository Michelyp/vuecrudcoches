<template>
  <h1 class="mt-5">Actualizar Coche</h1>
  <h2 class="text-success">{{ mensaje }}</h2>
  <form v-on:submit.prevent="updateCoche()" class="container w-50">
    <label class="form-label mt-3" type="hidden">Id Departamento: </label>
    <label class="form-label">Marca:</label>
    <input type="text" class="form-control" v-model="coche.marca" />
    <label class="form-label">Modelo:</label>
    <input type="text" class="form-control" v-model="coche.modelo" />
    <label class="form-label">Conductor:</label>
    <input type="text" class="form-control" v-model="coche.conductor" />
    <label class="form-label">Imagen:</label>
    <input type="text" class="form-control" v-model="coche.imagen" />
    <button class="btn btn-success mt-3">Actualizar</button>
  </form>
</template>

<script>
import ServiceCoche from './../services/ServiceCoche';
const service = new ServiceCoche();

export default {
    name:"UpdateCoche",
    methods:{
        updateCoche(){
            service.updateCoche(this.coche).then(result=>{
                console.log(result);
                this.$router.push("/");
            })
        }
    },
    data(){
        return{
            coche:{}
        }
    },
    mounted(){
        var id = this.$route.params.id;
        service.findCoche(id).then(result=>{
            this.coche=result;
        })
    }
};
</script>

<style></style>
