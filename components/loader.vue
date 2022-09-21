<template>
    <div v-if="loading" class="loading-page">
        Loading...
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
            }
        },
    }
</script>