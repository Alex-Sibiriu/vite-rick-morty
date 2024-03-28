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
      },

      selectStatus() {
        this.store.apiParam.status = document.getElementById('select-status').value
      },

      resetPage() {
        this.store.apiParam.page = 1;
      },

      resetValues() {
        this.store.apiParam.name = '';
        this.store.apiParam.species = '';
        this.store.apiParam.status = '';
      }
    },
  }
</script>

<template>
  <header>
    <div class="container text-center mb-5">

      <h1 class="m-0 fw-bold py-5">Rick & Morty</h1>
      <input
        v-model.trim="store.apiParam.name"
        @keyup.enter="$emit('searchChars')"
        type="text"
        placeholder="Search Character"
        class="rounded-2 w-25 p-2">

      <select name="select-species" id="select-species" class="rounded-2 mx-4 p-2 w-25 p-2 bg-success">
        <option value="">All Species</option>
        <option
          v-for="(species, index) in store.allSpecies"
          :key="'sp' + index"
          :value="species"
          class="border-bottom border-dark">{{ species }}</option>
      </select>

      <select name="select-status" id="select-status" class="rounded-2 me-4 p-2 w-25 p-2 bg-success">
        <option value="">All Status</option>
        <option
          v-for="(status, index) in store.allStatus"
          :key="'st' + index"
          :value="status"
          class="border-bottom border-dark">{{ status }}</option>
      </select>

      <span @click="selectSpecies(), selectStatus(), resetPage(), $emit('searchChars')" class="btn btn-warning">Search</span>
      <span @click="resetValues(), resetPage(), $emit('searchChars')" class="btn btn-danger ms-3 ">Reset</span>

    </div>
  </header>
</template>

<style lang="scss" scoped>

  h1 {
    color: chartreuse;
  }

</style>