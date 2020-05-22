<template>
    <div>
        <app-car v-for="car in cars" :key="car.id" :car="car"></app-car>
    </div>
</template>

<script>
    import car from './Car';

    export default {
        data() {
            return {
                cars: [
                    { id: 1, brand: 'BMW', price: '50'},
                    { id: 2, brand: 'Mercedes', price: '55'},
                    { id: 3, brand: 'VW', price: '20'}
                ]
            }
        },
        components: {
            appCar: car
        }
    }
</script>