<script>
  import {store} from '../data/store.js';

  export default {
    data() {
      return {
        store,
      }
    },
  }
</script>

<template>
  <header>
    <div class="container text-center pb-5">
      <h1 class="m-0 fw-bold py-5 text-success">Rick & Morty</h1>
      <input type="text" placeholder="Search Character" class="rounded-2 w-25 p-2">
      <select name="select-status" id="" class="rounded-2 mx-4 p-2">
        <option value="">Select Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <span class="btn btn-warning">Search</span>
      <span class="btn btn-danger ms-3 ">Reset</span>
    </div>
  </header>
</template>

<style lang="scss" scoped>

</style>