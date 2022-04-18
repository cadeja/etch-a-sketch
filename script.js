



let gridSize = 16;

// squares interact with mouseover event listener
// checks if background-color is red and turns it white, and vice versa
function changeColor() {
    if (this.style.backgroundColor == 'black'){
        this.style.backgroundColor = 'white';
    } else {
        this.style.backgroundColor = 'black';
    }
}

//creating grid from variables gridWidth and gridHeight
function createGrid(gridSize){

    const grid = document.querySelector('#grid');

    for (let i = 1; i <= gridSize; i++){
        const div = document.createElement('div');
        div.setAttribute('id',`row${i}`);
        div.setAttribute('class','rows');
        grid.appendChild(div);
        for (let j = 1; j <= gridSize; j++){
            const row = document.querySelector(`#row${i}`);
            const div = document.createElement('div');
            div.setAttribute('class',`column${j} items`);
            div.setAttribute('id',`item${i}x${j}`);
            row.appendChild(div);
        }
    }
    // mouse hover color change event for grid squares
    const squares = document.querySelectorAll('.items');

    for (let i = 0; i < squares.length; i++){
        squares[i].addEventListener('mouseover', changeColor);  
    }

    // clear button event listener
    // sets all squares background-color to white
    const clear = document.querySelector('#clear');
    clear.addEventListener('click',() => {
        for (let i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = 'white';
        }
    });
}

function checkPrompt(text) {
    
    if (isNaN(text)) {
        alert("Not a number!");
        return 20;
    } else if (text > 100) {
        alert("Value too large! Grid size set to 100");
        return 100;
    } else{
        return parseInt(text);
    }
}


// new grid function for event listener
// prompts user to input tile size, max 100
// deletes grid
// creates new grid
function createNewGrid() {
    let gridSize = checkPrompt(window.prompt("Input grid size (max: 100)"));

    const grid = document.querySelector('#grid');
    grid.replaceChildren();
    createGrid(gridSize);
}

// new grid button event listener
const newGrid = document.querySelector('#new-grid');
newGrid.addEventListener('click', createNewGrid);


createGrid(gridSize);