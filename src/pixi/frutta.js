/**
 * Animazione frutta nella pagina CRUD
 *
 * Aggiunge frutta fluttuante sulla base degli elementi della tabella in CRUD
 * @param {PIXI.Application} app - L'istanza di PIXI.Application
 * @param {Object} options - Oggetto con le opzioni per la funzione
 * @param {Object} options.state - compnente reattivo di Vue contenente la lista di frutta
 *
 * Per questa funzione le opzioni esposte sono:
 * @param {number} options.height - L'altezza del canvas PIXI.
 * @param {Object} options.state - Lo stato reattivo di Vue contenente la lista di frutta.
 *
 * @return {void}
 */
export const pixiFrutta = (app, options, container) => {
    
    // Container dove far fluttuare i frutti
    const fruitsContainer = new PIXI.Container();
    app.stage.addChild(fruitsContainer);

    let fruitSprites = [];

    const addFruits = (fruits) => {

        // Mappa per tenere traccia degli sprite esistenti
        const existingSprites = new Map();
        fruitSprites.forEach(sprite => {
            existingSprites.set(sprite.fruitName, { sprite, x: sprite.x, y: sprite.y, vx: sprite.vx, vy: sprite.vy });
        });

        // Rimuove gli sprite esistenti
        fruitSprites.forEach(sprite => {
            sprite.off('pointerdown');
            fruitsContainer.removeChild(sprite);
        });
        fruitSprites = [];

        // Aggiunge gli sprite per i nuovi frutti
        fruits.forEach(fruit => {
            let emoji;

            // Se esiste già uno sprite per questo frutto, lo riutilizza
            if (existingSprites.has(fruit.name)) {
                const existingSprite = existingSprites.get(fruit.name);
                emoji = existingSprite.sprite;
                emoji.x = existingSprite.x;
                emoji.y = existingSprite.y;
                emoji.vx = existingSprite.vx;
                emoji.vy = existingSprite.vy;
            } else {
                emoji = new PIXI.Text(getEmojiForFruit(fruit.name), { fontSize: fruit.gusto + 20 });
                emoji.x = Math.random() * app.screen.width;
                emoji.y = Math.random() * app.screen.height;
                emoji.vx = Math.random() * 2 - 1;
                emoji.vy = Math.random() * 2 - 1;
            }

            // Aggiunge l'emoji al container
            emoji.fruitName = fruit.name;
            emoji.anchor.set(0.5);
            emoji.rotation = fruit.freschezza * (Math.PI / 180);

            emoji.interactive = true;
            emoji.buttonMode = true;
            emoji.on('pointerdown', () => {
                removeFruit(fruit, emoji);
            });

            fruitsContainer.addChild(emoji);
            fruitSprites.push(emoji);
        });
    };

    // Rimuove un frutto dalla scena e dalla lista
    const removeFruit = (fruitToRemove, spriteToRemove) => {
        const index = options.state.fruits.findIndex(fruit => fruit === fruitToRemove);
        if (index !== -1) {
            options.state.fruits.splice(index, 1);
            
            const explosion = new PIXI.Text("🥷🔪💥", { fontSize: 100 });
            explosion.anchor.set(0.5);
            explosion.position.set(spriteToRemove.x, spriteToRemove.y);
            fruitsContainer.addChild(explosion);

            setTimeout(() => {
                fruitsContainer.removeChild(explosion);
                fruitsContainer.removeChild(spriteToRemove);
            }, 500);
        }
    };

    // Aggiunge i frutti iniziali alla scena
    addFruits(options.state.fruits);

    // Ascolta per i cambiamenti nella lista di frutta
    Vue.watch(() => options.state.fruits, (newFruits) => {
        addFruits(newFruits);
    }, { deep: true });


    // Animazione: sposta i frutti e fa rimbalzare quelli che toccano i bordi
    app.ticker.add(() => {
        fruitSprites.forEach(sprite => {
            sprite.x += sprite.vx;
            sprite.y += sprite.vy;

            if (sprite.x < 0 || sprite.x > app.screen.width) {
                sprite.vx *= -1;
            }
            if (sprite.y < 0 || sprite.y > app.screen.height) {
                sprite.vy *= -1;
            }
        });
    });

    // Ridimensiona il canvas quando la finestra viene ridimensionata
    function resize() {
        app.renderer.resize(container.clientWidth, options.height || 300);
    }
    window.addEventListener('resize', resize);
    resize();

    // Mappa i nomi dei frutti agli emoji corrispondenti
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
            case "anguria": return "🍉";
            case "limone": return "🍋";
            case "mango": return "🥭";
            case "cocomero": return "🍉";
            default: return "❓";
        }
    }
};

