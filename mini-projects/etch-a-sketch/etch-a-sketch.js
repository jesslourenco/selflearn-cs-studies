const STD_GRID_SIZE = 16;

function createRow() {
    const div_row = document.createElement('div');
    div_row.className = 'rowGrid';
    return div_row;
}

function createCol() {
    let div_col = document.createElement('div');
    div_col.className = 'colGrid';
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

function clearGridEvent(){
    const div_col = document.querySelectorAll('.colGrid');
    div_col.forEach((item) => {
            item.style.backgroundColor = '';
            item.style.filter = "";
    });
}


function classicEvent(event) {
    event.target.style.backgroundColor = '#36454F';
}

function randomColorEvent(event) {
    if(event.target.style.filter){ 
        event.target.style.filter = "";
    }
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = "#" + randomColor;
}

function modernEvent(event) {
    let shade = 90;
    if(!event.target.style.filter) {
        event.target.style.filter = `brightness(${shade}%)`;
        return;
    }

    let filter = event.target.style.filter;
    let current_shade = filter.replace("brightness(", "").replace("%)", "");
    event.target.style.filter = `brightness(${current_shade - 10}%)`;

}
      
function getGridSize(){
    let promptInput = prompt("Please input your desired Grid Size (min 2 max 100)");
    let gridSize;

    while (true){
        try{
            gridSize = validateUserInput(promptInput);
            break;
        } catch(err) {
            promptInput = prompt("Invalid Input: " + err);
        }
    }
    return gridSize;
}

function validateUserInput(userInput){
    if(!userInput) return false;
    if (Number.isInteger(Number(userInput)) === false) throw "Please provide a whole number";
    if (userInput > 100 || userInput < 2) throw "Please provide an integer between 2 and 100";

    return userInput;
}

function resizeEvent(){
    let gridSize = getGridSize();
    if(!gridSize) return;

    deleteGrid();

    createGrid(gridSize, gridSize, classicEvent);
}

function deleteGrid(){
    const container = document.querySelector('#grid-container');
    const div_row = document.querySelectorAll('.row');

    while (div_row.firstChild){
        div_row.removeChild(div_row.firstChild);
    }
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function resetEvent(){
    clearGridEvent();

    deleteGrid();

    createGrid(STD_GRID_SIZE, STD_GRID_SIZE, classicEvent);
}

function onEventClick(mode){
    const div_col = document.querySelectorAll('.colGrid');    
    
    switch(mode){
        case 'rainbow':
            mode = randomColorEvent;
            break;
        case 'classic':
            mode = classicEvent;
            break;
        case 'modern':
            mode = modernEvent;
            break;
    } 

        div_col.forEach((item) => {
            const old_element = item;
            const new_element = old_element.cloneNode(true);
            old_element.parentNode.replaceChild(new_element, old_element);
            new_element.addEventListener('mouseover', mode);
    });

}

createGrid(STD_GRID_SIZE, STD_GRID_SIZE, classicEvent);