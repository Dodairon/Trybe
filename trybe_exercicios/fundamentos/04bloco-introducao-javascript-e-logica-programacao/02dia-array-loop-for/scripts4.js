let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = numbers[0];

for(index = 1; index < numbers.length; index += 1) {
    total += numbers[index];
}
total = (total / numbers.length);

    if (total > 20) {
        console.log("valor maior que 20")
    }
    else {
        console.log("valor menor ou igual a 20")
    }