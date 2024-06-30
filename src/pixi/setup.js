export class pixiBase {
    constructor() {
        this.apps = {};
    }

    newCanvas(containerId, setupFunction, options = {}) {
        const container = document.getElementById(containerId);

        // opzioni del canvas, quelle che non hanno un valore options oltre a 
        // quello di default sono hardcoded perché non si ha necessità di cambiarle
        const app = new PIXI.Application({
            antialias: options.antialias || false,
            resolution: devicePixelRatio,
            autoResize: true,
            transparent: options.transparent || true,
            ...options
        });

        // opzioni aggiuntive non riguardanti il setup
        // vengono concatenate (...options) e passate alla setupFunction

        container.appendChild(app.view);
        setupFunction(app, options, container);
    }
}
