function palindromo(word, separation) {
  let separated = word.split(separation);
  return separated;
}

function reverse(pali) {
  let contrario = pali.reverse();
  return contrario; 
}

function unir(contr) {
  let juntar = contr.join('');
  return juntar
}

let palavra = "arari";
let sep = "";
let pali = palindromo(palavra, sep);
let contr = reverse(pali);
let juncao = unir(contr);


palindromo(palavra, sep)

if ( juncao === palavra){
  console.log("true")
} else {
  console.log("false")
}
