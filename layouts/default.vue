<template>
    <div>
        <Navbar />
        <Nuxt />
    </div>
</template>

<script>
export default {
    head() {
        return {
            link: [
                {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Merriweather"}
            ]
        }
    }
}
</script>

<style>
body {
    font-family: Merriweather, Arial, Helvetica, sans-serif;
    color: white;
    background-color: rgb(19, 26, 42);
}
</style>