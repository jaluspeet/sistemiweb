/**
 * letteralmente fruit Ninja
 *
 * Aggiunge frutta fluttuante sulla base degli elementi della tabella in CRUD, con la possibilità di rimuovere la frutta cliccandoci sopra.
 * @param {PIXI.Application} app - L'istanza di PIXI.Application
 * @param {Object} options - Oggetto con le opzioni per la funzione
 * @param {Object} container - Il container HTML in cui inserire il canvas PIXI
 *
 * Per questa funzione le opzioni esposte sono:
 * @param {number} options.height - L'altezza del canvas PIXI.
 * @param {Object} options.state - componente reattivo di Vue contenente l'array
 *
 * @return {void}
 */
export const pixiFrutta = (app, options, container) => {

    // da non confondere con il container HTML, è un container PIXI
    const fruitsContainer = new PIXI.Container();
    app.stage.addChild(fruitsContainer);

    // array di sprite (che sono emoji, per pigrizia)
    let fruitSprites = [];

    // esplosione per evento di rimozione (click)
    const explosion = new PIXI.Text("💥", { fontSize: 200 });
    explosion.anchor.set(0.5);
    explosion.visible = false;
    fruitsContainer.addChild(explosion);

    // funzione per aggiornare la scena sulla base del contenuto di options.state.fruits
    const addFruits = (fruits) => {
 
        // rimuove tutti i vecchi sprite e i relativi eventi
        fruitSprites.forEach(sprite => {
            sprite.off('pointerdown');
            fruitsContainer.removeChild(sprite);
        });
        fruitSprites = [];

        // aggiunge i nuovi sprite e i relativi eventi
        fruits.forEach(fruit => {
            const emoji = new PIXI.Text(getEmojiForFruit(fruit.name), { fontSize: fruit.gusto + 20 });
            emoji.x = Math.random() * app.screen.width;
            emoji.y = Math.random() * app.screen.height;
            emoji.vx = Math.random() * 2 - 1 * (fruit.freschezza + fruit.gusto) / 100;
            emoji.vy = Math.random() * 2 - 1 * (fruit.freschezza + fruit.gusto) / 100;
            emoji.anchor.set(0.5);
            emoji.rotation = fruit.freschezza * (Math.PI / 180);

            emoji.interactive = true;
            emoji.buttonMode = true;
            emoji.on('pointerdown', () => {
                removeFruit(fruit, emoji);
            });

            // aggiunge il nuovo sprite al container
            fruitsContainer.addChild(emoji);
            fruitSprites.push(emoji);
        });
    };

    // funzione per rimuovere frutta dalla scena e aggiornare options.state.fruits (click)
    const removeFruit = (fruitToRemove, spriteToRemove) => {
        const index = options.state.fruits.findIndex(fruit => fruit === fruitToRemove);
        if (index !== -1) {
            options.state.fruits.splice(index, 1);
            
            explosion.position.set(spriteToRemove.x, spriteToRemove.y);
            explosion.visible = true;
            setTimeout(() => {
                explosion.visible = false;
                fruitsContainer.removeChild(spriteToRemove);
                addFruits(options.state.fruits);
            }, 500);
        }
    };

    // aggiunge la frutta iniziale da options.state.fruits alla scena
    addFruits(options.state.fruits);

    // aggiorna la scena quando options.state.fruits cambia
    Vue.watch(() => options.state.fruits, (newFruits) => {
        addFruits(newFruits);
    }, { deep: true }); 

    // animazione
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

    // ridimensionamento del canvas e della frutta in base al container
    function resize() {
        app.renderer.resize(container.clientWidth, options.height || 300);
        fruitSprites.forEach(sprite => {
            sprite.x = Math.random() * app.screen.width;
            sprite.y = Math.random() * app.screen.height;
        });
    }
    window.addEventListener('resize', resize);
    resize();

    // funzione per ottenere l'emoji corrispondente al nome della frutta
    function getEmojiForFruit(fruitName) {
        switch (fruitName) {
            case "banana": return "🍌";
            case "mela": return "🍎";
            case "ananas": return "🍍";
            case "pesca": return "🍑";
            case "pera": return "🍐";
            case "kiwi": return "🥝";
            case "fragola": return "🍓";
            case "arancia": return "🍊";
            case "ciliegia": return "🍒";
            case "uva": return "🍇";
            case "melone": return "🍈";
            case "limone": return "🍋";
            case "mango": return "🥭";
            case "cocomero": return "🍉";
            case "mirtillo": return "🫐";
            case "cocco": return "🥥";
            default: return "❓";
        }
    }
};

