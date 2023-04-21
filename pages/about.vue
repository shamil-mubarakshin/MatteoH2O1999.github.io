<template>
    <article class="about-article">
        <div class="about-section">
            <nuxt-img format="webp" src="/homePage/homePagePhoto.png" class="about-image" />
            <div class="about-paragraph">
                <nuxt-content :document="aboutParagraph" />
            </div>
        </div>
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
        const aboutParagraph = await context.$content("about", locale).fetch();
        return {
            aboutParagraph
        };
    }
}
</script>

<style>
.about-article {
    width: 70vw;
    margin-left: auto;
    margin-right: auto;
}

.about-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
}

.about-paragraph {
    flex-grow: 1;
}

.about-image {
    width: 30vw;
    aspect-ratio: auto 2 / 3;
    flex-grow: 0;
}

@media screen and (max-width: 600px) {
    .about-article {
        width: 90vw;
    }

    .about-section {
        flex-direction: column;
    }

    .about-image {
        width: 100%;
        flex-grow: initial;
    }
}
</style>