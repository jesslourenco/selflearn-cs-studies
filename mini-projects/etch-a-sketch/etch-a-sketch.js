function createRows(gridSize=16){

    const container = document.querySelector('#grid-container');
    for (let i = 0; i < gridSize; i++){
        let div_row = document.createElement('div');
        div_row.className = 'row';
        container.appendChild(div_row);
    }
}

function createCols(gridSize=16){

    const div_row = document.querySelectorAll('.row');
    div_row.forEach((item) => {
        for (let j = 0; j < gridSize; j++){
            let div_col = document.createElement('div');
            div_col.className = 'col';
            item.appendChild(div_col);
            item.addEventListener('mouseover', function(mouseOver){
                mouseOver.target.style.backgroundColor = 'pink';
            })
        }
    });
}

function clearGrid(){

    const div_col = document.querySelectorAll('.col');
    div_col.forEach((item) => {
            item.style.backgroundColor = '';
    });
}
        
createRows();
createCols();




