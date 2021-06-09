// Layout Builder functions 

function createRow() {
    const div_row = document.createElement('div');
    div_row.className = 'row';
    return div_row;
}

function createCol() {
    let div_col = document.createElement('div');
    div_col.className += 'col btn-std';
    return div_col;
}

function createGrid() {
    const rowNum = 4;
    const colNum = 4;
    const container = document.querySelector('#buttons-grid');
    let index = 0;
    for (let i = 0; i < rowNum; i++) {
        const row = createRow();
        for (let j = 0; j < colNum; j++) {
            const col = createCol();
            row.appendChild(col);
            let item = addButtonItem(index);
            col.innerHTML += item;
            col.setAttribute('id', item);
            //col.addEventListener('onclick', getDigit);
            col.onclick = function() { getDigit(item); } 
            if (index === 3) { col.className += ' btn-fontStyles btn-resetDel';}  
            index++;
        }
        container.appendChild(row);
    }
}

function addButtonItem(index){
    const items = [7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x'];
    return items[index];
}

// CSS Event Functions
function themeSelection(){
    let selection;
    const options = document.getElementsByName('themes');
        for (let option of options){
            if (option.checked){
                selection = option.value;
                break;
            }
        }
        moveToggle(selection);
        chooseTheme(selection);

}

function moveToggle(selection){
    const divThemes = document.querySelector('#theme-selection');    

    switch(selection){
        case 'classic':
            divThemes.className = 'theme-switch-toggle selected-option1';
            break;
        case 'light':
            divThemes.className = 'theme-switch-toggle selected-option2';
            break;
        case 'dark':
            divThemes.className = 'theme-switch-toggle selected-option3';
            break;
    }
}

function chooseTheme(selection){
    switch(selection){
        case 'classic':
            classicTheme();
            break;
        case 'light':
            lightTheme();
            break;
        case 'dark':
            darkTheme();
            break;
    }
}

function lightTheme(){
    document.querySelector('body').className = 'theme-light';
}

function darkTheme(){
    document.querySelector('body').className = 'theme-dark';
}

function classicTheme(){
    document.querySelector('body').className = 'theme-classic';
}

// Calculator functions

function getDigit(digit){
    if (digit !== '=' && digit !== 'RESET' && digit !== 'DEL'){
        document.getElementById('screen').innerHTML += digit;
    } 
    return console.log(digit);
}

function validateExpression(){}

function formatInputs(){}

function operate(){}

function showOnScreen(){}

function sum(){}

function subtract(){}

function multiply(){}

function divide(){}

function reset(){}

createGrid();
