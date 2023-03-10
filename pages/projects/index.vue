<template>
    <div>
        <BlogArticleList :articles="this.articles" />
        <BlogPageSelector :currentPage="this.currentPage" :lastPage="this.lastPage"/>
    </div>
</template>

<script>
const articlesPerPage = 10;
export default {
    data() {
        return {
            name: "ProjectsPage"
        }
    },
    head() {
        return {
            title: "[WIP] Matteo Dell'Acqua | Projects"
        }
    },
    async asyncData(context) {
        const urlParams = new URLSearchParams(context.route.query);
        const pageNumber = urlParams.get('page');
        let page = 0
        if (pageNumber !== null) {
            page = parseInt(pageNumber);
        }
        const articles = [];
        const content = await context.$content('articles', context.i18n.locale, {deep: true}).sortBy('createdAt', 'desc').skip(articlesPerPage * page).fetch();
        articles.push(...content.slice(0, articlesPerPage));
        if (articles.length === 0) {
            context.error({statusCode: 404, message: 'Page not found'});
        }
        const currentPage = page + 1;
        const lastPage = Math.ceil((content.length - articlesPerPage) / articlesPerPage) + page + 1;
        return {articles, currentPage, lastPage};
    }
}
</script>