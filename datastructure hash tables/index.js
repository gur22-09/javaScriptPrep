/*Introducing Hash Tables */

//objects in javascript are a type of hash tables, every language has its own 
//version of hash tables, in python they are called dictionaries, in java its maps
//in ruby it is hash maps.

//so in javascript when we create a object and designate a key value pair to property
//what happens behind the scene?

const groceries = {};
groceries.grapes = '500 g';

//here the key is grapes and value being '500 g' 

//there is a hash function behind the scenes which stores this key value together in a 
//particular index in the memory, contrast to an array there is no order in hash tables as there is no
//numbered index.


//********hash functions*******

//hash functions are functions that return a fixed length output for any particular input, 
//they are also idepotent in nature, that is the output is same for any particular input.
//e.g of an hash function is md5 hash, SHA-256.
// The hash fucntions are generally fast which are used in a language for hashing behind the scenes and 
//have a time complexity of O(1).


let user ={
    profile_name:'Shroud',
    hero:'Jett',
    wins:30,
    losses:8
}

console.log(user.profile_name);
delete user['losses'] // delete user.losses works too
console.log(user);
//not delete can slow your algorithm in some cases so try using 'undefined' instead.





//**Collisons in hash tables */
//our computers have a limited memory, and when we create a hash table, they are assigned a part 
//of the memory space, and although each key=value pair is expected to be spread out to the entire 
//memory space that is not the case always.
//due to this what happens is that multiple key value pairs are stored at a single memory index linked through
//a linked list which inturn is a data-structure itself.
//the meomry space they are stored is called as buckets.
//so as a result of this consequence the lookup for a hash table which is normally considered to be 
//O(1) can change to O(n/k) theoriticallly where 'k' is the size of the hash tables
//but as we ignore constants so worst case it is O(n), i.e linear.




/**Hash tables in different languages */
//hash tables are implemented differently in diff languages.
//in javascript we have objects, in ES6 we have map, and set additionally
//the difference is that in map the key=value pairs follow order, so it is easier to loop through them 
//and the keys can be any data-type or data-structure, but in objects all keys are stringified.
//The set peculiarly holds only keys and no data types at all
//we will look more into this when we  create our own hash tables.

















