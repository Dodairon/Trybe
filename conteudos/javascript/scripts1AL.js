let peso = 90;
let altura = 1.85;
let imc = (peso / (altura * altura)).toFixed(2)

if (imc < 18.5) {
    console.log("Seu imc e: " + imc + "kg/m2 Resultado: Magreza");
}
else if (imc >= 18.5 && imc < 24.9) {
    console.log("Seu imc e: " + imc +"kg/m2 Resultado: Normal");
}
else if (imc >= 24.9 && imc < 30) {
    console.log("Seu imc e: " + imc +"kg/m2 Resultado: Sobrepeso");
} 
else {
    console.log("Seu imc e: " + imc +"kg/m2 Resultado: Obeso")
}