export class pixiBase {
    constructor() {
        this.apps = {};
    }

    newCanvas(containerId, setupFunction, options = {}) {
        const container = document.getElementById(containerId);

        if (!container) {
            console.error(`#${containerId} non l'ho trovato fratm :(`);
            return;
        }

        const app = new PIXI.Application({
            width: container.offsetWidth,
            height: container.offsetHeight,
            antialias: true,
            autodensity: true,
            transparent: true,
            ...options
        });
        container.appendChild(app.view);

        setupFunction(app, options);

        this.apps[containerId] = app;
    }
}