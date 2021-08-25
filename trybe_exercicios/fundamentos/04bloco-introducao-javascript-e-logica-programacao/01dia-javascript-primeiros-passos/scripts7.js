const a = -1   ;

if (a >= 90 && a <= 100) {
    console.log ("A");
}
else if (a >= 80 && a < 90) {
    console.log("B");
}
else if (a >= 70 && a < 80) {
    console.log("B");
}
else if (a >= 60 && a < 70) {
    console.log("C");
}
else if (a >= 50 && a < 60) {
    console.log("D");
}
else if (a < 50 && a >= 0) {
    console.log("F");
}
else if (a > 100) {
    console.log("ISSO NON ECZISTE!");
}
else {
    console.log("menos que 0? UMA DADIVA DOS NINJAS")
}