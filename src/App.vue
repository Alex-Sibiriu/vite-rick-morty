<script>
  import axios from 'axios';  
  import { store } from './data/store.js';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue'

  export default {
    components: {
      Header,
      Main,
    },
    data() {
      return {
        store,
      }
    },
    methods: {
      getApi() {
        axios.get(this.store.apiUrl)
        .then(result => {
          this.store.characters = result.data.results
        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    mounted() {
      this.getApi()
    },
  }
</script>

<template>

  <body class="pb-5">

    <Header />
    <Main />

  </body>
    
</template>

<style lang="scss" scoped>

  body {
    background-color: peachpuff;
    font-family: 'Trebuchet MS', sans-serif;
  }

</style>
