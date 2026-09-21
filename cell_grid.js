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
        //console.log(this.arr)
    }
    size()
    {
        return this.arr.length;
    }
    get_length()
    {
        return this.height;
    }
    get_width()
    {
        return this.length;
    }
    /**
     * Figures out the flat coordinates of the 2d grid input
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
    get_tile(x,y)
    {
        return this.arr[this.get_location(x,y)];
    }
    
    get_tile_index(index)
    {
        return this.arr[index];
    }

    set_tile(x,y, bool)
    {
        position = get_tile(x,y);
        this.arr[position] = bool;
    }

    


    get_top(x,y)
    {   
        if(this.get_location(x,y-1) < 0)
        {
            return -1;
        }   
        return this.get_location(x,y-1);
    }
    get_top_right(x,y)
    {
        if(this.width < x+1 || this.get_location(x,y-1) < 0)
        {
            return -1
        }
        return this.get_location(x+1,y-1);
    }
    get_right(x,y)
    {
        if(this.width < x+1)
        {
            return -1
        }
        return this.get_location(x+1,y);
    }

    get_bottom_right(x,y)
    {
        if(this.width < x+1 || this.length < y+1)
        {
            return -1
        }
        return this.get_location(x+1,y+1);
    }

    get_top_left(x,y)
    {
        if(this.width*y > x-1 || this.get_location(x,y-1) < 0)
        {
            return -1
        }
        return this.get_location(x+1,y-1);
    }

    get_left(x,y)
    {
        if(this.width*y > x-1)
        {
            return -1
        }
        return this.get_location(x-1,y);
    }

    get_bottom_left(x,y)
    {
        if(this.width*y > x-1 || this.length < y+1)
        {
            return -1
        }
        return this.get_location(x-1,y+1);
    }

    get_bottom(x,y)
    {
        if(this.length < y+1)
        {
            return -1;
        }
        return this.get_location(x,y+1);
    }


}
