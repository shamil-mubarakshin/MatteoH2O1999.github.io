<template>
    <article class="about-article">
        <nuxt-content :document="page" />
    </article>
</template>

<script>
export default {
    data() {
        return {
            name: "AboutPage"
        }
    },
    head() {
        return {
            title: `[WIP] Matteo Dell'Acqua | ${this.$t('navbar.about')}`
        }
    },
    async asyncData(context) {
        const locale = context.i18n.locale;
        const page = await context.$content("about", locale).fetch();
        return {
            page
        };
    }
}
</script>

<style>
.about-article {
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
}
</style>