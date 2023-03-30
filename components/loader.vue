<template>
    <div v-if="loading" class="loading-page">
        <div class="loader-div">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false
        };
    },
    methods: {
        start() {
            this.loading = true;
        },
        finish() {
            this.loading = false;
        },
        fail(error) {
        },
        increase(num) {
        }
    },
}
</script>
<style>
.loader-div {
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    cursor: wait;
}
</style>