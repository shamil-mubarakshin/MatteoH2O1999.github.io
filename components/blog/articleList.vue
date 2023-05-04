<template>
    <div class="list-wrapper">
        <BlogArticleListElement v-for="article in this.articles" :key="article.createdAt" :article="article"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'articleList'
        }
    },
    props: ['articles']
}
</script>

<style>
.list-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
}
</style>