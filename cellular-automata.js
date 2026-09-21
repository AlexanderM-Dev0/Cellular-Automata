import * as cell_grid from "./cell_grid.js";

export class cell_engine {

    constructor() {
        let tick_target = 30 //ideal tick rate
        let grid_state = []
        let grid_buffer = []
    }

    init() {
        tick_loop();
    }

    tick_loop() {
        let sim_running_flag
        while (sim_running_flag) {
            tick();
        }
    }

    tick() {

    }


    //States
    // Less than 2 neighbors - DEAD (Underpopulation)
    // 2 OR 3 neighbors - LIVE (Survival, if already alive)
    // More than 3 neighbors - DEAD (Overpopulation)
    // Exactly 3 neighbors - LIVE (Reproduction, if currently dead)

    /**
     * Killing Function
     * @param {*} x 
     * @param {*} y 
     * @returns true == dead; false == live
     */
    underpopulated(x,y){
        if(tally_neighbors(x,y) < 2)
        {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Killing function 
     * @param {*} x 
     * @param {*} y 
     * @returns true == dead; false == live
     */
    overpopulated(x, y) {
        if(tally_neighbors(x,y) > 3)
        {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Reproduction function
     * @param {*} x 
     * @param {*} y 
     * @returns true == live; false == dead
     */
    reproduction(x,y) {
        if(tally_neighbors(x,y) == 3)
        {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Survival Function
     * @param {*} x 
     * @param {*} y 
     * @returns true == live; false == dead
     */
    Survived(x,y){
        if(tally_neighbors(x,y) == 3 || tally_neighbors(x,y) == 2)
        {
            return true;
        }
        else {
            return false;
        }
    }


    /**
     * Tallys all neighbors of a given cell, returns # of alive cells
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    tally_neighbors(x, y) {
        let total_scanned = 0;

        if (this.arr[grid.get_top(x, y)] === true) total_scanned++;
        if (this.arr[grid.get_top_right(x, y)] === true) total_scanned++;
        if (this.arr[grid.get_right(x, y)] === true) total_scanned++;
        if (this.arr[grid.get_bottom_right(x, y)] === true) total_scanned++;
        if (this.arr[grid.get_top_left(x, y)] === true) total_scanned++;
        if (this.arr[grid.get_left(x, y)] === true) total_scanned++;
        if (this.arr[grid.get_bottom_left(x, y)] === true) total_scanned++;
        if (this.arr[grid.get_bottom(x, y)] === true) total_scanned++;
        
        return total_scanned;
    }

}