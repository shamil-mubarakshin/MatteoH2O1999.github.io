<template>
    <div class="article-figure">
        <nuxt-img format="webp" sizes="xs:20vw sm:20vw md:20vw lg:20vw xl:20vw xxl:20vw" class="blog-article-image" :src="this.imgPath" :alt="this.alt"/>
        <p class="figure-description">
            {{this.description}}
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'articleImage'
        }
    },
    props: {
        imgPath: String,
        description: String,
        alt: String
    }
}
</script>

<style>
.blog-article-image {
    width: 100%;
    max-height: 90vh;
    object-fit: contain;
}

.figure-description {
    margin: auto;
    width: 95%;
}
</style>