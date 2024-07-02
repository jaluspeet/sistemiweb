const ArgomentoPage = {
    template: `
    <div class="container">
        <div class="row">
            <div class="container col-lg-6 p-4">
                <section class="article-box p-4">
                    <h1>Esempio di applicazione</h1>
                    <p>
                        Ecco un esempio semplice per iniziare:
                    </p>
                    <pre><code class="language-javascript">
// Importa PixiJS
import * as PIXI from 'pixi.js';

// Crea un'applicazione Pixi
const app = new PIXI.Application();

// Aggiungi l'applicazione al DOM
document.body.appendChild(app.view);

// Crea un rettangolo rosso
const rectangle = new PIXI.Graphics();
rectangle.beginFill(0xff0000);
rectangle.drawRect(0, 0, 200, 100);
rectangle.endFill();

// Aggiungi elemento alla scena
app.stage.addChild(rectangle);
                    </code></pre>
                    <p>
                        Questo esempio crea un'applicazione PixiJS vuota e aggiunge un rettangolo rosso al canvas.
                    </p>
                </section>
            </div>

            <div class="container col-lg-6 p-4">
                <section class="article-box p-4">
                    <h1>Il titolo</h1>
                    <p>
                    pixiTitolo è la funzione che crea e anima il titolo della pagina. Il testo ruota su se stesso a una velocità regolata, insieme ad altri valori, da options, oggetto passato dal chiamante.
                    </p>
                    <pre><code class="language-javascript">
time += 0.01;
time %= 2 * Math.PI;

text.skew.x = Math.sin(time) * options.rotSp;
text.skew.y = Math.cos(time) * options.rotSp;

requestAnimationFrame(updateSkew);
                    </code></pre>
                    <p>
                        Questo frammento di codice gestisce l'animazione del testo, aggiornando l'angolo di skew in base al tempo e alla velocità di rotazione. Utilizza il modulo di seno e coseno per ottenere un animazione fluida mantenendo un costo computazionale accettabile.
                    </p>
                </section>
            </div>
        </div>

        <div class="row">
            <div class="container col-lg-6 p-4">
                <section class="article-box p-4">
                    <h1>Esempio di animazione</h1>
                    <p>
                        PixiJS ha performance relativamente buone in quanto sfrutta la GPU per il rendering, grazie a WebGL (Implementazione in browser di OpenGL).
                    </p>
                    <p>
                        Ecco un esempio di animazione di un cerchio che si muove:
                    </p>
                    <pre><code class="language-javascript">
// Crea un cerchio
const circle = new PIXI.Graphics();
circle.beginFill(0x9966FF);
circle.drawCircle(0, 0, 50);
circle.endFill();
circle.x = 100;
circle.y = 100;
app.stage.addChild(circle);

/* Anima il cerchio utilizzando
 * ticker per aggiornare
 * la posizione a ogni frame */
app.ticker.add(() => {
    circle.x += 1;
    if (circle.x > app.screen.width + 50) {
        circle.x = -50;
    }
});
                    </code></pre>
                    <p>
                        Questo esempio crea un cerchio viola che si muove orizzontalmente attraverso la finestra dell'applicazione PixiJS.
                    </p>
                </section>
            </div>

            <div class="container col-lg-6 p-4">
                <section class="article-box p-4">
                    <h1>Interazione con l'utente</h1>
                    <p>
                        La funzione pixiTitolo gestisce diversi eventi sui pulsanti per interagire dinamicamente con il testo animato. utilizzando addEventListener per aggiungere un ascoltatore di eventi che interagisce con variabili che influenzano lo stile del testo.
                    </p>
                    <pre><code class="language-javascript">
butRot.addEventListener('click', () => options.rotSp += 1)
                    </code></pre>
                    <p>
                        Questo snippet di codice incrementa la velocità di rotazione del testo quando viene cliccato il pulsante associato (butRot). È un esempio di come PixiTitolo renda interattivo l'aggiornamento delle proprietà del testo.
                    </p>
                </section>
            </div>
        </div>
    </div>
    `
};

export default ArgomentoPage;
