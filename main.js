window.onload = function () {
    new Vue({
        el: '#app',

        mounted() {
            this.initializePixi();
        },

        methods: {

            /**
             * Inizializzazione di PIXI.
             *
             * Crea una nuova applicazione PIXI e la aggiunge al DOM.
             * @return {void}
             */
            initializePixi() {

                const pixiContainer = document.getElementById('pixi');

                // Creo una nuova applicazione PIXI
                this.app = new PIXI.Application({
                    width: pixiContainer.offsetWidth,
                    height: pixiContainer.offsetHeight,
                    antialias: true,
                    autodensity: true,
                    transparent: true,
                });

                // Aggiungo il canvas al DOM
                pixiContainer.appendChild(this.app.view);

                // Creo il testo e lo aggiungo al canvas
                this.createText('PixiJS!!!', 1);
            },

            /**
             * Creazione del testo.
             *
             * Crea del testo fico e lo aggiunge al canvas per essere usato come titolo.
             * @return {void}
             */
            createText(textString, rotationSpeed) {

                // Stile del testo
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

                // Creo l'oggetto testo
                this.text = new PIXI.Text(textString, textStyle);

                // Posiziono il testo al centro del canvas
                this.text.x = this.app.screen.width / 2;
                this.text.y = this.app.screen.height / 2;

                // Fissa l'ancoraggio del testo al centro
                this.text.anchor.set(0.5);

                // Rotazione iniziale
                this.text.skew.set(0, 0);

                // Aggiungo il testo al canvas
                this.app.stage.addChild(this.text);

                // Inizializzo il tempo
                let time = 0;

                // Ciclo di animazione
                const updateSkew = () => {

                    // Incremento il tempo e ne calcolo il modulo
                    // per evitare che cresca all'infinito
                    // In questo modo si mantiene tra 0 e 2*PI, potendo comunque effettuare una rotazione completa
                    time += 0.01;
                    time %= 2 * Math.PI;

                    this.text.skew.x = Math.sin(time) * rotationSpeed;
                    this.text.skew.y = Math.cos(time) * rotationSpeed;

                    requestAnimationFrame(updateSkew);
                };

                // Avvio l'animazione
                updateSkew();
            },
        },
    });

};
