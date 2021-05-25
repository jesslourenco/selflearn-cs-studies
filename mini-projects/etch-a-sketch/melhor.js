const GRID_SIZE = 16;
const COLOR_MOUSE_OVER = "red";

function createRow() {
    const div_row = document.createElement('div');
    div_row.className = 'row';
    return div_row;
}

function createCol() {
    let div_col = document.createElement('div');
    div_col.className = 'col';
    return div_col;
}

function createGrid(rowNum, colNum, fn) {
    const container = document.querySelector('#grid-container');
    for (let i = 0; i < rowNum; i++) {
        const row = createRow();
        for (let j = 0; j < colNum; j++) {
            const col = createCol();
            col.addEventListener('mouseover', fn)
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}

function clearGrid(){
    const div_col = document.querySelectorAll('.col');
    div_col.forEach((item) => {
            item.style.backgroundColor = '';
    });
}

function randomColor() {

}

function countForColor() {

}

function classicEvent(event) {
    event.target.style.backgroundColor = COLOR_MOUSE_OVER;
}

function randomColorEvent(event) {
    event.target.style.backgroundColor = randomColor();
}

function modernEvent(event) {
    event.target.style.backgroundColor = randomColor();
}
      
createGrid(GRID_SIZE, GRID_SIZE, classicEvent);
