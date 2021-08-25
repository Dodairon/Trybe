const a = 180;
const b = 1;
const c = 2;

if (a + b + c === 180) {
    console.log("true");
}
else if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Invalid angle");
}
else if (a >= 180 || b >= 180 || c >= 180) {
    console.log("Invalid angle");
}
else 
    console.log("false");