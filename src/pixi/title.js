/**
 * Inizializzazione di PIXI.
 *
 * Crea una nuova applicazione PIXI e la aggiunge al DOM.
 * @return {void}
 */
export const initializePixi = function (containerId, isTransparent = true) {
    const pixiContainer = document.getElementById(containerId);

    this.app = new PIXI.Application({
        width: pixiContainer.offsetWidth,
        height: pixiContainer.offsetHeight,
        antialias: true,
        autodensity: true,
        transparent: isTransparent
    });

    pixiContainer.appendChild(this.app.view);
    this.createText('PixiJS!!!', titleSpeed);
};


/**
 * Creazione del testo.
 *
 * Crea del testo fico e lo aggiunge al canvas per essere usato come titolo.
 * @return {void}
 */
export const createText = function (textString, rotationSpeed) {
    const textStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: this.app.screen.height / 5,
        fontStyle: 'italic',
        fill: 0xE72264,
        wordWrap: true,
        wordWrapWidth: 440,
        stroke: { color: '#4a1850', width: 5, join: 'round' },
        dropShadow: {
            color: '#000000',
            blur: 4,
            angle: Math.PI / 6,
            distance: 6,
        },
    });

    this.text = new PIXI.Text(textString, textStyle);
    this.text.x = this.app.screen.width / 2;
    this.text.y = this.app.screen.height / 2;
    this.text.anchor.set(0.5);
    this.text.skew.set(0, 0);
    this.app.stage.addChild(this.text);

    let time = 0;

    const updateSkew = () => {
        time += 0.01;
        time %= 2 * Math.PI;

        /* Incremento il tempo e ne calcolo il modulo
        per evitare di dover calcolare il seno di un numero che cresce all'infinito
        In questo modo l'input di sin() si mantiene tra 0 e 2*PI, potendo comunque effettuare una rotazione completa */
        this.text.skew.x = Math.sin(time) * rotationSpeed;
        this.text.skew.y = Math.cos(time) * rotationSpeed;

        requestAnimationFrame(updateSkew);
    };
    updateSkew();
};