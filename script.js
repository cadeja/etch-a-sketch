
const grid = document.querySelector('#grid');


for (i = 1; i <= 16; i++){
    const div = document.createElement('div');
    div.setAttribute('id',`row${i}`);
    div.setAttribute('class','rows');
    grid.appendChild(div);
    for (j = 1; j <= 16; j++){
        const row = document.querySelector(`#row${i}`);
        const div = document.createElement('div');
        div.setAttribute('class',`column${j} columns`);
        div.setAttribute('id',`item${i}x${j}`);
        row.appendChild(div);
    }
}