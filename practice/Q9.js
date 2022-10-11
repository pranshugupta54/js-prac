function solve_function(f, n){
    let arr = Array(n).fill(0);
    let count = 1;
    for(let i = 0; f > 0; i++){
        if(f <= count){
            arr[i] += f;
            break;
        }
        if(f > 0){
            arr[i] += count;
            f = f-count;
            count++;
        }
        if(i == n-1){
            i = -1;
        }
        
    }
    return arr;
}
let f = 15, n = 5;
answer = solve_function(f, n);
console.log(answer);
