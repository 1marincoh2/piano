<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <br/>
    <router-link to="/dados">Dados</router-link>
<br/>
<router-link to="/Arrays">Arrays</router-link>

  </div>

  <router-view/>
</template>

<script>
import Piano from './components/piano';
import Dados from './components/dados';
import Arrays from './components/Arrays';

export default {
  name: 'App',
  components: {
    Piano,
    Dados,
    Arrays
  }
}
</script>




