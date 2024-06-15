// pagine
import HomePage from './pages/HomePage.js';
import ArgomentoPage from './pages/ArgomentoPage.js';
import JSONPage from './pages/JSONPage.js';
import CRUDPage from './pages/CRUDPage.js';

// script
import { initializePixi, createText } from './pixi/title.js';

window.onload = function () {
    const routes = [
        { path: '/', component: HomePage },
        { path: '/argomento', component: ArgomentoPage },
        { path: '/json', component: JSONPage },
        { path: '/crud', component: CRUDPage }
    ];

    const router = VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes
    });

    const app = Vue.createApp({
        mounted() {
            this.initializePixi();
        },
        methods: {
            initializePixi,
            createText,
        },
    });
    
    app.use(router);
    app.mount('#app');

};