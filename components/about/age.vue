<template>
    <div class="author-age">
        {{ this.age }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'AboutAge'
        }
    },
    computed: {
        age() {
            const birthday = new Date('1999-05-01T04:00:00Z');
            const now = new Date(Date.now());
            let years = now.getUTCFullYear() - birthday.getUTCFullYear();
            if (now.getMonth() < birthday.getMonth()) {
                years--;
            } else if(now.getMonth() === birthday.getMonth() && now.getDate() < birthday.getDate()) {
                years--;
            }
            return years;
        }
    }
}
</script>

<style>
.author-age {
    display: inline;
}
</style>