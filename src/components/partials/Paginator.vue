<script>
  import { store } from '../../data/store.js';

  export default {
    data() {
      return {
        store,
      }
    },
    methods: {
      changePage(boolean) {
        if (boolean) {
          this.store.apiParam.page++
        } else {
          this.store.apiParam.page--
        }
      }
    },
  }
</script>

<template>
  <div class="container d-flex justify-content-evenly my-3 py-2 fw-bold">
    <span
      :class="{'disabled' : store.apiParam.page <= 1}"
      @click="changePage(false), $emit('searchChars')"
      class="btn btn-info d-flex align-items-center fw-bold">Prev</span>

    <h2 class="text-white">Pagina {{ store.apiParam.page }} su {{ store.pagesNum  }}</h2>

    <span
      :class="{'disabled' : store.apiParam.page >= store.pagesNum }"
      @click="changePage(true), $emit('searchChars')"
      class="btn btn-info d-flex align-items-center fw-bold">Next</span>
  </div>
</template>

<style lang="scss" scoped>

div {
  background: linear-gradient(to right, transparent, black, transparent);
}

</style>