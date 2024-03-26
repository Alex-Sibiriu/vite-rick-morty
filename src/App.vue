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
        this.store.characters = [];
        this.store.errorString = '';
        
        console.log(this.store.apiParam);
        axios.get(this.store.apiUrl, {
          params: this.store.apiParam
        })
        .then(result => {
          this.store.characters = result.data.results
        })
        .catch(error => {
          this.store.errorString = 'Nessun Personaggio Trovato'
        })
      }
    },
    mounted() {
      this.getApi()
    },
  }
</script>

<template>

    <Header 
      @searchChars="getApi" />
    <Main />
    
</template>

<style lang="scss">

  body {
    background-image: url('./assets/img/rick-and-morty.jpg');
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Trebuchet MS', sans-serif;
    padding-bottom: 30px;
  }

</style>
