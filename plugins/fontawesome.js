import Vue from "vue";
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXmark, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;

library.add(faGithub, faYoutube, faXmark, faArrowUpRightFromSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon);

