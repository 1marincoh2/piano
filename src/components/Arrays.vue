<template>
  <div class="text-center">
      {{recorrer}}
      <br/><br/>
      {{concatenar}}
<br/><br/>
       {{copy}}
       <br/><br/>
       {{length1}}
       
       
       
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
          {nombre:"alberto", ApellidoPaterno:"marin",ApellidoMaterno:"coh",cantida:23},
          {nombre:"Sayuri", ApellidoPaterno:"marin",ApellidoMaterno:"canul",cantida:23},
          {nombre:"laisha", ApellidoPaterno:"marin",ApellidoMaterno:"coh",cantida:23},
          {nombre:"amir", ApellidoPaterno:"marin",ApellidoMaterno:"coh",cantida:23},
          {nombre:"mildred", ApellidoPaterno:"marin",ApellidoMaterno:"coh",cantida:23}
          
          ];

          const edades = [27,24,20,18,6];

            const recorrer = computed(() => data1.map(function (label) {
            
      return {cantidad :label.nombre.length} 
         }));

    const length1=data.length
    
     const concatenar = data.concat(data1); 

     const copy = data.copyWithin(2,0); 

 

     

    return {
        data1,
        length1,
      data,
      recorrer,
      concatenar,
      copy,
      edades,
        }

  }
})
export default Arrays
</script>
