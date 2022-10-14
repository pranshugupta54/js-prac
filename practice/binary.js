// Search an element in array
let array = [1,2,3,3,3,3,3,3,3,3,4,5,6,7];
let num = 9;

function solve(array, num){
    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor((start + end)/2);

    while(start <= end){
        if(num == array[mid]){
            return mid;
        }
        if(num > array[mid]){
            start = mid + 1;
        }
        if(num < array[mid]){
            end = mid - 1;
        }
        mid = Math.floor((start + end)/2);   
    }
    return -1;
}
console.log(solve(array,num))