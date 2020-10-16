/*
 with insertion sort you sort the array by dividing it into two sub arrays one sorted and another unsorted and while looping through the unsorted array we apply the 
 logic where that element needs to be added in the sorted array, this loop continues until we hit the end of the array.
*/

const arr = [1,5,4,2,3];

function insertionSort(arr) {
  const len = arr.length;

  for(let i=1; i<len; i++){
    let temp = arr[i];
    let j = i - 1;

    while(j>=0 && arr[j]>temp){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = temp;
  }

  return arr;
}

console.log(insertionSort(arr));//[1, 2, 3, 4, 5]
