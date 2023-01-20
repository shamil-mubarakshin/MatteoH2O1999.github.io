<template>
    <article>
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
            title: "[WIP] Matteo Dell'Acqua | About"
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