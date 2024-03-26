<script>
  import {store} from '../data/store.js';

  export default {
    data() {
      return {
        store,
      }
    },
    methods: {
      selectSpecies() {
        this.store.apiParam.species = document.getElementById('select-species').value
      }
    },
  }
</script>

<template>
  <header>
    <div class="container text-center pb-5">

      <h1 class="m-0 fw-bold py-5">Rick & Morty</h1>
      <input
        v-model="store.apiParam.name"
        @keyup.enter="$emit('searchChars')"
        type="text"
        placeholder="Search Character"
        class="rounded-2 w-25 p-2">

      <select name="select-species" id="select-species" class="rounded-2 mx-4 p-2 w-25 p-2 bg-success">
        <option value="" class="">All Species</option>
        <option
          v-for="(species, index) in store.allSpecies"
          :key="'s' + index"
          :value="species"
          class="border-bottom border-dark">{{ species }}</option>
      </select>

      <span @click="selectSpecies(), $emit('searchChars')"  class="btn btn-warning">Search</span>
      <span class="btn btn-danger ms-3 ">Reset</span>

    </div>
  </header>
</template>

<style lang="scss" scoped>

  h1 {
    color: chartreuse;
  }

</style>