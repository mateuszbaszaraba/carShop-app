<template>
    <div>
        <h1>Home page</h1>
        <p>Funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>