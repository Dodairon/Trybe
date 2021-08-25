const a = 100;
const b = 180;


let valorCusto = (a + (a * 0.2));
let lucro = ((b * 1000) - (valorCusto * 1000));

if (a < 0) {
    console.log("Error")
}
else {
    console.log(lucro)
}

