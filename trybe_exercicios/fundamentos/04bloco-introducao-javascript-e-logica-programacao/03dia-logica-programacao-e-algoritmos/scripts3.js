let n = 5
let space = " "
let u = n



for (index = 0; index < n; index += 1 ) {
    let vazio = "";
    let vazio2 = "";
    let asterisco = "*";
    for (mindex = 1; mindex <= n; mindex +=1) {
        if (mindex < u) {
            vazio += space;
        }
        else {
            vazio2 += asterisco;
        }
    }
    u -= 1;
    console.log(vazio + vazio2)
}
