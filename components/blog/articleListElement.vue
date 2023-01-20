<template>
    <div class="article-wrapper">
        <div class="article-image-wrapper">
            Image
        </div>
        <div class="article-text-wrapper">
            <h2>{{this.data.title}}</h2>
            <nuxt-content v-if="this.data.excerpt" :document="{body: this.data.excerpt}" />
            <div v-else>
                {{$t('musicBlog.listen')}}
            </div>
        </div>
    </div>
</template>

<script>
function getMusicExcerpt(article, instance) {
    let type;
    if (article.dir.startsWith('/music/movies')) {
        type = instance.$t('musicBlog.score');
    }
    const title = `${type}: ${article.lang[instance.$i18n.locale].title}`
    return {
        title
    }
}
function getArticleExcerpt(article) {
    return {
        title: article.title,
        excerpt: article.excerpt
    }
}
export default {
    data() {
        return {
            name: 'articleListElement'
        }
    },
    props: ['article'],
    computed: {
        data() {
            if (this.article.dir.startsWith('/music')) {
                return getMusicExcerpt(this.article, this);
            }
            return getArticleExcerpt(this.article);
        }
    }
}
</script>

<style>
.article-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>