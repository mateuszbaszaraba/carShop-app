<template>
    <div>
        <app-car v-for="car in cars" :key="car.id" :car="car"></app-car>
    </div>
</template>

<script>
    import car from './Car';

    export default {
        components: {
            appCar: car
        },
        computed: {
            cars() {
                return this.$store.getters.cars
            }
        }
    }
</script>