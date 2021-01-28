<template>
  <div class="row">
    <div class="col-lg-6 offset-lg-3">
      <ul class="list-group">
        <li
            v-for="(statepiano, index) in statepiano.sonidos"
            v-bind:key="index"
            class="list-group-item"
            v-bind:style="{ 'background-color': statepiano }"
            v-on:click="aplicarSonido(index + 1)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

const Piano = defineComponent({
  components: {},
  setup() {
    const statepiano = reactive({
      sonidos: [
        'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple'
      ]
    });


    function aplicarSonido(index: number) {
      const audio = new Audio();
      audio.src = 'assets/note' + index + '.wav';
      audio.load();
      audio.play();
    }

    return {

      statepiano,
      aplicarSonido,

    }

  }
})
export default Piano
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
