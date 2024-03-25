<script>
  import { store } from '../../data/store.js';

  export default {
    props: {
      image: String,
      name: String,
      status: String,
      species: String,
    },
    data() {
      return {
        store,
      }
    },
  }
</script>

<template>

  <div class="col">
    <div class="card">
      <img :src="image" class="card-img-top" :alt="name">
      <div class="card-body">
        <h5 class="character-title">{{ name }}</h5>
        <p class="character-status">Status: {{ status }}</p>
        <p class="character-species">Specie: {{ species }}</p>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  

</style>