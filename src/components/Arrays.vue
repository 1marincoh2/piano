<template>
  <div class="text-center">
      {{recorrer}}
      <br/><br/>
      <console class="log">{{concatenar}}</console>
<br/><br/>
       <console class="log">{{copy}}</console>
  </div>

  
</template>
   

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";



const Arrays = defineComponent({
  components: {},
  setup() {
      const data = [
          {nombre:"jose ", ApellidoPaterno:"marin",ApellidoMaterno:"coh"},
          {nombre:"alina Sayuri", ApellidoPaterno:"marin",ApellidoMaterno:"canul"},
          {nombre:"laisha", ApellidoPaterno:"marin",ApellidoMaterno:"coh"},
          {nombre:"amir", ApellidoPaterno:"marin",ApellidoMaterno:"coh"},
          {nombre:"mildred", ApellidoPaterno:"marin",ApellidoMaterno:"coh"}
          
          ];
    const data1 = [
          {nombre:"alberto", ApellidoPaterno:"marin",ApellidoMaterno:"coh"},
          {nombre:"Sayuri", ApellidoPaterno:"marin",ApellidoMaterno:"canul"},
          {nombre:"laisha", ApellidoPaterno:"marin",ApellidoMaterno:"coh"},
          {nombre:"amir", ApellidoPaterno:"marin",ApellidoMaterno:"coh"},
          {nombre:"mildred", ApellidoPaterno:"marin",ApellidoMaterno:"coh"}
          
          ];

            const recorrer = computed(() => data.map(function (label) {
      return label.nombre.length
    }));
    
     const concatenar = data.concat(data1); 

     const copy = data.copyWithin(2,0); 

    return {
      data,
      recorrer,
      concatenar,
      copy,
        }

  }
})
export default Arrays
</script>
