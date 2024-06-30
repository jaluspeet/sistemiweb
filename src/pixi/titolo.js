/**
 * Testo che gira gira e non si ferma mai.
 *
 * Crea del testo fico e lo aggiunge al canvas per essere usato come titolo.
 * @param {PIXI.Application} app - L'istanza di PIXI.Application.
 * @param {Object} options - Oggetto contenente le opzioni
 * @param {Object} container - Il container HTML in cui inserire il canvas PIXI
 *
 * Per questa funzione le opzioni esposte sono:
 * @param {string} options.textString - Il testo da visualizzare.
 * @param {number} options.rotationSpeed - La velocità di rotazione del testo.
 *
 * @return {void}
 */
export const pixiTitolo = (app, options, container) => {

    const fonts = ["Arial", "Verdana", "Georgia", "Times New Roman", "Courier New", "Brush Script MT", "Comic Sans MS", "Impact", "Lucida Console", "Tahoma", "Trebuchet MS", "Webdings"];

    // impostazioni stile iniziali
    const textStyle = new PIXI.TextStyle({
        fontFamily: fonts[0],
        fontWeight: 'bold',
        fontSize: app.screen.width / 10,
        fontStyle: 'italic',
        wordWrap: true,
        fill: '#E72264',
        dropShadow: {
            angle: Math.PI / 6,
            distance: 6,
        },
    });

    // posizione testo
    const text = new PIXI.Text(options.textString, textStyle);
    text.x = app.screen.width / 4;
    text.y = app.screen.height / 2;
    text.anchor.set(0.5);
    text.skew.set(0, 0);

    // aggiungi al canvas
    app.stage.addChild(text);

    // eventi per cambiare velocità di proprietà del testo
    const buttonPlus = document.getElementById("titlePlus");
    const buttonMinus = document.getElementById("titleMinus");
    const buttonColor = document.getElementById("titleColor");
    const buttonRotation = document.getElementById("titleRotation");
    const buttonFont = document.getElementById("titleFont");

    buttonPlus.addEventListener('click', () => { text.style.fontSize += 10; });
    buttonMinus.addEventListener('click', () => { text.style.fontSize -= 10; });
    buttonColor.addEventListener('click', () => text.style.fill = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"));
    buttonRotation.addEventListener('click', () => options.rotationSpeed += 1);
    buttonFont.addEventListener('click', () => text.style.fontFamily = fonts[(fonts.indexOf(text.style.fontFamily) + 1) % fonts.length]);

    // ridimensionamento del canvas e del testo in base al container
    function resize() {
        app.renderer.resize(container.clientWidth, options.height || 300);
        text.x = app.screen.width / 2;
        text.y = app.screen.height / 2;
        text.style.fontSize = app.screen.width / 10;
    }

    window.addEventListener('resize', resize);
    resize();

    // animazione
    let time = 0;

    // Normalmente si utilizzerebbe app.ticker.add() per aggiornare la scena, ma in questo caso
    // si avrebbero delle interferenze con gli eventi di listen dei pulsanti (doppio click, ecc.)
    // Una soluzione alternativa è quella di fare debounce degli eventi
    const updateSkew = () => {
        time += 0.01;
        time %= 2 * Math.PI;

        /* modulo del seno/coseno del frame per ottimizzare la rotazione, evitando di fare operazioni
        trigonometriche su numeri crescenti all'infinito. Un ulteriore ottimizzazione potrebbe essere limitare il framerate,
        ma diventa complicato se non si utilizza app.ticker */
        text.skew.x = Math.sin(time) * options.rotationSpeed;
        text.skew.y = Math.cos(time) * options.rotationSpeed;

        requestAnimationFrame(updateSkew);
    };

    updateSkew();
};
