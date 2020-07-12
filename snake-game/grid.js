const gridSize = 21; //as per the design of grid.

// method to return random position of the grid 
export let getRandomGridPosition = () => {
    return {
        x: Math.floor(Math.random() * gridSize) + 1, // +1 because the value should lie b/w 1-21 instead of 0-20.
        y: Math.floor(Math.random() * gridSize) + 1
    }
}