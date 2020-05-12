let grid;
let rows;
let cols;
let w = 10;
const totalBombs = 10;

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function createContainer() {
    let container = document.createElement('DIV');
    container.setAttribute('class', 'container');
    return container;
}

function setup() {
    const width = 100;
    const height = 100;
    cols = Math.floor(width / w);
    rows = Math.floor(height / w);
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Cell(grid);
        }

    }

    let options = []
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            options.push([i, j]);
        }
    }

    for (let n = 0; n < totalBombs; n++) {
        const index = getRandomInt(options.length);
        const choice = options[index];
        const i = choice[0];
        const j = choice[1];
        options.splice(index, 1);
        grid[i][j].bomb = true;
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].countBees(i, j, rows, cols);
        }

    }
}

function gameOver() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if(!grid[i][j].marked) {
                grid[i][j].revealed = true;
            }
        }
    }
}

function drawCells() {
    for (let i = 0; i < cols; i++) {
        let container = createContainer();
        for (let j = 0; j < rows; j++) {
            grid[i][j].show(i, j, container);
        }
    }
    document.body.appendChild(drawResetButton());
    document.body.appendChild(instructions());
}

function mousePressed(e) {
    const [i, j] = e.target.id.replace('cell', '').split(',')
    if (e.shiftKey) {
        grid[i][j].marked = true;
    } else {
        if (!grid[i][j].marked) {
            grid[i][j].reveal(i, j, rows, cols);
            if (grid[i][j].bomb) {
                gameOver();
            }
        }

    }
    document.body.innerHTML = '';
    drawCells();
}

function drawResetButton() {
    let button = document.createElement('BUTTON');
    button.innerHTML = 'New Game';
    button.setAttribute('id', 'reset');
    button.setAttribute('class', 'reset-btn');
    button.addEventListener('click', startGame);
    return button;
}

function instructions() {
    let p = document.createElement('H2');
    p.innerHTML = '*** Press Shift + Click to place the Flag ***';
    return p;
}

function startGame() {
    document.body.innerHTML = '';
    setup();
    drawCells();
}

startGame();