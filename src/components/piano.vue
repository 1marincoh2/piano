<template>
  <div class="row">
    <div class="col-lg-6 offset-lg-3">
      <ul class="list-group">
        <li
            v-for="(sonido, index) in sonidos"
            v-bind:key="index"
            class="list-group-item"
            v-bind:style="{ 'background-color': sonido }"
            v-on:click="aplicarSonido(index + 1)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script lang="js">
import { reactive } from "vue";

export default {
  components: {},
  setup() {
    const statepiano = reactive({

      sonidos: [
        'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple'
      ]
    });


    function aplicarSonido(index) {
      const audio = new Audio();
      audio.src = 'assets/note' + index + '.wav';
      audio.load();
      audio.play();
    };

    return {

      statepiano,
      aplicarSonido,

    }

  }
}
</script>
<style scoped>
.list-group-item {
  height: 80px;
  cursor: pointer;
}
.list-group-item:active {
  opacity: 0.7;
}
</style>
