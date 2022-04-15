
const grid = document.querySelector('#grid');

for (i = 1; i <= 32; i++){
    const div = document.createElement('div');
    div.setAttribute('id',`row${i}`);
    div.setAttribute('class','rows');
    grid.appendChild(div);
    for (j = 1; j <= 32; j++){
        const row = document.querySelector(`#row${i}`);
        const div = document.createElement('div');
        div.setAttribute('class',`column${j} items`);
        div.setAttribute('id',`item${i}x${j}`);
        row.appendChild(div);
    }
}

function changeColor() {
    if (this.style.backgroundColor == 'red'){
        this.style.backgroundColor = 'white';
    } else {
        this.style.backgroundColor = 'red';
    }
}

const squares = document.querySelectorAll('.items');
for (i = 0; i < squares.length; i++){
    squares[i].addEventListener('mouseover', changeColor);
}
