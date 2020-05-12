
function createH1() {
    const h1 = document.createElement('H1');
    h1.innerHTML = `5. Random Minesweeper`;
    document.body.appendChild(h1);
}


function onReset(e) {
    document.body.innerHTML = '';
    createH1();    
    const arr = genRandomNumbers();
    createTable(arr);
    createReset(arr);
} 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function genRandomNumbers() {
    let arr = [];
    while(arr.length < 100) {
        const ran = getRandomInt(1, 101);
         if(arr.indexOf(ran) == -1) {
            arr.push(ran)
         }
            
    }
    return arr;
}

const arr = genRandomNumbers();
createTable(arr);
createReset(arr);