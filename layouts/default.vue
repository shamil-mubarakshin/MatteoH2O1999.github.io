<template>
    <div class="layout-wrapper">
        <div class="content-wrapper">
            <Navbar />
            <Nuxt />
        </div>
        <SocialFooter class="footer" />
    </div>
</template>

<script>
export default {
    head() {
        return {
            link: [
                {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Merriweather"}
            ],
            script: [
                {type: "module", src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js", body: true},
                {nomodule: true, src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js", body: true}
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
    margin: 0;
}

.layout-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>