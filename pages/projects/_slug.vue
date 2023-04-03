<template>
    <article class="blog-article">
        <h1>{{page.title}}</h1>
        <div class="blog-article-date">{{date}}</div>
        <nuxt-content :document="page" />
    </article>
</template>

<script>
export default {
    data() {
        return {
            name: 'projectsArticle'
        }
    },
    head() {
        return {
            title: `[WIP] Matteo Dell'Acqua | ${this.page.title}`
        }
    },
    async asyncData(context) {
        let page
        try {
            page = await context.$content('articles', context.i18n.locale, {deep: true}).where({slug: context.params.slug}).fetch();
        } catch (error) {
            context.error({statusCode: 404, message: 'Invalid article resource'});
        }
        if (page.length !== 1) {
            context.error({statusCode: 404, message: 'Invalid article resource'});
        }
        page = page.at(0);
        let date = new Date(page.createdAt);
        date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return {page, date};
    }
}
</script>

<style>
.blog-article {
    max-width: 50vw;
    margin: auto;
    text-align: left;
    min-width: min(85vw, 600px);
    width: 100%;
}

.blog-article-date {
    font-style: italic;
}
</style>