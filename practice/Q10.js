function solve_function(arr, val){
    let answer = 0;
    let n = arr.length;
    for(let i = n-1; i >= 0; i--){
        while(val >= arr[i]){
            answer++;
            val = val - arr[i];
        }
    }
    if(val != 0){
        return -1;
    }
    return answer;

}
let coins = [1,2,5];
let amount = 11;
console.log(solve_function(coins, amount));