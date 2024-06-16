/**
 * Testo che gira gira e non si ferma mai.
 *
 * Crea del testo fico e lo aggiunge al canvas per essere usato come titolo.
 * @param {PIXI.Application} app - L'istanza di PIXI.Application.
 * @param {Object} options - Oggetto contenente le opzioni
 *
 * Per questa funzione le opzioni esposte sono:
 * @param {string} options.textString - Il testo da visualizzare.
 * @param {number} options.rotationSpeed - La velocità di rotazione del testo.

 * @return {void}
 */
export const pixiTitolo = (app, options) => {

    // impostazioni stile iniziali
    const textStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 40,
        fontStyle: 'italic',
        wordWrap: true,
        wordWrapWidth: 440,
        fill: '#E72264',
        stroke: { color: '#4A1850', width: 5, join: 'round' },
        dropShadow: {
            angle: Math.PI / 6,
            distance: 6,
        },
    });

    // posizione testo
    const text = new PIXI.Text(options.textString, textStyle);
    text.x = app.screen.width / 2;
    text.y = app.screen.height / 2;
    text.anchor.set(0.5);
    text.skew.set(0, 0);

    // aggiungi al canvas
    app.stage.addChild(text);

    // animazione
    let time = 0;

    const updateSkew = () => {
        time += 0.01;
        time %= 2 * Math.PI;

        /* modulo del seno/coseno del frame per impostare la rotazione, evitando di fare operazioni
        trigonometriche su numeri crescenti all'infinito, che potrebbe risultare costoso computazionalmente.
        un approccio alternativo (peggiore) poteva essere di limitare il framerate */
        text.skew.x = Math.sin(time) * options.rotationSpeed;
        text.skew.y = Math.cos(time) * options.rotationSpeed;

        // eventi per cambiare velocità di rotazione e colore
        const buttonSpeedPlus = document.getElementById("titleSpeedPlus");
        const buttonSpeedMinus = document.getElementById("titleSpeedMinus");
        const buttonColor = document.getElementById("titleColor");

        buttonSpeedPlus.addEventListener('click', () => {
            options.rotationSpeed += 0.01;
        });

        buttonSpeedMinus.addEventListener('click', () => {
            options.rotationSpeed -= 0.01;
        });

        buttonColor.addEventListener('click', () => {
            const color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
            textStyle.fill = color;
            text.style = textStyle;
        });

        requestAnimationFrame(updateSkew);
    };

    updateSkew();
};