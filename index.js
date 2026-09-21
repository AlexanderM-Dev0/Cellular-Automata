// description: This example demonstrates how to use a Container to group and manipulate multiple sprites
import { Application, Assets, Container, Sprite, Graphics } from 'pixi.js';
import * as cell_grid from "./cell_grid.js"; 


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



    let width =  300;
    let height = 300;

    let tl_x = 1;
    let tl_y = 1;

    let tr_x = width;
    let tr_y = 1;

    let bl_x = 1;
    let bl_y = height;

    let br_x = width;
    let br_y = height;

    let test_x = bl_x;
    let test_y = bl_y;

    let grid = new cell_grid.CellGrid(width, height);

    grid.init_arr();
    console.log(grid.get_length());
    console.log(grid.get_width());
    console.log(grid.size());
    // Create and add a container to the stage
    const container = new Container();



    app.stage.addChild(container);

    let total_width = container.x = app.screen.width;
    let total_height = container.x = app.screen.height;


    // Load the bunny texture
    const texture = await Assets.load('https://pixijs.com/assets/bunny.png');

    // Create a 5x5 grid of bunnies in the container

    let box_x_px = (total_width / width)    //box_x is width, px is pixels
    let box_y_px = (total_height / height)    //box_x is width, px is pixels

    console.log("Box Width: ", box_x_px)
    console.log("Box Height: ", box_y_px)

  

    console.log("Position:", grid.get_location(test_x,test_y));
    console.log("Get Tile",  grid.get_tile(    test_x,test_y))
    console.log("")
    console.log("Get Right", grid.get_right( test_x,test_y))
    console.log("Get Left",  grid.get_left(  test_x,test_y))
    console.log("Get Bottom",  grid.get_bottom(  test_x,test_y))
    console.log("Get Top",    grid.get_top(    test_x,test_y))


    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            //(x, y)
            //(x = (i * total_height/height))
            //const bunny = new Sprite(texture);
            let square = -1;
            if(grid.get_tile(i+1, j+1) == true)
            {
                square = new Graphics().rect(0, 0, box_x_px, box_y_px).fill(0x000000);
            }
            else
            {
                square = new Graphics().rect(0, 0, box_x_px, box_y_px).fill(0xFFFFFF);
            }
            square.x = (i * box_x_px);
            square.y = (j * box_y_px);
            container.addChild(square);
        }
    }


    //for (let i = 0; i < 25; i++) {
    //    const bunny = new Sprite(texture);
    //    bunny.x = (i % 5) * 40;
    //    bunny.y = Math.floor(i / 5) * 40;
    //    container.addChild(bunny);
    //}

    // Move the container to the center
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;

    // Center the bunny sprites in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    // Listen for animate update
    app.ticker.add((time) => {
        // Continuously rotate the container!
        // * use delta to create frame-independent transform *
        //container.rotation -= 0.01 * time.deltaTime;
    });
})();
