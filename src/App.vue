<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Trabajos</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/dados">Dados</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Arrays">Arrays</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/pushArray" >Push</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/arrayobjetos" >objetos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 
  <router-view/>
</template>

<script>
import Piano from './components/piano';
import Dados from './components/dados';
import Arrays from './components/Arrays';
import PushArray from './components/pushArray';
import ArrayObjetos from './components/arrayobjetos';

export default {
  name: 'App',
  components: {
    Piano,
    Dados,
    Arrays,
    PushArray,
    ArrayObjetos
  }
}
</script>




