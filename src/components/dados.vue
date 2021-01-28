<template>
  <div class="text-center">
    <button class="btn btn-success btn-lg" v-on:click="tirarDados()">
      Tirar
    </button>
    <br />
    <img v-bind:src="Dados.dadoIzquierda" alt="Lado Izquierdo" />
    <img v-bind:src="Dados.dadoDerecha" alt="Lado Derecho" />
    <h1 v-if="Dados.numero1 === Dados.numero2">
      <span ><h1 >GANASTE</h1> </span>
    </h1>
  </div>
</template>

<script lang="js">
import { defineComponent, reactive } from "vue";

const Dado = defineComponent({
  components: {},
  setup() {

        const Dados = reactive({

              dadoIzquierda: 'assets/img/dice1.png',
               dadoDerecha: 'assets/img/dice2.png',
               numero1: 1,
               numero2: 2

    });

     function tirarDados() {
     Dados.numero1 = Math.floor(Math.random() * 6) + 1;
      Dados.numero2 = Math.floor(Math.random() * 6) + 1;
    Dados.dadoIzquierda = 'assets/img/dice' + Dados.numero1 + '.png';
       Dados.dadoDerecha = 'assets/img/dice' + Dados.numero2 + '.png';



      }


    return {

   Dados,
   tirarDados

    }

  }
})
export default Dado
</script>
<style scoped>
img {
  background-color: red;
  height: 300px;
  width: 300px;
  margin: 30px;
  border-radius: 20px;
}
.text-center {
  padding-top: 100px;
  height: 100vh;
  background-color: #e9ecef;
}
</style>
