<script>
  import { store } from '../../data/store.js';

  export default {
    props: {
      image: String,
      name: String,
      status: String,
      species: String,
      gender: String,
      origin: String,
      location: String,
      type: String,
    },
    data() {
      return {
        store,
      }
    },
  }
</script>

<template>

  <div class="col mt-3">
    <div class="my-card text-center">
      <div class="my-card-inner h-100 w-100 position-relative">
        
        <div class="card-front w-100 h-100">
          <div class="img-box">
            <img :src="image" class="card-img-top rounded-4" :alt="name">
          </div>
          <div class="card-body h-100 fw-bold rounded-4" :class="`bg-${species}`">
            <h3 class="p-3">{{ name }}</h3>
            <p>Status: {{ status }}</p>
            <p>Specie: {{ species }}</p>
          </div>
        </div>
        
        <div class="card-back w-100 h-100 position-absolute" :class="`bg-${species}`">
          <div class="card-body h-100 fw-bold">
            <h3 class="p-3">{{ name }}</h3>
            <p>Gender: {{ gender }}</p>
            <p v-if="type != ''">Type: {{ type }}</p>
            <p>Origin: {{ origin }}</p>
            <p>Location: {{ location }}</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

  .my-card {
    height: 515px;
    position: relative;
    cursor: pointer;
    perspective: 1000px;
    transition: .3s all;
    &:hover {
      scale: 1.3;
      z-index: 10;
      .my-card-inner {
        transform: rotateY(180deg);
        box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.3);
      }
    }
    .my-card-inner {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.8s;
      transform-style: preserve-3d;
      background: #ffa500;
      border: 10px solid #ffa500;
      border-radius: 20px;
      .card-front,
      .card-back {
        top: 0;
        left: 0;
        overflow: hidden;
        backface-visibility: hidden;
        border-radius: 20px;
      }
      .card-back {
        transform: rotateY(180deg);
      }
    }
    .img-box {
      background: #ffa500;
      img {
        border-bottom: 5px solid #ffa500;
      }
    }
  }

  .bg {
    &-Human {
      background: linear-gradient(45deg, #70a1ff, #ffb06e);
    }
    &-Alien {
      background: linear-gradient(45deg, #7ed56f, #58b4ae);
    }
    &-Humanoid {
      background: linear-gradient(45deg, #f90008, #fecfef);
    }
    &-unknown {
      background: linear-gradient(45deg, #ffafb0, #6348dc);
    }
    &-Poopybutthole {
      background: linear-gradient(45deg, #00c3ff, #00ff84);
    }
    &-Mythological {
      background: linear-gradient(45deg, #ffe259, #ff8000);
    }
    &-Animal {
      background: linear-gradient(45deg, #fe8c00, #f83600);
    }
    &-Robot {
      background: linear-gradient(45deg, #ffd500, #ff71e2);
    }
    &-Cronenberg {
      background: linear-gradient(45deg, #ef32d9, #89fffd);
    }
    &-Disease {
      background: linear-gradient(45deg, #4dff88, #ff9191);
    }
  }

</style>