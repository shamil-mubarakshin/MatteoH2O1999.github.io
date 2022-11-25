<template>
    <div class="additional-info-tab">
        <div class="info-window-header">
            <h2>{{ title }}</h2>
            <MusicInfoWindowCloseButton @closeTab="closeTab()" class="close-button-div"/>
        </div>
        <p>
            <nuxt-img format="webp" sizes="xs:100px sm:100px md:100px lg:10vw xl:10vw xxl:10vw" :src="this.data.imgPath" class="info-window-image" />
            {{ description }}
        </p>
        <div class="info-window-links">
            Links
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "InfoWindow"
            }
        },
        props: ['data'],
        methods: {
            closeTab() {
                this.$emit('closeTab');
            }
        },
        computed: {
            title() {
                return this.data.lang[this.$i18n.locale].title;
            },
            description() {
                return this.data.lang[this.$i18n.locale].description;
            }
        }
    }
</script>

<style>
.additional-info-tab {
    background-color: darkgrey;
    display: flex;
    flex-direction: column;
    min-width: 250px;
}

.additional-info-tab h2 {
    margin: 5px;
}

.info-window-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

.info-window-image {
    width: 10vw;
    aspect-ratio: 2 / 3;
    float: left;
    min-width: 100px;
}
</style>