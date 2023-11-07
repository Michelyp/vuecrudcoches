<template>
  <h1>Coches</h1>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Marca</th>
        <th scope="col">Modelo</th>
        <th scope="col">Imagen</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="coche in coches" :key="coche">
        <td>{{ coche.marca }}</td>
        <td>{{ coche.modelo }}</td>
        <td><img :src="coche.imagen" style="width: 150px" /></td>
        <td>
          <router-link class="btn btn-dark" :to="'/detalle/' + coche.idCoche"
            >Detalle</router-link
          >
        </td>
        <td>
          <router-link class="btn btn-dark" :to="'/update/' + coche.idCoche"
            >Actualizar</router-link
          >
        </td>
        <td>
          <router-link class="btn btn-danger" :to="'/delete/' + coche.idCoche"
            >Delete</router-link
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
  name: "CochesComponent",
  data() {
    return {
      coches: [],
      status: false
    };
  },
  mounted() {
    service.getCoches().then((result) => {
      this.coches = result;
      this.status = true;
    });
  }
};
</script>

<style></style>
