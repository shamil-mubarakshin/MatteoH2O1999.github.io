<template>
    <nuxt-img format="webp" sizes="xs:40vw sm:40vw md:20vw lg:15vw xl:15vw xxl:15vw" :src="this.data.imgPath" />
</template>

<script>
    export default {
        data() {
            return {
                name: "MovieCard"
            }
        },
        props: ['data']
    }
</script>