<template>
    <div v-if="loading" class="loading-page">
        <div class="shadow show">
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