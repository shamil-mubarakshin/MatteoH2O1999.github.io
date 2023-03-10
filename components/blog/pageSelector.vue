<template>
    <div class="page-selector-wrapper">
        Page Selector {{ this.currentPage }} {{this.lastPage}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'pageSelector'
        }
    },
    props: {
        currentPage: Number,
        lastPage: Number
    }
}
</script>

<style>
</style>