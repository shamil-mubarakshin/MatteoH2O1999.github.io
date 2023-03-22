<template>
    <div :class="{'music-article': this.article.dir.startsWith('/music'), 'article-wrapper': true}">
        <NuxtLink :to="localePath(this.data.url)">
            <div class="article-image-wrapper">
                <nuxt-img format="webp" sizes="xs:20vw sm:20vw md:20vw lg:20vw xl:20vw xxl:20vw" :src="this.data.img" class="article-image-card" />
            </div>
        </NuxtLink>
        <div class="article-text-wrapper">
            <NuxtLink :to="localePath(this.data.url)">
                <h2>{{this.data.title}}</h2>
            </NuxtLink>
            <div class="article-date">
                {{ this.articleDate }}
            </div>
            <nuxt-content v-if="this.data.excerpt" :document="{body: this.data.excerpt}" />
            <p v-else>
                {{$t('musicBlog.listen')}}
            </p>
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
    const img = article.imgPath;
    const url = `/music?id=${article.id}`;
    return {
        title,
        img,
        url
    }
}
function getArticleExcerpt(article) {
    return {
        title: article.title,
        excerpt: article.excerpt,
        img: article.previewImg,
        url: `/projects/${article.slug}`
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
        },
        articleDate() {
            const date = new Date(this.article.createdAt);
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        }
    }
}
</script>

<style>
.article-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 80vw;
}

.article-image-wrapper {
    overflow: hidden;
    height: 30vh;
    width: 20vw;
    margin-right: 50px;
}

.article-image-card {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.music-article .article-image-card {
    object-fit: contain;
}

.article-text-wrapper {
    width: 50vw;
}

.article-text-wrapper a {
    transition-duration: 0.25s;
}

.article-text-wrapper a:hover {
    color: var(--bold-blue);
    transition-duration: 0.25s;
}

.article-wrapper h2 {
    font-size: 30px;
}

@media screen and (max-width: 640px) {
    .article-wrapper {
        max-width: 90vw;
    }

    .article-image-wrapper {
        display: none;
    }

    .article-text-wrapper    {
        width: 90vw;
    }

    .article-wrapper h2 {
        font-size: 24px;
    }
}

.article-wrapper a {
    text-decoration: none;
    color: inherit;
}
</style>