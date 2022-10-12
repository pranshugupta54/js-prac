let comedians = "z"
let actors = "ZZ"

function solve(com, act){
    let n = com.length;
    let m = act.length;
    let count = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(com[i] == act[j]){
                count++;
            }
        }
    }
    return count;
}

console.log(solve(comedians,actors))