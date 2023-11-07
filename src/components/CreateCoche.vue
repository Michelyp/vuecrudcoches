<template>
  <h1 class="mt-5">Create Coche</h1>
  <h2 class="text-success">{{ mensaje }}</h2>
  <form v-on:submit.prevent="insertCoche()" class="container w-50">
    <label class="form-label mt-3">Id Departamento: </label>
    <input
      type="number"
      class="form-control"
      v-model="coche.idCoche"
    />
    <label class="form-label">Marca:</label>
    <input type="text" class="form-control" v-model="coche.marca" />
    <label class="form-label">Modelo:</label>
    <input type="text" class="form-control" v-model="coche.modelo" />
    <label class="form-label">Conductor:</label>
    <input type="text" class="form-control" v-model="coche.conductor" />
    <label class="form-label">Imagen:</label>
    <input type="text" class="form-control" v-model="coche.imagen" />
    <button class="btn btn-success mt-3">Enviar</button>
  </form>
</template>

<script>
import ServiceCoche from "./../services/ServiceCoche";
const service = new ServiceCoche();
export default {
  name: "CreateCoche",
    methods: {

    insertCoche() {
      service.insertCoche(this.coche).then((result) => {
        console.log(result);
        //si todo es correcto redirigira a la página de inicio
       this.$router.push("/");
        this.mensaje = "se ha insertado";
      });
    }
  },
  data() {
    return {
      coche: {
        idCoche: 0,
        marca: "",
        modelo: "",
        conductor: "",
        imagen: ""
      },
      mensaje: ""
    };
  }

};
</script>

<style></style>
