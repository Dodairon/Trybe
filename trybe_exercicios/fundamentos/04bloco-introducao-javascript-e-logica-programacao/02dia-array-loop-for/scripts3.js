let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = numbers[0];

for(index = 1; index < numbers.length; index += 1) {
    total += numbers[index];
}
total = (total / numbers.length);
console.log(total)