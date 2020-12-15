// Destructuring Patterns

// imperative way

function data() {
  return {a:1, b:2, c:3, d:4, e:5};
}


const temp = data() || { };
const first = temp.a;
const second = temp.b;
const third = temp.c;

// declarative desctructured way

// key : variable = default
// similar to array, you can gather the rest of the 
// arguments using the rest operator

const {
  a: first,
  b: second = 10,
  c: third,
  ...fourth // it will be a object containig d and e
} = data() || { };

// Also note if you have  already declared variable 
// then you can write as
// to differencitae between the block, you need to 
// wrap the entire statement with parenthesis

let first, second, third, fourth;

({
  a: first,
  b: second = 10,
  c: third,
  ...fourth // it will be a object containig d and e
} = data() || { });


// what if you wanted to declare the desctructured 
// variable with same property name

const {
  a = 10,
  b
} = data() || { };


/* what about nested object Destructuring */
function data() {
  return {
   a:1,
   b:{ d:3, c:4 }, 
   e:5
   };
}

const {
  a,
  b: {
    d,
    c
  } = {},
  e
} = data();


/* Destructuring object parameter */

// if you are only going to use the destructured 
//object and not use a reasssign, it is better to use Destructuring at params

function foo({
  a,
  b,
  c
} = {}) {
  // do something with a,b,c
}


// note than in case of object Destructuring you can re-declare the property 
// multiple times to be assigned to 

const obj = {
  a: 1,
  b: {
    c: 3,
    d: 4,
  },
  e: 5
};


const {
  a,
  b,
  b: { c }, // notice we made b kind re-aliase again
  e
} = obj;


/* Nested Array and Object Destructuring */

const o = {
  a: 1,
  b: [
    X: 100,
    Y: 1000
  ],
  c: 3,
  d: 4
}


const {
  a,
  b,
  b: [
    A,
    B
  ],
  c,
  d
} = o; // you can do all sorts of combinations of these nested Destructuring











