<template>
    <div class="article-figure">
        <nuxt-img format="webp" sizes="xs:85vw sm:85vw md:85vw lg:50vw xl:50vw xxl:50vw" class="blog-article-image" :src="this.imgPath" :alt="this.alt"/>
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
    aspect-ratio: auto 1 / 1;
}

.figure-description {
    margin: auto;
    width: 95%;
    font-style: italic;
    font-size: 15px;
}
</style>