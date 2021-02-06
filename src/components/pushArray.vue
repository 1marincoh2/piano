<template>
  <div class=" text-center container">
    <div class="row align-items-center text-center">
      <div class="col-m">
        <div class="input-group">
          <span class="input-group-text">INGRESAR DATO</span>
          <input class="form-control"  type="text" v-model="state.frut" />
            <div class="col-m">
            <button
              type="button"
              class="btn btn-success btn-lg"
              v-on:click="guardar()"
            >
              Agregar
            </button>
           
            <button
              type="button"
              class="btn btn-info btn-lg"
              v-on:click="eliminarprimero()"
            >
              eliminarprimero
            </button>
          </div>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">frutas</th>
          <th scope="col">accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(frut, index) in state.fruits"
            v-bind:key="index">
          <td>{{ state.fruits }}</td>
   <td>
 <button
              type="button"
              class="btn btn-danger btn-lg"
              v-on:click="Eliminar(state.fruits,index,1)"
            >
              eliminar
            </button>
            </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class=" text-center container">
 
  <div class="row align-items-center text-center">
    <div class="col-m">
      <div class="input-group">
        <span class="input-group-text">Nombre</span>
        <input class="form-control"  v-model="statefrutas.fruta.nombre"   item-text="nombre"
                      item-value="id"  :items="statefrutas.fruta" type="text" />

      
        </div>
      </div>
      <div class="col-m">
      <div class="input-group">
        <span class="input-group-text">color</span>
        <input class="form-control" v-model="statefrutas.fruta.color" item-text="nombre"
                      item-value="id" :items="statefrutas.fruta" type="text" />

      
        </div>
      </div>
    
    <div class="col-m">
      <div class="input-group">
        <span class="input-group-text">precio</span>
        <input class="form-control" v-model="statefrutas.fruta.precio" item-text="nombre"
                      item-value="id" :items="statefrutas.fruta" type="text" />

      
        </div>
      </div>
    
        <div class="col-m">
          <button
            type="button"
            class="btn btn-success btn-lg"
            v-on:click="guardar1()"
          >
            Agregar
          </button>
           
          
         
    </div>
    
  </div>
   <table class="table">
      <thead>
        <tr>
            <th scope="col">id</th>
          <th scope="col">nombre</th>
          <th scope="col">color</th>
          <th scope="col">precios</th>
           <th scope="col">accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fruta of statefrutas.frutas" :key="fruta.nombre" >
          <td> {{fruta.id}} </td>
          <td> {{fruta.nombre}} </td>
          <td> {{fruta.color}} </td>
          <td> {{fruta.precio}} </td>
           <td>
           <button
              type="button"
              class="btn btn-danger btn-lg"
              v-on:click="Eliminar1(statefrutas.frutas,index,1)"
            >
            eliminar
             </button>
           </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="js">
import { defineComponent, reactive } from "vue";

const pushArray = defineComponent({
  components: {},
  setup() {

    const state = reactive({
    fruits:[],
    frut:'',
           });

            const statefrutas = reactive({
    frutas:[],
    fruta:{
      id: 0,
      nombre:'',
      color:'',
      precio:0,


    },
           })

         
function guardar() {
  state.fruits.push(state.frut);
  };

 function Eliminar(array,position,cant){
        array.splice(position,cant);
                return array;
                   };
 


    


function eliminar() {
  state.fruits.pop(); //eliminar el ultimo item agregado
  };

  function eliminarprimero() {
state.fruits.shift(); //eliminar el primer item agregado

  };


  function guardar1() {
  statefrutas.frutas.push(statefrutas.fruta)
  };
  function eliminar1() {
  statefrutas.frutas.pop(); //eliminar el ultimo item agregado
  };
  function Eliminar1(arrays,position,cant){
        arrays.splice(position,cant);
        return arrays

                
                   };
 
    


    return {
    state,
    guardar,
    eliminar,
    eliminarprimero,
    guardar1,
    statefrutas,
    eliminar1,
    Eliminar,
    Eliminar1

    }

  }
})
export default pushArray
</script>
