<template>
  <div id="cover">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  
  html, body {
    margin: 0;
    padding: 0;
  }
  * {
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Roboto', sans-serif;
  }
  #cover {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
