let n = 5;
let vazio = "";
let asterisco = "*";


let m = ((n + 1) / 2);
let u = m;
let v = m;

for (index = 0; index < m; index += 1 ) {  
    for (mindex = 1; mindex <= n; mindex += 1 ) {
        if (mindex < u) {
            vazio += " ";
        }
        else if ( mindex >= u && mindex <= v) {
            vazio += asterisco;
        }
        else {
            vazio += " "; 
        }
    }
console.log(vazio) 
vazio = ""
u -= 1
v += 1
}