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
            title: `[WIP] Matteo Dell'Acqua | ${this.page.title}`,
            meta: [
                {name: 'description', hid: 'description', content: this.excerpt}
            ]
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
        const months = context.app.i18n.t('utils.months');
        date = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        const elements = [page.excerpt];
        const texts = [];
        for (const element of elements) {
            if (element.type === 'text') {
                texts.push(element.value);
            }
            const children = element.children;
            if (children) {
                elements.push(...children);
            }
        }
        if (texts.length !== 1 || !texts[0]) {
            context.error({statusCode: 500, message: 'Unexpected error. Could not find excerpt text.'});
        }
        const excerpt = texts[0];
        return {page, date, excerpt};
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

.blog-article h1 {
    font-size: 2em;
}

.blog-article-date {
    font-style: italic;
}
</style>