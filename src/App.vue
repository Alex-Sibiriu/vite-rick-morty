<script>
  import axios from 'axios';  
  import { store } from './data/store.js';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Paginator from './components/partials/Paginator.vue'

  export default {
    components: {
      Header,
      Main,
      Paginator,
    },
    data() {
      return {
        store,
        pageCounter: 0,
      }
    },
    methods: {
      getApi() {
        this.store.characters = [];
        this.store.errorString = '';
        this.store.errorString = '';

        axios.get(this.store.apiUrl, {
          params: this.store.apiParam
        })
        .then(result => {
          this.store.pagesNum = result.data.info.pages;
          this.store.characters = result.data.results;
          this.store.pagesNum = result.data.info.pages;
          this.store.apiParam.name = '';
          if (this.store.allSpecies.length === 0) {
            this.getProps();
          }
        })
        .catch(error => {
          this.store.errorString = 'Nessun Personaggio Trovato'
        })
      },

      getProps() {
        for (let i = 0; i < this.store.pagesNum; i++) {
          axios.get(this.store.apiUrl, {
            params: {
              page: this.pageCounter++,
            }
          })
          .then(result => {
            result.data.results.forEach(character => {
              if (!this.store.allSpecies.includes(character.species)) {
                this.store.allSpecies.push(character.species)
              }
              if (!this.store.allStatus.includes(character.status)) {
                this.store.allStatus.push(character.status)
              }
            });
          })
          .catch(error => {
            console.log(error);
          })
        }
      } 
    },

    mounted() {
      this.getApi()
    },
  }
</script>

<template>

    <Header 
      @searchChars="getApi" 
    />

    <Paginator 
      v-if="store.characters.length > 0"
      @searchChars="getApi"
    />

    <Main />

    <Paginator 
    v-if="store.characters.length > 0"
      @searchChars="getApi"
    />
    
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
