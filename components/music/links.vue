<template>
    <div>
        <h3>
            Listen
            <div v-for="playlist in this.playlists" :key="playlist.id">
                <MusicLinkIcon :platform="playlist.platform" :url="playlist.url"/>
            </div>
        </h3>
        <table>
            <tr v-for="track in this.tracks" :key="track.id">
                <td>
                    {{ track.name }}
                </td>
                <td>
                    <div v-for="platform in Object.keys(track.url)" :key="platform.id">
                        <MusicLinkIcon :platform="platform" :url="track.url[platform]"/>
                    </div>
                </td>
            </tr>
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
</style>