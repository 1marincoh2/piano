<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view/>
</template>

<script>
import piano from './components/piano.vue'

export default {
  name: 'App',
  components: {
    piano
  }
}
</script>
