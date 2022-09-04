import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faBusSimple } from '@fortawesome/free-solid-svg-icons';

library.add(faLocationDot, faBusSimple);

createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app');
