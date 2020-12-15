// Destructuring Patterns

// imperative way

function data() {
  return [1,2,3,4,5,6];
}

// const temp = data();
// const first = temp[0];
// const second = temp[1];
// const third = temp[2];
// const rest = temp.slice(3);
// declarative way

const [
  first,
  second,
  third,
  ...rest
] = data();

// to ommit a value in destructure pattern add and // empty ,

const temp = [
  first,
  second,
  ,
  ...rest
] = data();  // temp gets whole value even if the 
// destructure is a subset of the values

// you can use Destructuring to swap variables 
// conviniently

let x = 10;
let y = 20;

[y,x] = [x,y];

// it is always makes sense to use a fallback when 
// using Destructuring in case our thing is not an // array

// we can do it by using the default parameter

const temp = [
  first,
  second,
  ,
  ...rest
] = data() || [] ; // here default if data() is falsy

function check([
  first,
  second,
  third
] = []) {
  // use first, second, third
}



/* Nested Destructuring */

function nested() {
  return [1, [2,3], 4];
}

const temp = [
  first = 10,
  [
    second,
    third
  ] = [], // providing a default fallback
  fourth
] = nested();









