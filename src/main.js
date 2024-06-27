// pagine router
import HomePage from './pages/HomePage.js';
import ArgomentoPage from './pages/ArgomentoPage.js';
import JSONPage from './pages/JSONPage.js';
import CRUDPage from './pages/CRUDPage.js';

// script Pixi
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

            // Astrazione per creare istanze di Pixi (per migliore compatibilita con Vue). 
            // Il codice delle istanze e del costruttore si trova in ./pixi/

            // costruttore per Pixi.js
            const pixiBaseInstance = new pixiBase();

            // istanza (titolo)
            pixiBaseInstance.newCanvas('pixi-titolo', pixiTitolo, { textString: 'Pixi.js!!!', rotationSpeed: 0, height: 300 });

            // si aggiungono altre istanze nello stesso modo. 
        },
    });

    app.use(router);
    app.mount('#app');
};
