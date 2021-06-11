let operator;
let operatorState;
let num1;
let num2;

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
            col.addEventListener('click', () => handleButtonClick(item));
            if (index === 3) { col.className += ' btn-fontStyles btn-resetDel';} 
            if (index === 12) { col.id = 'decimalSeparator'; }
            if (index === 7 || index === 11 || index === 14 || index === 15) { col.className += ' btn-operators'; }
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

/// Calculator functions ///

function handleButtonClick(value){ 

    const operators = ['x', '/', '+', '-'];
    let digitsOnScreen = document.getElementById('screen').innerHTML;
    
    if (Number.isInteger(parseInt(value)) === true){
        if (operatorState){
            operatorState = false;
            document.getElementById("decimalSeparator").classList.remove('dot-disabled');
            clearScreen();
            showOnScreen(value);
        }
        else{
            showOnScreen(value);
        }
    }

    if (operators.includes(value)){
        if(operator !== undefined && operatorState === true ){
            operator = value;
        }
        else{
            operatorState = true;
            if (operator === undefined || num1 === undefined){
                num1 = digitsOnScreen;
                operator = value;
            }       
            else if (num2 === undefined){
                num2 = digitsOnScreen;
            }
            if (operator !== undefined && num1 !== undefined && num2 !== undefined){        
                let result = calculateResult(operator, num1, num2);
                operator = value;
                num1 = String(result);
                num2 = undefined;  
            }      
        }     
    }    
  
    switch(value){                
        case 'RESET':
            clearScreen();
            operator = num1 = num2 = undefined;
            return;
        case 'DEL':
            deletevalue();
            return;
        case '=':
            num2 = document.getElementById('screen').innerHTML;
            result = calculateResult(operator, num1, num2);
            num1 = num2 = operator = undefined;
            operatorState = false;   
            return;
        case '.':
            showOnScreen(value);
            document.getElementById("decimalSeparator").className += ' dot-disabled';
            return;
    }     

    return console.log(value);
}

function showOnScreen(value){
    document.getElementById('screen').innerHTML += value;
}

function calculateResult(operator, savedNum, screenNum){
    if(operator === '/' && parseInt(screenNum) === 0){
        clearScreen();
        let text = 'Infinity!';
        showOnScreen(text);
        setTimeout( () => { clearScreen();}, 1000);
        return;
    }

    let num1 = parseToNum(savedNum);
    let num2 = parseToNum(screenNum);
    let result = 0;

    switch(operator){
        case '/':
            result = divide(num1,num2);
            break;
        case 'x':
            result = multiply(num1,num2);
            break;
        case '+':
            result = sum(num1,num2);
            break;
        case '-':
            result = subtract(num1,num2);
            break;
    }
    if (result.toString().length > 10){
        result.toFixed(9);
    }
    document.getElementById('screen').innerHTML = result;
    return result;
}

function parseToNum(str){
    let num = 0;

    if (str.includes('.')){ 
        num = parseFloat(str)
    }
    else{
        num = parseInt(str)
    }
    return num;
}

function sum(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function clearScreen(){
    if (operatorState){
        document.getElementById("decimalSeparator").classList.remove('dot-disabled');    
    }
    document.getElementById('screen').innerHTML = '';
}

function deletevalue(){
    let digits = document.getElementById('screen').innerHTML;
    if (digits[digits.length-1] === '.'){
        document.getElementById("decimalSeparator").classList.remove('dot-disabled');    
    }
    digits = digits.slice(0,-1);
    clearScreen();
    showOnScreen(digits);
}

createGrid();
