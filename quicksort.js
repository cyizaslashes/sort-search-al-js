function quicksort(arr){
    if (arr.length<2){
        return arr;
    }
    let pivot = arr[arr.length-1];
    let left=[];
    let right=[];
    for (let i=0;i<arr.length-1;i++){
        if(arr[i]>pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)]
}
const arr=[-5,9,-6,90,0,89,67,56,43,10]
console.log(quicksort(arr)) //-6,-5,0,9,10,43,56,67,89,90