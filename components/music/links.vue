<template>
    <div>
        <h3 v-if="this.playlists.length > 0">
            {{ $t('musicCreditsTabs.listen') }}
            <MusicLinkIcon v-for="(playlist, index) in this.playlists" :key="playlist.url" class="playlist-link" :platform="playlist.platform" :url="playlist.url" :title="playlist.name || `Playlist ${index + 1}`"/>
        </h3>
        <h3 v-else>
            {{ $t('musicCreditsTabs.listen') }}
            <MusicLinkIcon v-for="platform in Object.keys(tracks[0].url)" :key="platform" class="playlist-link" :platform="platform" :url="tracks[0].url[platform]" :title="tracks[0].name" />
        </h3>
        <table v-if="this.playlists.length > 0" role="presentation">
            <tbody>
                <tr v-for="track in this.tracks" :key="track.name">
                    <td v-if="useExplicitTrackNumbers">
                        {{ track.order }}
                    </td>
                    <td>
                        {{ track.name }}
                    </td>
                    <td>
                        <MusicLinkIcon class="track-link" v-for="platform in Object.keys(track.url)" :key="platform" :platform="platform" :url="track.url[platform]" :title="track.name"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'musicLinks'
        }
    },
    props: ['data'],
    computed: {
        playlists() {
            return this.data.links.playlists;
        },
        tracks() {
            return this.data.links.tracks;
        },
        useExplicitTrackNumbers() {
            return this.data.links['track-order'];
        }
    }
}
</script>

<style>
.playlist-link {
    display: inline;
}

.playlist-link, .track-link {
    font-size: 20px;
}
</style>