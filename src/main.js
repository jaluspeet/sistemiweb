// pagine router
import HomePage from './pages/HomePage.js';
import ArgomentoPage from './pages/ArgomentoPage.js';
import JSONPage from './pages/JSONPage.js';
import CRUDPage from './pages/CRUDPage.js';

// istanze di Pixi
import { pixiBase } from './pixi/setup.js';
import { pixiTitolo } from './pixi/titolo.js';

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
            const pixiBaseInstance = new pixiBase();
            pixiBaseInstance.newCanvas('pixi-titolo', pixiTitolo, { height: 140, textString: 'Pixi.js!!!', rotationSpeed: 0 });
        },
    });

    app.use(router);
    app.mount('#app');
};