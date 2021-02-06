<template>

  <div class=" text-center container">
 
  <div class="row align-items-center text-center">
    <div class="col-m">
      <div class="input-group">
        <span class="input-group-text">Nombre</span>
        <input class="form-control"   type="text" />

      
        </div>
      </div>
      <div class="col-m">
      <div class="input-group">
        <span class="input-group-text">tamaño</span>
        <input class="form-control" type="text" />

      
        </div>
      </div>
    
    <div class="col-m">
      <div class="input-group">
        <span class="input-group-text">precio</span>
        <input class="form-control" type="text" />

      
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
          <th scope="col">nombre</th>
          <th scope="col">tamaño</th>
          <th scope="col">precios</th>
        </tr>
      </thead>
      <tbody>
        <tr  >
          <td>  </td>
        </tr>
      </tbody>
    </table>
  </div>  

</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

const ArrayObjetos = defineComponent({
  components: {},
  setup() {
    const statefrutas = reactive({
      frutas: [],
      fruta:{
         nombre:'',
         precio:0,
         color:'',

      }
    });

function guardar() {
  statefrutas.frutas.push()
  };
function eliminar() {
  statefrutas.frutas.pop(); //eliminar el ultimo item agregado
  };

       return {

      statefrutas
      ,
   

    }

  }
})
export default ArrayObjetos
</script>