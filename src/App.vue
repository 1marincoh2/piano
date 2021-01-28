<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
   <router-link to="/dados">Dados</router-link>

  </div>

  <router-view/>
</template>

<script>
import Piano from './components/piano';
import Dados from './components/dados';
export default {
  name: 'App',
  components: {
    Piano,
    Dados
  }
}
</script>




