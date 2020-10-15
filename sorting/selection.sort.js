// selection sort
/* with selection sort we assume the lowest value at the 
  first index and we loop through rest and if we encounter 
  a value less than min we swap it and afer the loop ends we push it to the top
*/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4,4,4,0];


function selectionSort(arr) {
  //checkers
  const len = arr.length;
  
  if(len < 2) return;

  for(let i=0; i<len; i++){
    let min = i;
    let temp = arr[i];
    for(let j=i+1; j<len; j++){
      // if a less value is encountered we swap the min //index
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
 
  return arr;
}


selectionSort(numbers);
