// let age = [2,3,1,5,4,2,1]
// let age = [9]
let age = [5,7,8,4,3,2,1]


function solve(arr){
    // console.log(arr);
    let Array = [];
    let n = arr.length;
    for(let i = 0; i < n; i++){
        Array[i] = arr[i];
    }
    let tempArr = arr.sort(function(a,b) { return a - b;});
    let min = tempArr[0];
    let max = tempArr[n-1];
    let count = 0;
    for(let i = 0; i < n; i++){
        arr[i] = Array[i];
    }
    for(let i = n - 1; i >=0 ; i--){
        if(arr[i] == max){
            let m = n - 1 - Array.indexOf(arr[i]);
            for (let j = 0; j < m ; j++) {
                if(arr[n-1] == max){
                    break;
                }
                let temp = arr[i+1 + j];
                arr[i+1 + j] = arr[i + j];
                arr[i+j] = temp; 
                count++
                console.log(arr);
            }
            break;
        }
    }
    console.log(count);
    for(let i = 0; i < n; i++){
        if(arr[i] == min){
            for(let j = 0; j < i ; j++){
                let tempk = arr[i-j];
                arr[i - j] = arr[i - 1 - j];
                arr[i - 1 - j] = tempk;
                count++
            }
            break;
        }
    }
    return count;
}

console.log(solve(age))