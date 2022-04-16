var btnCript = document.querySelector('.btn-crypt');
var btnDecript = document.querySelector('.btn-decrypt');
var btnCopy = document.querySelector('.btn-copy');

//Get <textarea> textarea-value text
var textareaValue = document.getElementById("textarea-value");

btnCript.addEventListener('click', function () {
    
    //Get <textarea> textarea-value text
    var textareaValue = document.getElementById("textarea-value").value;
    
    if (textareaValue.length < 1) {
        alert('Digite ao menos um caractere.');
        ShowElements();
    }
    else {
        if (Validation(textareaValue) == true) {
            console.log('validação passou');

            HideElements();

            //encrypt value
            var encryptedValue = Encrypter(textareaValue);
            console.log('dados após criptografia: ' + encryptedValue);

            //set <textarea> value to p value    
            document.getElementById('crypted-value').innerText = encryptedValue;
            document.getElementById("textarea-value").value = '';
        }
        else {     
            console.log('validação não passou');
            
            alert('Por favor, digite apenas caracteres minusculos e sem acentos.');
            document.getElementById("textarea-value").value = '';
        }        
    }    
});

btnDecript.addEventListener('click', function () {

    //Get <textarea> textarea-value text
    var textareaValue = document.getElementById("textarea-value").value;
    
    if (textareaValue.length < 1) {
        alert('Digite ao menos um caractere.');
        ShowElements();
    }
    else {     
        if (Validation(textareaValue) == true) {
            console.log('validação passou');   

            HideElements();

            //decrypt value
            var decryptedValue = Decrypter(textareaValue);
            console.log('dados após descriptografia: ' + decryptedValue);

            //set <textarea> value to p value    
            document.getElementById('crypted-value').innerText = decryptedValue;
        }
        else {     
            console.log('validação não passou');
            
            alert('Por favor, digite apenas caracteres minusculos e sem acentos.');
            document.getElementById("textarea-value").value = '';
       
        }  
    }    
});

btnCopy.addEventListener('click', function () {
    CopyToClipboard();
});

function Encrypter(value) {
    /*
    'A letra "e" é convertida para "enter"'
    'A letra "i" é convertida para "imes"'
    'A letra "a" é convertida para "ai"'
    'A letra "o" é convertida para "ober"'
    'A letra "u" é convertida para "ufat"'
    */
    const text = value;

    const encryptedText = 
    text.replace(/e/g, 'enter').
    replace(/i/g, 'imes').
    replace(/a/g, 'ai').
    replace(/o/g, 'ober').
    replace(/u/g, 'ufat');

    //console.log(encryptedText);    
    return value = encryptedText;  
}

function Decrypter(value) {
    /*
    'A letra "enter" é convertida para "e"'
    'A letra "imes" é convertida para "i"'
    'A letra "ai" é convertida para "a"'
    'A letra "ober" é convertida para "o"'
    'A letra "ufat" é convertida para "u"'
    */
    const text = value;

    const decryptedText = 
    text.replace(/enter/g, 'e').
    replace(/imes/g, 'i').
    replace(/ai/g, 'a').
    replace(/ober/g, 'o').
    replace(/ufat/g, 'u');
    
    //console.log(decryptedText);
    return value = decryptedText;  
}

function CopyToClipboard() {
  var copyText = document.getElementById('crypted-value').innerText;
  navigator.clipboard.writeText(copyText);

  alert("Você copiou o texto: " + copyText);
}

function Validation(value) {
    if (value == value.toLowerCase()) { 
        const regex = /\W .,|_/;

        if (regex.test(value) == true) {
            console.log('TEM ACENTO');
        }
        else {
            console.log('ok, valor minúsculo e sem acentos');
            return true;
        }
    }
    else {
        console.log('VALOR MAIÚSCULO OU COM ACENTO');
        return false;
    }
}

//hide elements to show encrypted message
function HideElements() {
    //get elements
    var ilustrationImage = document.querySelector('.no-text-img');
    var ilustrationTitle = document.querySelector('.no-message');
    
    //hide elements
    ilustrationImage.classList.add('hide-object');
    ilustrationTitle.classList.add('hide-object'); 
    btnCopy.classList.remove('hide-object'); 
}

//show elements and hide encrypted message
function ShowElements() {
    //get elements
    var ilustrationImage = document.querySelector('.no-text-img');
    var ilustrationTitle = document.querySelector('.no-message');

    //hide elements
    ilustrationImage.classList.remove('hide-object');
    ilustrationTitle.classList.remove('hide-object'); 

    //set <textarea> value to p value    
    document.getElementById('crypted-value').innerText = 'Digite um texto que você deseja criptografar ou descriptografar.';
}