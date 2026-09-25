// description: This example demonstrates how to use a Container to group and manipulate multiple sprites
import { Application, Assets, Container, Sprite, Graphics } from 'pixi.js';
import * as cell_engine from "./cellular-automata.js";

(async () => {
    // Create a new application
    const app = new Application();
    const canvas = document.getElementById('cell-canvas');

    // Initialize the application
    await app.init({
        canvas: canvas,
        background: '#1099bb',
        resizeTo: window
    });

    let simulation_flag = true;
    let width =  300;
    let height = 300;

    let engine = new cell_engine.cell_engine(width, height);
    engine.init();

    const container = new Container();

    app.stage.addChild(container);

    // Create a 5x5 `grid` of bunnies in the container

    container.x = 0;
    container.y = 0;

    container.pivot.x = 0;
    container.pivot.y = 0;

    // Listen for animate update
    app.ticker.add((time) => {
        if(simulation_flag)
        {
            engine.render(container, app.screen.width, app.screen.height, 0x00FF00, 0x000000)
            engine.tick();
        }
    });
})();
