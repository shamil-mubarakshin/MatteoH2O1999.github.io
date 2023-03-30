<template>
    <div class="social-icons">
        <ul>
            <li>
                <a href="https://www.youtube.com/channel/UCwYnDSpaMPxS6kJpy8vQgNw" target="_blank" :aria-label="$t('altText.youtubeSocialLogo')">
                    <font-awesome-icon icon="fa-brands fa-youtube" class="social-icon youtube-social"></font-awesome-icon>
                </a>
            </li>
            <li>
                <a href="https://github.com/MatteoH2O1999" target="_blank" :aria-label="$t('altText.githubSocialLogo')">
                    <font-awesome-icon icon="fa-brands fa-github" class="social-icon github-social"></font-awesome-icon>
                </a>
            </li>
        </ul>
        <div class="copyright-notice">
            {{ $t('navbar.copyright') }}
        </div>
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
    background-color: #000;
}

.copyright-notice {
    color: var(--darker-white);
    text-align: center;
    margin: 0px 10px 20px;
    font-size: 12px;
}

.social-icons .social-icon {
    font-size: 25px;
    color: inherit;
}

.social-icons ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: var(--darker-white);
    transition-duration: 0.25s;
}

.social-icons ul:hover {
    color: var(--gray);
    transition-duration: 0.25s;
}

.social-icons ul li {
    margin: 0px 4px 0px;
    color: inherit;
}

.social-icons ul li a {
    text-decoration: none;
    color: inherit;
    transition-duration: 0.25s;
}

.social-icons ul li a:hover {
    color: var(--darker-white);
    transition-duration: 0.25s;
}
</style>