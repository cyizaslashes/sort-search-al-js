let UnsortedArr= [0,78,56,78,13,25];

let swapped;

function BubbleSort(Arr){
    swapped= false;
    let end = Arr.length-1;
    for (let i=0; i< end; i++){
        if(Arr[i]>Arr[i+1]){
            swapped= true;
            let temp = Arr[i];
            Arr[i]= Arr[i+1];
            Arr[i+1]= temp;
        }
    }
    end--
};
do{
    BubbleSort(UnsortedArr)
}while(swapped)

console.log(UnsortedArr)