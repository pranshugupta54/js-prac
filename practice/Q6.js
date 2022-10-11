function solve_function(arr){
    let n = arr.length;
    let jump = 1;
    for(let i = 1; i < n; i++){
        if(arr[i] == arr[i-1] + jump){
            continue;
        }
        if(arr[i] == arr[i-1] + 1 + jump){
            jump++;
            continue;
        }
        if(arr[i] == arr[i-1] - 1 + jump){
            jump--;
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}
let array = [0,1,3,5,6,8,11,13];
console.log(solve_function(array));