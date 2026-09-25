export class CellGrid {

    constructor(length, width)
    {
        this.length = length
        this.width = width
        this.arr = []
    }
    init_arr()
    {
        for(let i = 0; i < this.width; i++)
        {
            for(let j = 0; j < this.length; j++)
            {
                if(Math.random() > .2)
                {
                    this.arr.push(false);
                }
                else
                {
                    this.arr.push(true);
                }
            }
        }
        console.log("Init Finished")
    }
    size()
    {
        return this.arr.length;
    }
    get_length()
    {
        return this.width;
    }
    get_width()
    {
        return this.length;
    }
    /**
     * Figures out the flat coordinates of the 2d grid input (+1, +1)
     * @param {*} x x starting at 1 
     * @param {*} y y starting at 1
     * @returns 
     */
    get_location(x, y)
    {
        if(y > this.length || x > this.width)
        {
            console.log("Out of Bounds")
            return -1;
        }
        //let location = (x*y)-1;
        let location = (x-1) + ((y-1)*this.width);
        //console.log(location);
        return location
    }
    /**
     * returns the true/false from a given location of (x,y) (+1, +1)
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    get_tile(x,y)
    {
        return this.arr[this.get_location(x,y)];
    }
    
    /**
     * Translates an index, STARTING AT 0, into a true/false based on stored info. If the tile is out of bounds it returns false.
     * @param {*} index Starts at 0
     * @returns 
     */
    get_tile_index(index)
    {
        if(index < 0)
        {
            return false;
        }
        return this.arr[index];
    }

    /**
     * Sets a given tile based on an X,Y(maybe+-1 i don't remember yet)
     * @param {*} x 
     * @param {*} y 
     * @param {*} bool 
     */
    set_tile(x,y, bool)
    {
        let index = this.get_location(x,y);
        this.arr[index] = bool;
    }

    clear_grid() {
        this.arr = [];
    }

    /**
     * Takes x,y coordinates and return a relative get_location() from that position, -1 if off the board
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    get_top(x,y)
    {   
        if(this.get_location(x,y-1) < 0)
        {
            return -1;
        }   
        return this.get_location(x,y-1);
    }
    /**
     * Takes x,y coordinates and return a relative get_location() from that position, -1 if off the board
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    get_top_right(x,y)
    {
        if(this.width < x+1 || this.get_location(x,y-1) < 0)
        {
            return -1
        }
        return this.get_location(x+1,y-1);
    }
    /**
     * Takes x,y coordinates and return a relative get_location() from that position, -1 if off the board
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    get_right(x,y)
    {
        if(this.width < x+1)
        {
            return -1
        }
        return this.get_location(x+1,y);
    }
    /**
     * Takes x,y coordinates and return a relative get_location() from that position, -1 if off the board
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    get_bottom_right(x,y)
    {
        if(this.width < x+1 || this.length < y+1)
        {
            return -1
        }
        return this.get_location(x+1,y+1);
    }
    /**
     * Takes x,y coordinates and return a relative get_location() from that position, -1 if off the board
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    get_top_left(x,y)
    {
        if(x <= 1 || this.get_location(x,y-1) < 0)
        {
            return -1
        }
        return this.get_location(x-1,y-1);
    }
    /**
     * Takes x,y coordinates and return a relative get_location() from that position, -1 if off the board
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    get_left(x,y)
    {
        if(x <= 1)
        {
            return -1
        }
        return this.get_location(x-1,y);
    }
    /**
     * Takes x,y coordinates and return a relative get_location() from that position, -1 if off the board
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    get_bottom_left(x,y)
    {
        if(x <= 1 || this.length < y+1)
        {
            return -1
        }
        return this.get_location(x-1,y+1);
    }
    /**
     * Takes x,y coordinates and return a relative get_location() from that position, -1 if off the board
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    get_bottom(x,y)
    {
        if(this.length < y+1)
        {
            return -1;
        }
        return this.get_location(x,y+1);
    }
}
