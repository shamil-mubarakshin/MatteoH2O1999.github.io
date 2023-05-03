<template>
    <h1>Games</h1>
</template>

<script>
export default {
    data() {
        return {
            name: "GamesPage"
        }
    },
    head() {
        return {
            title: "[WIP] Matteo Dell'Acqua | Games",
            meta: [
                {name: 'description', hid: 'description', content: this.$t('descriptions.games')}
            ]
        }
    }
}
</script>