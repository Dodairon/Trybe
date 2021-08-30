let a = [1, 2, 4, 5, 6];
let b = [3, 9, 8, 5, 0, 2];
let c = [];

for (index = 0; index < a.length; index += 1) {
    for (mindex = 0; mindex < b.length; mindex += 1) {
        if (a[index] === b[mindex] ) {
            c.push(a[index])
        }
    }
}
console.log(c)