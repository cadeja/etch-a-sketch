


//starting gridSize
let gridSize = 32;
let gridMarginBottom = '50px';

let gridBackgroundColor = '#586e75';





// squares interact with mouseover event listener
// changes background color to random color
function changeColor() {
    let randomColor = Math.floor(Math.random() * 8);
    switch (randomColor) {
        case 0:
            this.style.backgroundColor = '#b58900';
            break;
        case 1:
            this.style.backgroundColor = '#cb4b16';
            break;
        case 2:
            this.style.backgroundColor = '#dc322f';
            break;
        case 3:
            this.style.backgroundColor = '#d33682';
            break;
        case 4:
            this.style.backgroundColor = '#6c71c4';
            break;
        case 5:
            this.style.backgroundColor = '#268bd2';
            break;
        case 6:
            this.style.backgroundColor = '#2aa198';
            break;
        case 7:
            this.style.backgroundColor = '#859900';
            break;
    }
    let itemBrightness = this.style.filter.match(/\d+/);
    console.log(itemBrightness);
    if (itemBrightness != '0'){
        this.style.filter = `brightness(${itemBrightness - 10}%)`;
        console.log(this.style.filter);
    };
}

//creating grid from variables gridWidth and gridHeight
function createGrid(gridSize){

    const grid = document.querySelector('#grid');


    // find right percent for items class width and padding-bottom properties
    let itemSize = 100 / gridSize;

    // creates item divs
    for (let i = 1; i <= gridSize; i++){
        const div = document.createElement('div');
        div.setAttribute('id',`row${i}`);
        div.setAttribute('class','rows');
        grid.appendChild(div);
        for (let j = 1; j <= gridSize; j++){
            const row = document.querySelector(`#row${i}`);
            const div = document.createElement('div');
            div.setAttribute('class',`items`);
            div.setAttribute('id',`item${i}x${j}`);
            div.setAttribute('style', `width: ${itemSize}%; padding-bottom: ${itemSize}%; filter: brightness(100%);`);
            row.appendChild(div);
            if (i == gridSize){
                div.style.marginBottom = gridMarginBottom;
            }
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
            squares[i].style.backgroundColor = gridBackgroundColor;
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