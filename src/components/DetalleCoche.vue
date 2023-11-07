<template>
  <h1>Detalle</h1>
  <!--Si el coche contiene valores se podra pintar los datos-->
  <table v-if="coche" class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Marca</th>
        <th scope="col">Modelo</th>
        <th scope="col">Conductor</th>
        <th scope="col">Imagen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{coche.marca}}</td>
        <td>{{coche.modelo}}</td>
        <td>{{coche.conductor}}</td>
        <td><img :src="coche.imagen" style="width: 150px" /></td>
        <td>
          <router-link class="btn btn-dark" to="/"
            >Volver</router-link
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ServiceCoche from "./../services/ServiceCoche";
const service = new ServiceCoche();
export default {
  name: "DetalleCoche",

  mounted() {
    var id = this.$route.params.id;
    service.findCoche(id).then(result=> {
      this.coche = result;
      console.log(this.coche);
    });
  },
    data() {
    return {
      //el coche se guardara a nulo 
      coche: null
    };
  }
};
</script>

<style></style>
