let n = 5
let a = "*"
let s = ""

for (index = 1; index <= n; index += 1 ) {
    s += a;
    for (mindex = 0; mindex < index; mindex += index) {
    console.log(s);
    }
}