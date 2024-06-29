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
    const fruitsContainer = new PIXI.Container();
    app.stage.addChild(fruitsContainer);

    options.frutta.forEach(fruit => {
        const emoji = new PIXI.Text(getEmojiForFruit(fruit.name), { fontSize: fruit.gusto + 20 });
        emoji.x = Math.random() +  app.screen.width / 2;
        emoji.y = Math.random() + app.screen.height / 2;
        emoji.anchor.set(0.5);
        emoji.rotation = fruit.freschezza * (Math.PI / 180);

        fruitsContainer.addChild(emoji);
    });

    // ridimensionamento del canvas in base al container
    function resize() {
        app.renderer.resize(container.clientWidth, options.height || 300);
    }

    window.addEventListener('resize', resize);
    resize();

    function getEmojiForFruit(fruitName) {
        switch (fruitName) {
            case "banana": return "🍌";
            case "mela": return "🍎";
            case "ananas": return "🍍";
            case "pesca": return "🍑";
            case "pera": return "🍐";
            case "kiwi": return "🥝";
            case "albicocca": return "🍑";
            case "fragola": return "🍓";
            case "arancia": return "🍊";
            case "ciliegia": return "🍒";
            case "uva": return "🍇";
            case "melone": return "🍈";
            default: return "🍉";
        }
    }
};

