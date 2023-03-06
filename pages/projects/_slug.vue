<template>
    <article>
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
            page = await context.$content('articles', context.i18n.locale, context.params.slug).fetch();
        } catch (error) {
            context.error({statusCode: 404, message: 'Invalid article resource'});
        }
        return {page};
    }
}
</script>