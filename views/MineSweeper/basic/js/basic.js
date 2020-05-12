const container = document.getElementById('container');
let table = '';

function onCellClicked(e) {
    const item = parseInt(e.target.textContent);
    for(let i = 1; i <= 100; i++) {
        if(i % item === 0) {
            const cell = document.getElementById(`cell${i}`);
            cell.innerHTML = '<b>**</b>';
            cell.style.backgroundColor = 'brown';
            cell.style.color = 'white';
        }
    }
    
}

function createInlineButton(i) {
    let button = document.createElement('BUTTON');
    button.innerHTML = i;
    button.setAttribute('id', `cell${i}`);
    button.setAttribute('class', 'cell');
    button.addEventListener('click', onCellClicked);
    return button;
}

function createContainer() {
    let container = document.createElement('DIV');
    container.setAttribute('class', 'container');
    return container;
}

function createTable(arr) {
    let container;
    for(let i = 1; i <= 100; i++) {
        if(i == 1) {
            container = createContainer();
        }

        if((i-1) % 10 === 0) {
            container = createContainer();
        }
        let cell = arr && arr.length > 0 ? createInlineButton(arr[i-1]) : createInlineButton(i);
        container.appendChild(cell);
        document.body.appendChild(container);
    }
    
}

function createReset() {
    let button = document.createElement('BUTTON');
    button.setAttribute('class', 'reset-btn');
    button.textContent = 'Reset';
    button.addEventListener('click', onReset);
    document.body.appendChild(button);
}

function createH1() {
    const h1 = document.createElement('H1');
    h1.innerHTML = `4. Basic Minesweeper`;
    document.body.appendChild(h1);
}

function onReset(e) {
    document.body.innerHTML = '';
    createH1();
    createTable();
    createReset();
} 


