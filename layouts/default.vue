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
                    {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap", body: true}
                ]
            }
        }
    }
</script>

<style>
body {
    font-family: Merriweather, Arial, Helvetica, sans-serif;
    color: white;
    background-color: var(--dark-blue);
    margin: 0;
}

.bold-test {
    font-weight: bold;
}

.semi-bold-text {
    font-weight: 600;
}

.layout-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

:root {
    --dark-blue: #141526;
    --dark-blue-shadow: #080814;
    --bold-blue: #6060ff;
    --doc-blue: #095589;
    --medium-blue: #202035;
    --light-blue: #1cbfff;
    --darker-white: #dddddd;
    --gray: #505050;
    --black-blue-shadow: #050508;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>