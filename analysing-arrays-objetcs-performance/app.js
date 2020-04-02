//analysing performance of arrays and objects


/************OBJECTS**********/

/* so objects are basically unordered data structures which provide us in with fast and easy insertion and
deletion methods.


when you should use Objects:-
1.when you dont need order
2.when you want fast access/removal and inserton.

insertion -O(1) //time complexities
removal - O(1)
access - O(1)
searching - O(n)


e.g
*/
let programmer = {
    name:'Mohit',
    isDeveloper:true,
    favouriteLanguages:['python','javaScript','C++']
}
//so for searching you will need to look at each key-value pair which will depend on the length of the value
//and the number of keys that is why the complexity for search is O(n).

//delete is something which we havent looked before.

delete programmer.name;
//console.log(programmer);

//you can also perform delete programmer[name] or delete programmer['Mohit'] all work


programmer['name'] = 'Naman';


/*Big O of Object methods

 1.Object.keys  - O(n)
 2.Object.values - O(n)
 3.Object.entries - O(n)
 4.Object.hasOwnProperty - O(1)

 e.g Object.keys(programmer) =>["name","favouriteLanguages","isDeveloper"]
     
     programmer.hasOwnProperty('name') =>'naman' and if it does not has that key/property it will return false
     As the complexity for access is O(1) is makes sense this also has O(1) complexity.


*/


/********ARRAYS ********/

/* these are ordered lists unlike objects.

  e.g let values = [true,'is',[],{},45];

  order is present because each element in an array has an index to which it corresponds,
  the first element has the 0 index, 2nd has 1 and so on.

  When to use Arrays?

  1.when you need order
  2.fast access/removal but it depends.

  Big O for Arrays:-
  1.access - O(1)
  2.search - O(n)
  3.insertion - it depends
  4.deletion -it depends.


  the reson that is depends for both insertion and deletion is because after deleting you have to re-index the array
  based on from where the element got added or deleted.
  if you add an element at the beggining then it will have a complexity of O(n) but if you add at the end 
  then it is just O(1)

*/

let names = ['bilbo','gandalf','sauron','frodo','samwise'];

//there are two ways to insert into an arrays which come to my mind one is to use
//array methods push,unshift and other way is to use array prototype splice.
//e.g

names.splice(2,1);
console.log(names);











