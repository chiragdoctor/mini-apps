const encryptForm = document.getElementById('encrypt');
encryptForm.addEventListener('submit', cipher);

const decryptForm = document.getElementById('decrypt');
decryptForm.addEventListener('submit', cipher);

const encryptResetButton = document.getElementById('encrypt-reset');
encryptResetButton.addEventListener('click', resetClick);

const decryptResetButton = document.getElementById('decrypt-reset');
decryptResetButton.addEventListener('click', resetClick);

function cipher(e){
    e.preventDefault();
    const type = e.srcElement.id === 'encrypt' ? 'encrypt' : 'decrypt';    
    const input = document.getElementById(`${type}-input`).value;
    const key = document.getElementById(`${type}-key`).value;
    const output = document.getElementById(`${type}-output`);
    const inputArr = input.split('');
    
    const result = inputArr.map((letter, index) => {
        const charCode = letter.charCodeAt(0) ^ key[index % key.length].charCodeAt(0);
        return String.fromCharCode(charCode);
    })

    output.innerHTML = result.join("");
}

function resetClick(e) {
    const type = e.srcElement.id.indexOf('encrypt') === 0 ? 'encrypt' : 'decrypt'; 
    const input = document.getElementById(`${type}-input`);
    const key = document.getElementById(`${type}-key`);
    const output = document.getElementById(`${type}-output`);
    
    input.value = '';
    key.value = '';
    output.value = '';   
}