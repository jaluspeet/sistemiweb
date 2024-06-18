const HomePage = {
    template: `
    <div class="container">
        <div class="row">
            <section class="article-box col-md-10 m-4">
                <h1>Cos'è PixiJS?</h1>
                <p>
                    PixiJS è un sistema di rendering open source web-based che offre ottime prestazioni per giochi,
                    visualizzazione dati e altri progetti ad alta intensità grafica. Utilizza WebGL, una API
                    (Application
                    Programming Interface) JavaScript di grafica 2D e 3D sul browser, per visualizzare immagini e
                    altri contenuti 2D. PixiJS rimpiazza Flash nel mondo moderno di
                    HTML5 e provvede migliori performance e feature rispetto al suo antenato. Perfetto per giochi
                    online, contenuti educativi, pubblicità interattive,
                    visualizzazione delle informazioni e in generale per qualsiasi contesto WebGL 2D.
                </p>
            </section>
        </div>

        <div class="row">
            <section class="article-box col-md-10 m-4">
                <h1>Cosa non è PixiJS</h1>
                <ul class="list-unstyled">
                    <li>
                        <h2>FRAMEWORK</h2>
                        <p>
                            PixiJS è un motore di rendering e supporta funzionalità aggiuntive ma non è un framework come Unity o Phaser.
                            I framework sono stati progettati per le fondamenta di un gioco come ad esempio la gestione delle impostazioni
                            dell'utente, riproduzione della musica, scripting degli oggetti ed ecc... PixiJS è stato progettato per fare una cosa
                            per bene, ovvero: renderizzare i contenuti grafici.
                        </p>
                    </li>

                    <li>
                        <h2>3D RENDERER</h2>
                        <p>
                            PixiJS è stato realizzato per il 2D, ma se si desidera eseguire il rendering di modelli 3D,
                            ci sono altre librerie che permettono di farlo (babylon.js o three.js).
                        </p>
                    </li>

                    <li>
                        <h2>APPLICAZIONE MOBILE</h2>
                        <p>
                            Con PixiJS si possono realizzare giochi per i telefoni ma bisogna utilizzare un sistemi come
                            Apache Cordova. PixiJS non fornisce accesso alla fotocamera, ai servizi di localizzazione, alle notiche ed ecc...
                        </p>
                    </li>

                    <li>
                        <h2>LIBRERIA INTERFACCIA UTENTE</h2>
                        <p>
                            PixiJS permette di realizzare la propria interfaccia utente utilizzando alcune delle sue funzionalità
                            ma non fornisce una libreria pronta all'uso.
                        </p>
                    </li>

                    <li>
                        <h2>DATA STORE</h2>
                        <p>
                            Esistono molte tecnologie che possono essere utilizzate per memorizzare le impostazioni, dati ed ecc... Esistono
                            i Cookie, archiviazione su server oppure Web Storage. Ci sono molte soluzioni, ognuna con i suoi vantaggi e svantaggi.
                            Con PixiJs è possibile utilizzare qualsiasi di queste soluzioni, ma non fornisce strumenti di data store.
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    </div>
    `
};

export default HomePage;
