const HomePage = {
    template: `
    <div class="container">
        <div class="row m-4">
            <div class="container col-md-12">
                <section class="article-box">
                    <h1>Cos'è PixiJS?</h1>
                    <p>
                        PixiJS è un sistema di rendering open source web-based che offre ottime prestazioni per giochi,
                        visualizzazione dati e altri progetti ad alta intensità grafica. Utilizza WebGL, una API
                        (Application Programming Interface) JavaScript di grafica 2D e 3D sul browser, per creare un canvas 2D che sfrutta l'accelerazione hardware (GPU) per rendering ad alte prestazioni.
                        PixiJS rimpiazza Flash nel mondo moderno di HTML5 e provvede migliori performance e feature ad esso. Perfetto per giochi online, contenuti educativi, pubblicità interattive,
                        visualizzazione delle informazioni e in generale per qualsiasi contesto WebGL dove non sia necessaria la tridimensionalità.
                    </p>
                </section>
            </div>
        </div>

        <div class="row m-4">
            <div class="container col-md-12">
                <section class="article-box">
                    <h1>Esempi di utilizzo</h1>
                        <p>
                            PixiJS viene utilizzato da diverse aziende importanti quali Disney, Nickelodeon, Google, Facebook, e molti altri.
                            Alcuni esempi di utilizzo sono:
                        </p>
                        <ul>
                            <li>Visualizzazione di dati in tempo reale</li>
                            <li>Creazione di giochi online</li>
                            <li>Animazioni interattive</li>
                            <li>Contenuti educativi</li>
                            <li>Pubblicità interattive</li>
                            <li>Testo che gira come quello in cima alla pagina!</li>
                        </ul>


                        <h2>Librerie compatibili con PixiJS</h2>
                        <p>
                            Alcune delle principali librerie compatibili con PixiJS, che estendono le sue capacità per creare esperienze interattive più complesse e ricche:
                        </p>
                        <ul>
                            <li>
                                <strong>pixi-spine</strong> Integra le animazioni Spine in PixiJS. Spine è uno strumento per fare rig di modelli 2D e animazioni.
                            </li>
                            <li>
                                <strong>Matter.js</strong> Aggiunge simulazioni fisiche. Matter.js gestisce collisioni di corpi rigidi, forze e vincoli.
                            </li>
                            <li>
                                <strong>pixi-particles</strong> Permette di creare e gestire sistemi di particelle per effetti come fuoco, fumo, esplosioni e altro ancora.
                            </li>
                        </ul>
                </section>
            </div>
        </div>
    </div>
    `
};

export default HomePage;
