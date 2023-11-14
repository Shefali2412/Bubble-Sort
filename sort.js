// BUBBLE SORT
// I/O : array of elements to sort
// O/P : sorted array in ascending order
// 1. make a function 
//      make a for loop , i from 0 to n-1
//         make a for loop , j from 0 to n-i-1
//           use if to compare j & j+1 
//             then swap
// call function
// print sorted array


function bubbleSort(arr)
{
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len-i-1; j++){
            
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1]; 
                arr[j+1] = temp; 
            }
        }
    }
    return arr;
}

let arr = [5, 1, 9, 4, 3, 7];
console.log(bubbleSort(arr));

