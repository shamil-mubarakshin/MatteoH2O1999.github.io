<template>
    <header>
        <nav class="nav-bar" id="navigationBar">
            <ul>
                <li class="logo">
                    <NuxtLink :to="localePath('/')" id="indexRef">
                        <nuxt-img format="webp" src="/navbar/logo.png" class="navbar-logo" :alt="$t('altText.navBarLogo')"/>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="localePath('/news')" id="homeRef" class="navbar-hover-effect semi-bold-text">
                        {{ $t('navbar.news') }}
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="localePath('/about')" id="aboutRef" class="navbar-hover-effect semi-bold-text">
                        {{ $t('navbar.about') }}
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="localePath('/projects')" id="projectsRef" class="navbar-hover-effect semi-bold-text">
                        {{ $t('navbar.projects') }}
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="localePath('/music')" id="musicRef" class="navbar-hover-effect semi-bold-text">
                        {{ $t('navbar.music') }}
                    </NuxtLink>
                </li>
                <li class="localeSelector">
                    <button class="dropdown-locale navbar-hover-effect semi-bold-text" id="language-selector" @click="showLocaleSelector();" aria-haspopup="true">
                        {{ $t('navbar.language') }}
                    </button>
                    <div class="dropdown-locale-content" id="language-menu">
                        <button @click.prevent.stop="setLocale('en-us')" id="en-us" class="navbar-hover-effect semi-bold-text">
                            English
                        </button>
                        <button @click.prevent.stop="setLocale('it-it')" id="it-it" class="navbar-hover-effect semi-bold-text">
                            Italiano
                        </button>
                    </div>
                    <div class="shadow" @click="showLocaleSelector();" id="shadow-menu"></div>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import * as change_locale from "../assets/js/change_locale"
import * as active_page from "../assets/js/active_page"
export default {
    data() {
        return {
            name: "Navbar"
        }
    },
    mounted() {
        active_page.updateActivePage();
        change_locale.showActiveLocale(this.$i18n.locale);
        window.addEventListener('keydown', this.handleKeyDown);
    },
    methods: {
        showLocaleSelector(to) {
            change_locale.showLocaleSelector(to);
        },
        setLocale(locale) {
            this.showLocaleSelector();
            this.$i18n.setLocale(locale);
            change_locale.showActiveLocale(locale);
        },
        handleKeyDown(event) {
            const keyCode = event.keyCode;
            if (keyCode === 27) {
                this.showLocaleSelector(false);
            }
        }
    },
    watch: {
        $route (to, from) {
            active_page.updateActivePage();
            change_locale.showActiveLocale(this.$i18n.locale);
        }
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
}
</script>

<style>
.nav-bar {
    background-color: black;
    color: var(--darker-white);
    padding: 10px;
    font-size: 18px;
}

.nav-bar ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 50px;
}

.nav-bar li a.navbar-hover-effect, .dropdown-locale {
    padding: 10px;
    display: block;
}

@media screen and (max-width: 600px) {
    .nav-bar ul {
        flex-direction: column;
        height: fit-content;
        padding: 0px;
    }

    .localeSelector {
        margin: auto;
    }

    .nav-bar ul li.logo {
        margin: auto;
    }

    .nav-bar ul li.logo a img {
        height: auto;
        width: 100%;
        max-width: 200px;
    }

    .nav-bar li a.navbar-hover-effect, .dropdown-locale {
        padding: 3px;
    }
}

.nav-bar li {
    display: block;
    padding: 6px;
}

.navbar-hover-effect {
    text-decoration: none;
    color: inherit;
    transition-duration: 0.5s;
    border-radius: 10px;
    background-color: initial;
}

.navbar-hover-effect:hover, .navbar-hover-effect:focus {
    color: var(--bold-blue);
}

li.active .navbar-hover-effect, .navbar-hover-effect.active {
    color: var(--light-blue);
}

.nav-bar ul li.logo {
    margin-right: auto;
    height: inherit;
    padding: 0 0;
}

.nav-bar ul li.logo img {
    display: block;
    height: 100%;
    width: auto;
    margin: 0;
}

.localeSelector {
    margin-left: auto;
    text-align: center;
}

.nav-bar .localeSelector .dropdown-locale {
    border: none;
    font-size: inherit;
    font-family: inherit;
    font-style: inherit;
    cursor: pointer;
}

.nav-bar .localeSelector .dropdown-locale-content {
    display: none;
    position: absolute;
    background-color: var(--medium-blue);
    color: white;
    z-index: 2;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 10px 50px var(--black-blue-shadow);
}

.nav-bar .localeSelector .dropdown-locale-content button {
    display: block;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    font-style: inherit;
    border: none;
    padding: 6px;
}

.nav-bar .localeSelector .dropdown-locale-content.show {
    display: block;
}

.shadow {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: opacity ease-out 0.25s, visibility ease 0s 0.25s;
}

.shadow.show {
    visibility: visible;
    opacity: 1;
    transition: opacity ease-out 0.25s, visibility ease 0s;
}
</style>