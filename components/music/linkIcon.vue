<template>
    <a :href="this.url" target="_blank" :aria-label="this.label">
        <font-awesome-icon icon="fa-brands fa-youtube" v-if="this.platform === 'Youtube'" class="youtube-link"></font-awesome-icon>
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" v-else></font-awesome-icon>
    </a>
</template>

<script>
export default {
    data() {
        return {
            name: 'linkIcon'
        }
    },
    props: ['url', 'platform', 'title'],
    computed: {
        label() {
            let label = this.title;
            if (!label) {
                label = 'Playlist';
            }
            return this.platform.concat(': ', label, ' ', this.$t('tabWarning'));
        }
    }
}
</script>

<style>
.youtube-link {
    color: var(--light-blue);
}
</style>