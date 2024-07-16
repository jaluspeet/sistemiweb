// pagine router
import HomePage from './pages/HomePage.js';
import ArgomentoPage from './pages/ArgomentoPage.js';
import JSONPage from './pages/JSONPage.js';
import CRUDPage from './pages/CRUDPage.js';

// script Pixi
import { pixiBase } from './pixi/setup.js';
import { pixiTitolo } from './pixi/titolo.js';
import { pixiFrutta } from './pixi/frutta.js';

window.onload = async function () {

    // Fetch dei file JSON (poi passati come props)
    const frutta_response = await fetch('/data/frutta.json');
    const fruttaJSON = await frutta_response.json();

    // NOTE: per la pagina JSON a differenza di quella CRUD (che usa uno stato reattivo) si potrebbe
    // fare un fetch direttamente dalla pagina all'interno di un hook (mounted, created, etc.)
    // ma risulta più pulito e fare il fetch qui e passare il JSON come props.
    const alieni_response = await fetch('/data/alieni.json');
    const alieniJSON = await alieni_response.json();

    // Alternativamente, si sarebbe potuto utilizzare AJAX per modificare il JSON direttamente

    // Qui viene creato uno stato reattivo con Vue per passare a CRUDPage e frutta.js
    // lo stesso array e poterlo aggiornare in entrambi i componenti.
    const state = Vue.reactive({
        fruits: fruttaJSON,
    });

    // Definizione delle pagine di Vue Router
    const routes = [
        { path: '/', component: HomePage },
        { path: '/argomento', component: ArgomentoPage },
        { path: '/json', component: JSONPage, props: { alieni: alieniJSON } },
        { path: '/crud', component: CRUDPage, props: { state } }
    ];

    // Creazione dell'istanza di Vue Router
    const router = VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes
    });

    // Creazioen dell'applicazione Vue
    const app = Vue.createApp({
        mounted() {

            // Costruttore di pixiBase, classe che gestisce un istanza di PIXI.Application
            const pixiInstance_main = new pixiBase();

            // Creazione di due canvas PIXI con due funzioni diverse
            // NOTE: Questi due canvas si trovano sotto la stessa istanza di PIXI.Application in quanto non necessitano di timer separati.
            // Se avessero avuto bisogno di timer separati, avremmo dovuto creare due istanze di PIXI.Application.

            // newCanvas è un astrazione scritta per semplificare la creazione di nuovi canvas PIXI, non dovendo ripetere il boilerplate iniziale.
            // Permette di passare un oggetto options che contiene al suo interno sia le opzioni per la funzione che crea il canvas, sia le opzioni per la funzione che gestisce il canvas. (es. width, height o textString, rotationSpeed)
            // per l'implementazione vedere setup.js
            pixiInstance_main.newCanvas('pixi-titolo', pixiTitolo, { textString: 'Pixi.js!!!', rotationSpeed: 0, height: 350 });
            pixiInstance_main.newCanvas('pixi-frutta', pixiFrutta, { state, height: 300 });
        },
    });

    app.use(router);
    app.mount('#app');
};
