import * as cell_grid from "./cell_grid.js";
import { Application, Assets, Container, Sprite, Graphics } from 'pixi.js';

export class cell_engine {

    constructor(width, height) {
        let tick_target = 30 //ideal tick rate
        let grid_state = []

        this.width = width;
        this.height = height;
        this.grid = new cell_grid.CellGrid(width, height);
        this.grid_buffer = new cell_grid.CellGrid(width, height);
        this.gridGraphic;
    }

    init() {
        this.grid.clear_grid();

        this.grid.init_arr();

        this.grid_buffer.init_arr();
        this.grid_buffer.clear_grid();

        this.tick_loop();
    }

    tick_loop() {

    }

    render(container, screen_width, screen_height, primary_color, secondary_color) {
        let box_x_px = (screen_width / this.width)    //box_x is width, px is pixels
        let box_y_px = (screen_height / this.height)  //box_x is width, px is pixels

        if (!this.gridGraphics) {
            this.gridGraphics = new Graphics();
            container.addChild(this.gridGraphics);
        }
        this.gridGraphics.clear();  //Clears the old frame

        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                let color = this.grid.get_tile(i + 1, j + 1) ? primary_color : secondary_color;
                this.gridGraphics.rect(i * box_x_px, j * box_y_px, box_x_px, box_y_px).fill(color);
            }
        }
    }

    tick() {
        console.log("ticked")

        for (let i = 0; i < this.grid.get_width(); i++) {
        for (let j = 0; j < this.grid.get_length(); j++) {

            const x = i + 1;
            const y = j + 1;

            const neighbors = this.tally_neighbors(x, y);
            const isAlive = this.grid.get_tile(x, y);

            const nextState = isAlive ? neighbors === 2 || neighbors === 3 : neighbors === 3;

            this.grid_buffer.set_tile(x, y, nextState);
        }
    }
        const temp = this.grid.arr;
        this.grid.arr = this.grid_buffer.arr;
        this.grid_buffer.arr = temp;
    }

    /**
     * Tallys all neighbors of a given cell, returns # of alive cells
     * Treats borders as permanently dead.
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    tally_neighbors(x, y) {
        let total_scanned = 0;

        if (this.grid.get_tile_index(this.grid.get_top(x, y)) === true) total_scanned++;
        if (this.grid.get_tile_index(this.grid.get_top_right(x, y)) === true) total_scanned++;
        if (this.grid.get_tile_index(this.grid.get_right(x, y)) === true) total_scanned++;
        if (this.grid.get_tile_index(this.grid.get_bottom_right(x, y)) === true) total_scanned++;
        if (this.grid.get_tile_index(this.grid.get_top_left(x, y)) === true) total_scanned++;
        if (this.grid.get_tile_index(this.grid.get_left(x, y)) === true) total_scanned++;
        if (this.grid.get_tile_index(this.grid.get_bottom_left(x, y)) === true) total_scanned++;
        if (this.grid.get_tile_index(this.grid.get_bottom(x, y)) === true) total_scanned++;

        return total_scanned;
    }
}