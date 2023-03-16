<template>
    <div class="social-icons">
        <ul>
            <li>
                <a href="https://www.youtube.com/channel/UCwYnDSpaMPxS6kJpy8vQgNw" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-youtube" class="social-icon youtube-social"></font-awesome-icon>
                </a>
            </li>
            <li>
                <a href="https://github.com/MatteoH2O1999" target="_blank">
                    <font-awesome-icon icon="fa-brands fa-github" class="social-icon github-social"></font-awesome-icon>
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
    background-color: #212121;
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

.social-icons ul li {
    margin: 0px 4px 0px;
}

.social-icons ul li a {
    text-decoration: none;
}

.youtube-social {
    color: var(--youtube-color);
}

.github-social {
    color: var(--github-color);
}
</style>