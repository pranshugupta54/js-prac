function solve_function(arr, val){
    let answer = 0;
    let n = arr.length;
    for(let i = n-1; i >= 0; i--){
        console.log(`Switched to ${arr[i]}`)
        while(val >= arr[i]){
            console.log(`arr=${arr[i]} & val = ${val}`);
            answer++;
            val = val - arr[i];
        }
    }
    if(val != 0){
        return -1;
    }
    return answer;

}
let coins = [2];
let amount = 0;
console.log(solve_function(coins, amount));