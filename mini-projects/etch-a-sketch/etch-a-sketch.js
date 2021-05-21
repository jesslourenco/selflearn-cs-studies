const container = document.querySelector('#grid-container');

for (let i = 0; i < 16; i++){
    let div_row = document.createElement('div');
    div_row.className = 'row';
    container.appendChild(div_row);
}

const div_row = document.querySelectorAll('.row');

div_row.forEach((item) => {
    for (let j = 0; j < 16; j++){
        let div_col = document.createElement('div');
        div_col.className = 'col';
        item.appendChild(div_col);
    }
});
