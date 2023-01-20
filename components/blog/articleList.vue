<template>
    <div class="list-wrapper">
        {{articles}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'articleList'
        }
    },
    props: ['articles']
}
</script>

<style>
</style>