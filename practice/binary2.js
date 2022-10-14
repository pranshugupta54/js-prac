// First and last index of element in array

let array = [1,2,2,2,3,3,3,3,3,3,3,3,4,5,6,7];
let num = 2;

function solve(array, num){
    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor((start + end)/2);
    let ans = [-1,-1];

    while(start <= end){
        if(num == array[mid]){
            if(array[mid - 1] != num){
                ans[0] = mid;
                break;
            }
            else {
                end = end - 1;
            }
        }
        if(num > array[mid]){
            start = mid + 1;
        }
        if(num < array[mid]){
            end = mid - 1;
        }
        mid = Math.floor((start + end)/2);   
    }
    start = 0;
    end = array.length - 1;
    mid = Math.floor((start + end)/2);
    while(start <= end){
        if(num == array[mid]){
            if(array[mid + 1] != num){
                ans[1] = mid;
                break;
            }
            else {
                start = start + 1;
            }
        }
        if(num > array[mid]){
            start = mid + 1;
        }
        if(num < array[mid]){
            end = mid - 1;
        }
        mid = Math.floor((start + end)/2);   
    }
    return ans;
}
console.log(solve(array,num))