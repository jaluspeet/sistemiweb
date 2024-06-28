/**
 * Animazione frutta nella pagina CRUD
 *
 * Aggiunge frutta fluttuante sulla base degli elementi della tabella in CRUD
 * @param {PIXI.Application} app - L'istanza di PIXI.Application
 * @param {Object} options - Oggetto con le opzioni per la funzione
 *
 * Per questa funzione le opzioni esposte sono:
 * @param {number} options.width - La larghezza del rettangolo.
 * @param {number} options.height - L'altezza del rettangolo.
 *
 * @return {void}
 */
export const pixiFrutta = (app, options, container) => {
    
    const rectangle = new PIXI.Graphics();
    rectangle.beginFill(0xFF0000);
    rectangle.drawRect(0, 0, options.width || 100, options.height || 100);
    rectangle.endFill();

    rectangle.x = (app.screen.width - rectangle.width) / 2;
    rectangle.y = (app.screen.height - rectangle.height) / 2;


    app.stage.addChild(rectangle);

    // ridimensionamento del canvas e del testo in base al container
    function resize() {
        app.renderer.resize(container.clientWidth, options.height || 300);
        rectangle.x = app.screen.width / 2;
        rectangle.y = app.screen.height / 2;
    }

    window.addEventListener('resize', resize);
    resize();

};

