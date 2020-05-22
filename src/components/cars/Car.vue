<template>
<div class="row row-cols-1 row-cols-md-2">
  <div class="col mb-4">
    <div class="card" style="margin-top: 2vh">
  <div class="card-header">
    {{ car.brand }}
  </div>
  <div class="card-body">
    <p class="card-text">PRICE: {{ car.price }}</p>
    <div class="row">
    <div class="col">
      <input type="number" class="form-control" v-model="quantity">
    </div>
    <div class="col">
      <a href="#" class="btn btn-success">Buy</a>
    </div>
    </div>
  </div>
</div>
  </div>
</div>
</template>

<script>
    export default {
        props: ['car'],
        data() {
          return {
            quantity: 0,
          }
        }
    }
</script>