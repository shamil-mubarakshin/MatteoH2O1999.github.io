import Vue from "vue";
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(faGithub, faYoutube);

Vue.component('font-awesome-icon', FontAwesomeIcon);

