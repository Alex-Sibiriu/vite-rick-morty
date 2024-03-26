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

  <div class="col pb-3">
    <div class="my-card text-center rounded-3 overflow-hidden h-100"
        :class="`bg-${species}`">
      <img :src="image" class="card-img-top" :alt="name">
      <div class="card-body fw-bold">
        <h3 class="character-title p-3">{{ name }}</h3>
        <p class="character-status">Status: {{ status }}</p>
        <p class="character-species">Specie: {{ species }}</p>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  
  .my-card {
    cursor: pointer;
    border: 10px solid gold;
    box-shadow: 1px 1px 4px black;
    transition: .3s all;
    &:hover {
      scale: 1.2;
      box-shadow: 3px 3px 6px black;
    }
    img {
      border-bottom: 5px solid gold;
    }
  }

  .bg{
    &-Human {
      background-color: lightblue;
    }
    &-Alien {
      background-color: lightgreen;
    }
    &-Humanoid {
      background-color: rgb(252, 80, 80);
    }
    &-unknown {
      background-color: lightpink;
    }
    &-Poopybutthole {
      background-color: lightcyan;
    }
    &-Mythological {
      background-color: lavender;
    }
    &-Animal {
      background-color: peachpuff;
    }
    &-Robot {
      background-color: lightyellow;
    }
    &-Cronenberg {
      background-color: lightsalmon;
    }
    &-Disease {
      background-color: CornflowerBlue;
    }
  }

</style>