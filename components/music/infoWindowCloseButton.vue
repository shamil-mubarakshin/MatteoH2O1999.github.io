<template>
    <div @click="closeTab();" class="xbutton-wrapper">
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