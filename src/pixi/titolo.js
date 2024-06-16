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

    // lista colori
    const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff];

    // impostazioni stile iniziali
    const textStyle = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 40,
        fontStyle: 'italic',
        fill: colors[options.colorIndex % colors.length],
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

        requestAnimationFrame(updateSkew);
    };
    updateSkew();


    // eventi per cambiare velocità di rotazione e colore
    const buttonSpeedPlus = document.getElementById("titleSpeedPlus");
    const buttonSpeedMinus = document.getElementById("titleSpeedMinus");
    const buttonColor = document.getElementById("titleColor");

    buttonSpeedPlus.addEventListener('click', () => {
        options.rotationSpeed += 1;
    });

    buttonSpeedMinus.addEventListener('click', () => {
        options.rotationSpeed -= 1;
    });

    buttonColor.addEventListener('click', () => {
        options.colorIndex += 1;
        text.style.fill = colors[options.colorIndex % colors.length];
    });
};