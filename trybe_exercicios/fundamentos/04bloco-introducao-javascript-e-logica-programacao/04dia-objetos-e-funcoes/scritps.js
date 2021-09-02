let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };


for (let index in names) {
    console.log("ola " + names[index])
}


let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let mindex in car) {
    console.log(mindex, car[mindex])
}