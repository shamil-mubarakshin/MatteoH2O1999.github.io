<template>
    <div class="social-icons">
        <ul>
            <li>
                <a href="">
                    <ion-icon name="logo-youtube"></ion-icon>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "SocialFooter"
            }
        },
    }
</script>

<style>
.social-icons {
    background-color: black;
}

.social-icons .social-icon {
    font-size: 25px;
}

.social-icons ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.social-icons ul li a {
    text-decoration: none;
}
</style>