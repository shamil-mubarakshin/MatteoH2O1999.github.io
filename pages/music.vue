<template>
    <div class="music-credits">
        <MusicCreditTab subFolder="movies" :tabTitle="this.musicCreditsTabs.movies" />
        <!-- <MusicCreditTab subFolder="musicals" :tabTitle="this.musicCreditsTabs.musicals" /> -->
        <!-- <MusicCreditTab subFolder="games" :tabTitle="this.musicCreditsTabs.games" /> -->
        <!-- <MusicCreditTab subFolder="albums" :tabTitle="this.musicCreditsTabs.albums" /> -->
        <!-- <MusicCreditTab subFolder="singles" :tabTitle="this.musicCreditsTabs.singles" /> -->
        <!-- <MusicCreditTab subFolder="unfinished" :tabTitle="this.musicCreditsTabs.unfinished" /> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "MusicPage"
        }
    },
    head() {
        return {
            title: `[WIP] Matteo Dell'Acqua | ${this.$t('navbar.music')}`
        }
    },
    async asyncData(context) {
        const musicCreditsTabs = context.app.i18n.t('musicCreditsTabs');
        return {musicCreditsTabs}
    }
}
</script>