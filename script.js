




//grid variables
const grid = document.querySelector('#grid');
let gridWidth = 16;
let gridHeight = 16;

//creating grid from variables gridWidth and gridHeight
for (let i = 1; i <= gridHeight; i++){
    const div = document.createElement('div');
    div.setAttribute('id',`row${i}`);
    div.setAttribute('class','rows');
    grid.appendChild(div);
    for (let j = 1; j <= gridWidth; j++){
        const row = document.querySelector(`#row${i}`);
        const div = document.createElement('div');
        div.setAttribute('class',`column${j} items`);
        div.setAttribute('id',`item${i}x${j}`);
        row.appendChild(div);
    }
}

// squares interact with mouseover event listener
// checks if background-color is red and turns it white, and vice versa
function changeColor() {
    if (this.style.backgroundColor == 'black'){
        this.style.backgroundColor = 'white';
    } else {
        this.style.backgroundColor = 'black';
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


// new grid button event listener
// prompts user to input tile size, max 100
const newGrid = document.querySelector('#new-grid');
newGrid.addEventListener('click', () => {
    window.prompt("Input grid size");
});