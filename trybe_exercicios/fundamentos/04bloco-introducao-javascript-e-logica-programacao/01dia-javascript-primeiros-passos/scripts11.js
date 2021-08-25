let salario = 10000
let inss4 = 570.88


if (salario <= 1556.94){
    let inss = (salario * 0.08)
    salario = (salario - inss)
    console.log(salario)
}
else if (salario > 1556.94 && salario <= 2594.92){
    let inss = (salario * 0.09)
    salario = (salario - inss);
    if (salario <= 1903.98) {
        console.log(salario);
    }
    else {
        let ir = ((salario * 0.075) - 142.80)
        salario = (salario - ir);
        console.log(salario)
    }
}
else if (salario > 2594.92 && salario <= 5189.82){
    let inss = (salario * 0.11)
    salario = (salario - inss);
    if (salario < 2826.66) {
        let ir = ((salario * 0.075) - 142.80);
        salario = (salario - ir);
        console.log(salario)
    }
    else if  (salario >= 2826.66 && salario <= 3751.05) {
        let ir = ((salario * 0.15) - 354.80);
        salario = (salario - ir);
        console.log(salario)
    }
    else if  (salario >= 3751.06 && salario <= 4664.68) {
        let ir = ((salario * 0.225) - 636.13);
        salario = (salario - ir);
        console.log(salario)
    }
    else {
        let ir = ((salario * 0.275) - 869.36)
        salario = (salario - ir);
        console.log(salario)
    }
}
else {
    salario = (salario - 570.88);
    let ir = ((salario * 0.275) - 869.36)
    salario = (salario - ir);
    console.log(salario)
}




