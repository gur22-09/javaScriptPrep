// Buble Sort
/*
 In this sorting alogorithm in each pass we compare adjacent elements and if the are not sorted accordingly we swap them else we dont do  anything.

 this allows the largest element to be bubbled up at to the last indexes, this process continues until all the pass loops are completed.

 no of pass  = length of the array
 */


function bubbleSort(arr) {
  const len = arr.length;

  for(let i=0; i< len; i++){
    for(let j=0; j<len - i; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
/* note here for the second loop we dont want to iterate over entire length cuz each time some big element will always be there so we do len - i */
const test = [99,44,6,2,1,5,63,87,283,4,0];

bubbleSort(test);

console.log(test);
