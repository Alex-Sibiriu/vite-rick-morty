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
    <div class="container d-flex justify-content-center">

      <div v-if="store.characters.length > 0" class="row row-cols-4"> 
        <Card 
        v-for="character in this.store.characters"
        :key="character.id"
        :image="character.image"
        :name="character.name"
        :status="character.status"
        :species="character.species"
        :gender="character.gender"
        :origin="character.origin.name"
        :location="character.location.name"
        :type="character.type"
        />
      </div>

      <div v-else-if="this.store.characters.length === 0 && this.store.errorString === ''" class="loader my-5"></div>

      <div v-else id="error-msg" class="d-flex justify-content-center w-100">
        <h2 class="text-danger fw-bold fs-1">{{ store.errorString }}</h2>
      </div>
      
    </div>
  </main>
</template>

<style lang="scss" scoped>

#error-msg {
  background: linear-gradient(to right, transparent, white, transparent);
}

.loader {
  width: 50%;
  aspect-ratio: 1;
  color: orange;
  border: 20px solid;
  box-sizing: border-box;
  border-radius: 50%;
  animation: l6 2s infinite linear;
  position: relative;
}
.loader:before {
  content: "";
  position: absolute;
  height: 60px;
  inset: auto calc(50% - 10px) 100%;
  border-radius: 5px 5px 0 0;
  background: 
    linear-gradient(currentColor 0 0) top/100% 30%,
    linear-gradient(currentColor 0 0) top/50% 100%;
  background-repeat: no-repeat;
}
.loader:after {
  content: "";
  position: absolute;
  inset: -8px -10px auto;
  height: 15px;
  background: 
    radial-gradient(farthest-side,currentColor 94%,#0000) left,
    radial-gradient(farthest-side,currentColor 94%,#0000) right;
  background-size: 15px 15px;
  background-repeat: no-repeat;
}
@keyframes l6 {
  0%   {background: conic-gradient(yellowgreen 0     ,#0000 0)}
  12.5%{background: conic-gradient(yellowgreen 45deg ,#0000 46deg)}
  25%  {background: conic-gradient(yellowgreen 90deg ,#0000 91deg)}
  37.5%{background: conic-gradient(yellowgreen 135deg,#0000 136deg)}
  50%  {background: conic-gradient(yellowgreen 180deg,#0000 181deg)}
  62.5%{background: conic-gradient(yellowgreen 225deg,#0000 226deg)}
  75%  {background: conic-gradient(yellowgreen 270deg,#0000 271deg)}
  87.5%{background: conic-gradient(yellowgreen 315deg,#0000 316deg)}
  100% {background: conic-gradient(yellowgreen 360deg,#0000 360deg)}
}

</style>