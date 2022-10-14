let string = "pqrstuvwxyzabcdefghijklmno"
let wordd = "atlas"

// console.log(word[1]);

function solve(str, word){
    let n = str.length;
    let m = word.length;
    // word[0];
    let ans = 0;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(word[i] == str[j]){
                if(i == 0){
                    ans = j;
                }
                else {
                    old = 1;
                }
            }
        }
    }


    console.log(n);
    return 0;
}

solve(string,wordd);