let shoes = [0,7,0,1]
function solve(shoes){
    let sum = 0;
    let n = shoes.length;
    for(let i = 0; i < n; i++){
        sum = sum + shoes[i];
    }
    // console.log(sum);
    if(sum % n != 0){
        return -1;
    }
    let each = sum / n;
    let ans = 0;
    for(let j = 0; j < n; j++){
        if(each == shoes[j]){
            continue;
        }
        if(each > shoes[j]){
            ans = ans + each - shoes[j];
        }
    }
    // console.log(`ANS: ${ans}`)
    return ans;
}

console.log(solve(shoes));