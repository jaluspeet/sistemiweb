export class pixiBase {
    constructor() {
        this.apps = {};
    }

    newCanvas(containerId, setupFunction, options = {}) {
        const container = document.getElementById(containerId);

        const app = new PIXI.Application({
            antialias: true,
            resolution: devicePixelRatio,
            autoResize: true,
            transparent: true,
            ...options
        });



        container.appendChild(app.view);
        setupFunction(app, options, container);
    }
}