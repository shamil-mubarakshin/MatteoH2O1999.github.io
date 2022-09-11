<template>
    <h1>Error</h1>
</template>

<script>
import { disableActivePage } from '../assets/js/active_page'
function getTitle(error) {
    if (error.statusCode === 404) {
        return "Matteo Dell'Acqua | 404 Not Found";
    }
    return `Matteo Dell'Acqua | ${error.statusCode} ${error.message}`;
}
export default {
    data() {
        return {
            name: "ErrorPage"
        }
    },
    head() {
        return {
        title: getTitle(this.error),
        meta: [
            {charset: "UTF-8"},
            {"http-equiv": "X-UA-Compatible", content: "IE=edge"},
            {name: "viewport", content: "width=device-width, initial-scale=1.0"}
        ]
        }
    },
    props: ['error'],
    mounted() {
        disableActivePage();
    }
}
</script>