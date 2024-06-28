// pagine router
import HomePage from './pages/HomePage.js';
import ArgomentoPage from './pages/ArgomentoPage.js';
import JSONPage from './pages/JSONPage.js';
import CRUDPage from './pages/CRUDPage.js';

// script Pixi
import { pixiBase } from './pixi/setup.js';
import { pixiTitolo } from './pixi/titolo.js';
import { pixiFrutta } from './pixi/frutta.js';

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

            // Costruttore per Pixi.js: animazioni sotto la stessa istanza condividono le stesse impostazioni e clock,
            // Se non risulta necessario separarle, si può usare una sola istanza per tutte le animazioni per migliorare le performance.
            const pixiInstance_main = new pixiBase();

            // istanza (titolo)
            pixiInstance_main.newCanvas('pixi-titolo', pixiTitolo, { textString: 'Pixi.js!!!', rotationSpeed: 0, height: 300 });
            pixiInstance_main.newCanvas('pixi-frutta', pixiFrutta, { height: 600 });

            // si aggiungono altre istanze nello stesso modo. 
        },
    });

    app.use(router);
    app.mount('#app');
};
