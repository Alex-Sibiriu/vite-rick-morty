<script>
  import { store } from '../data/store.js';
  import Card from './partials/Card.vue'

  export default {
    components: {
      Card,
    },
    data() {
      return {
        store,
      }
    },
  }
</script>

<template>
  <main>
    <div class="container">
      <div class="row row-cols-4">
        
        <Card 
        v-for="character in this.store.characters"
        :key="character.id"
        :image="character.image"
        :name="character.name"
        :status="character.status"
        :species="character.species"
        />
        
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>