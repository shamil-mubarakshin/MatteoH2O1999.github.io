<template>
    <div>
        {{ this.url }} {{ this.platform }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'linkIcon'
        }
    },
    props: ['url', 'platform']
}
</script>