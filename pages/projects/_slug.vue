<template>
    <article class="blog-article">
        <h1>{{page.title}}</h1>
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
        return {page};
    }
}
</script>

<style>
.blog-article {
    max-width: 50vw;
    margin: auto;
    text-align: left;
    min-width: min(85vw, 600px);
}
</style>