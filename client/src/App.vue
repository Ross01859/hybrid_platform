<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
// import { setupCSRF } from './config/utils'
import './assets/public/js/checkfun'

if (navigator.userAgent.indexOf('MSIE') !== -1) {
  //IE es6兼容
  require('es6-shim')
  console.log('IE')
}

export default {
  name: 'App',
  beforeMount() {
    // setupCSRF()
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
