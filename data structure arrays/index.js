const string = ['a','b','c','d'];
//in a 32-bit system this array will occupy 4*4 bytes which is 16, as each variable will occupy 4 bytes.

//push O(1)
string.push('e');



//unshigt O(n)
string.unshift('x');


//pop O(1) the pop method deletes an item from the end

string.pop();

//splice O(n)
string.splice(2,0,'aliens');


//slice O(1)- slice method return an array in which the  first param is the starting end of slice and 2nd param is not inclusive
const subString = string.slice(0,3);

//console.log(string,subString);


//the pop method can have an time complexity of O(n)?


/* Staic Arrays vs Dynamic Arrays
    
   the arrays in a high level language like javascript are dynamic, that means 
   you dont need to worry about the number of items in array.

   a static array has the number of elements defined beforehand.
   e.g in C++
   int a[5] {1,2,3,4,5};

   so in a dynamic array behind the scene when an new element is added 
   the entire array is cut and pasted on another memory location with double
   the memory space which it previously had(usually that is the case).

   e.g if i add 'e' in my strings array of size 4, it will be given a new memory location
   with the size of 8*8 bytes.

*/

//treat strings as arrays and solve string by converting into arrays

//ques1. write a function to reverse a string.


function reverseString(string){
   
   const reversedArr = [];
   for (let i=0;i<string.length;i++){
      reversedArr.unshift(string[i]);
   }

   return reversedArr.join('');

}
//above time complexity is of O(n) and space complexity O(n);


//in javascript you can convert the array to the string by the .tostring() method or .join('')

//console.log(reverseString('hi there'));

//you can also use a pre built javascript methods to solve this.
//there is a method to reverse an array.

function reverseString2(string){
   if( typeof(string) !== 'string' || string.length <2 ){
      return `inappropiate input`;
   }

   return string.split('').reverse().join('');
}


//you can also be a little fancy and implement this 

const reverseString3 = string=> [...string].reverse().join('');

//console.log(reverseString3('hello !'));




//onwards to our new interview question 
//merge two sorted arrays so basically.
//[2,4,30] and [5,6,32]
//[2,4,5,6,30,32] - the result


function mergeSortedArrays(arr1,arr2){
   if(typeof(arr1) !== 'object' || typeof(arr2) !== 'object' || arr1.length<1 || arr2.length <1 ){
      return 'inappropiate values';
   }

   const mergedArray = [...arr1,...arr2];

   return mergedArray.sort(function(a,b){return (a-b)});
}

//sort is really an pretty interesting function

//console.log(mergeSortedArrays([2,3,65],[1,4,66]));

/*Arrays Review */

//PRos
//1.fast lookup, easier to access data O(1)
//2.fast push/pop.
//3.your data is ordered.

//COns
//1.slow insertion
//2.slow deletion
//3.fixed size if ur using a static array,but not something to be worried about in javascript.







































