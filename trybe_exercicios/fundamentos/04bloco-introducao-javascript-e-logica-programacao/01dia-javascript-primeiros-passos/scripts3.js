const a = 9;
const b = 9;
const c = 8;

if (a > b && c) {
    console.log (a);
}
else if (b > a && c) {
    console.log(b);
}
else if (c > a && b) {
    console.log(c);
}
else {
    console.log("no minimo tem dois iguais")
}