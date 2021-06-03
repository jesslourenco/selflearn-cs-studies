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

function createGrid() {
    const rowNum = 4;
    const colNum = 4;
    const container = document.querySelector('#calcPad');
    let index = 0;
    for (let i = 0; i < rowNum; i++) {
        const row = createRow();
        for (let j = 0; j < colNum; j++) {
            const col = createCol();
            col.addEventListener('onclick', onEventClick);
            row.appendChild(col);
            col.innerHTML += addButtonItem(index);
            if (index === 3) { col.id = 'deleteButton';}  
            index++;
        }
        container.appendChild(row);
    }
}

function onEventClick(event){
    event.target.style.backgroundColor = '#FFFFFE';
    }

function addButtonItem(index){
    const items = [7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x'];
    return items[index];
}

createGrid();