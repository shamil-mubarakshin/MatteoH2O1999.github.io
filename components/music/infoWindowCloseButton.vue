<template>
    <div @click="closeTab();" class="xbutton-wrapper" tabindex="0" role="button" @keydown="keydown($event);" :aria-label="this.description">
        <font-awesome-icon icon="fa-solid fa-xmark" class="xbutton"></font-awesome-icon>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "InfoWindowCloseButton"
        };
    },
    methods: {
        closeTab() {
            this.$emit('closeTab');
        },
        keydown(event) {
            const keyCode = event.keyCode;
            if (keyCode === 13 || keyCode === 32) {
                this.closeTab();
            }
        }
    },
    props: ['title'],
    computed: {
        description() {
            return this.$t('musicCreditsTabs.closeWindow').concat(' ', this.title);
        }
    }
}
</script>

<style>
.xbutton-wrapper:hover {
    cursor: pointer;
}

.xbutton {
    font-size: 20px;
    padding: 7px;
}
</style>