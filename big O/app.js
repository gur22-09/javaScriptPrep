function calcSUM(firstNumber,totalNumbers){

   let sum  = 0;

   for(let i= 0;i<totalNumbers;i++){
       sum += firstNumber + i;
   }

   return sum;
    
}


//calcSUM(2,9);




//alternative solution 
function calcSUM2(startingNum,totalNum){
    return totalNum*(startingNum+startingNum+(totalNum - 1))/2;
}
t1= performance.now();
calcSUM2(2,9);
t2 = performance.now();
console.log(`the time interva; : ${(t2-t1)/1000} seconds`);

//better code? but how to characterize better code?
/* Is it
 1.faster code?
 2.lessmemory-intensive?
 3.more-readable?
*/

//well we can use a timer function to determine time elapsed using performance.now().
//but timing is not accutate as it yeilds  different timeson diff machines and you cannot
//compare two codes based on timing very good unless you have a datum time.


/*******                    ******** 
 *******COUNTING OPERTATIONS*******/

//so other thing that you can do is count the number of operations.
/*
  for our 2nd functiion calcSUM2 it has a +, a *and  a / so rgaedless of the size of n we have only
   3 three operations.
   
   but is we look at our 1st function it has =(which is a assign ment operation), <=(which is a comparison)
   operation, ++ which is two operations so a total os 5n+2 operations.
   but we want a big picture so you can also say 2n or something
*/


/*******     ******** 
 *******BIG O*******/
/*

   big O is a way to formalize fuzzy counting,
   
   it allows us to talk formally about how the runtime of an algorithm grows as its
   input grows.
   
   note that big O is the upper  bound ,the computer may take less time than that.

   e.g
        for our calcSUM1 the big O is O(n).
        but for our calcSUM2 it is O(1).


so having talked about how much time out algorithm takes to run a code is time complexcity,which is 
what we have been taking about.


nut how much additional memory we need to allocate in order to run our code is called as Space complexcity 
which we can denote using bug O too.


*/
   


















