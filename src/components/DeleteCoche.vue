<template>
  <h1>Delete</h1>
</template>

<script>
import ServiceCoche from './../services/ServiceCoche'
const service = new ServiceCoche();
export default {
    name:"DeleteCoche",
    mounted (){
        var id= this.$route.params.id;
        service.deleteCoche(id).then(result=>{
            console.log(result);
            this.$router.push("/");
        })
    }
}
</script>

<style>

</style>