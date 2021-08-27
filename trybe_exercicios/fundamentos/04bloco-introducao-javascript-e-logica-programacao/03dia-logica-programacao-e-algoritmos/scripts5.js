let n = 9;
let vazio = "";
let asterisco = "*";


let m = ((n + 1) / 2);
let u = (m -1);
let v = (m -1);

for (index = 1; index <= m; index += 1 ) {  
    if(index === m) {
        for (tindex = 0; tindex < n; tindex += 1 ) {
            if (tindex < n) {
                vazio += asterisco;
            }
        }
    }

    else {
        for (mindex = 0; mindex < n; mindex += 1 ) {
            if (mindex < u) {
                vazio += " ";
            }
            else if ( mindex === u || mindex === v) {
                vazio += asterisco;
            }
            else {
                vazio += " ";
            }
        }
    }
console.log(vazio) 
vazio = ""
u -= 1
v += 1
}