let n = 31
let cont = 0

for (index = 2; index < n; index += 1) {
    if ( n % index === 0) {
        cont += 1
    }
}
if (cont > 0 ) {
    console.log("num eh primo")
}
else {
    console.log("eh primo")
}