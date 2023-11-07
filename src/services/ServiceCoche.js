import axios from "axios";
import Global from "./../Global";
export default class ServiceCoches{
    getCoches(){
        return new Promise(function (resolve){
            var request = "api/coches";
            var url = Global.urlApiCoches + request;
            var coches=[];
            axios.get(url).then(response=>{
                coches = response.data;
                resolve(coches);
            })
        })
    }
    insertCoche (coche){
        return new Promise(function(resolve){
            var request ="api/coches/insertcoche";
            var url = Global.urlApiCoches + request;
            const requestOptions={
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(coche)
            }

            fetch(url, requestOptions)
            .then(response =>  {
                resolve(response)
            });
            
            // axios.post(url,coche).then(response =>{
            //     resolve(response);
            // })
        })
    }
    findCoche(id){
        return new Promise(function (resolve){
            var request ="api/coches/findcoche/" + id;
            var url = Global.urlApiCoches + request;
            var coche={};
            axios.get(url).then(response=>{
                coche=response.data;
                resolve(coche);
            })
        })
    }
    updateCoche(coche){
        return new Promise(function(resolve){
            var request="api/coches/updatecoche";
            var url = Global.urlApiCoches + request;
            axios.put(url,coche).then(response=>{
                resolve(response);
            })
        })
    }
    deleteCoche(id){
        return new Promise(function(resolve){
            var request = "api/coches/deletecoche/" +id;
            var url = Global.urlApiCoches +request;
            axios.get(url).then(response=>{
                resolve(response);
            })
        })
    }
}