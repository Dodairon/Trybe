function desc() {
let text = document.getElementsByTagName('p')[1];
text.innerText = "vivo"
}

desc()


function rgbGreen (color) {
let green = document.getElementsByClassName('main-content')[0];
green.style.background = color
}

rgbGreen("rgb(76,164,109)")

function rgbWhite (color) {
let yellow = document.getElementsByClassName('center-content')[0];
yellow.style.background = color
}
    
rgbWhite("white")

function correcao() {
    let text = document.getElementsByTagName('h1')[0];
    text.innerText = "Exercício 5.1 - JavaScript"
    }
    
correcao()

function upper() {
let text = document.getElementsByTagName('p');

for (i = 0; i < text.length; i += 1) {
    text[i].innerHTML = text[i].innerHTML.toUpperCase();
    }   
}
    
upper()

function cons() {
    let text = document.getElementsByTagName('p');
    
for (i = 0; i < text.length; i += 1) {
    console.log(text[i].innerHTML)
}
}
    
cons();
