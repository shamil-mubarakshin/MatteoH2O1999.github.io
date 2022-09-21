<template>
    <header>
        <nav class="nav-bar" id="navigationBar">
            <ul>
                <li class="logo">
                    <NuxtLink to="/" id="indexRef">
                        <img src="~/assets/navbar/logo.png" class="navbar-logo">
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/home" id="homeRef">
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" id="aboutRef">
                        About
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/projects" id="projectsRef">
                        Projects
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/music" id="musicRef">
                        Music
                    </NuxtLink>
                </li>
                <li class="localeSelector">
                    <a class="dropdown-locale" id="language-selector" @click="showLocaleSelector();">
                        Choose language
                    </a>
                    <div class="dropdown-locale-content" id="language-menu">
                        <a @click="changeLocale('en-us');" id="en-us">
                            English
                        </a>
                        <a @click="changeLocale('it-it');" id="it-it">
                            Italiano
                        </a>
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
            change_locale.initializeLocale();
            active_page.updateActivePage();
        },
        methods: {
            showLocaleSelector() {
                change_locale.showLocaleSelector();
            },
            changeLocale(locale) {
                change_locale.changeLocale(locale);
            }
        },
        watch: {
            $route (to, from) {
                active_page.updateActivePage();
            }
        }
    }
</script>

<style>
.nav-bar {
    background-color: gray;
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

@media screen and (max-width:600px) {
    .nav-bar ul {
        flex-direction: column;
        height: fit-content;
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
    }
}

.nav-bar ul li {
    display: inline-block;
    padding: 6px 6px;
}

.nav-bar ul li.active {
    color: darkgray;
}

.nav-bar ul li a {
    text-decoration: none;
    color: inherit;
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
}

.nav-bar .localeSelector .dropdown-locale {
    border: none;
    background-color: inherit;
    font-size: inherit;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    cursor: pointer;
}

.nav-bar .localeSelector .dropdown-locale-content {
    display: none;
    position: absolute;
    z-index: 2;
}

.nav-bar .localeSelector .dropdown-locale-content a {
    display: block;
    cursor: pointer;
}

.nav-bar .localeSelector .dropdown-locale-content a.active {
    color: cornflowerblue;
}

.nav-bar .localeSelector .dropdown-locale-content.show {
    display: block;
}

.shadow {
    display: none;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 1;
}

.shadow.show {
    display: inline;
}
</style>