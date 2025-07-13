/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

const Stack = require('./Stack'); 


//Exercise 1
const findFactorial = function(num, sum = 1) {
  if (num === 1){return sum}
  return findFactorial(num-1, sum*num);
}

//Exercise 2
const reverseString = function(str, acc="") {
  if(str.length === 0){return acc}

  acc += str.slice(-1);
  str = str.slice(0, -1);

  return reverseString(str, acc);
}

//Exercise 3

const swap = function(arr1, arr2 = []) {
  if(arr1.length === 0){return arr2.reverse();}

  arr2.push(arr1.pop());
  return(swap(arr1, arr2))
}


console.log(findFactorial(8));
console.log(reverseString("Haim"));

const arr1 = [1, 2, 3]
const arr2 = []
swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]


//Extenstion

const swapStack = function(stack1, stack2 = new Stack()) {
  if (stack1.isEmpty()) {
    return stack2.reverse();
  }

  stack2.push(stack1.pop());
  return swapStack(stack1, stack2);
};

const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);

const stack2 = swapStack(stack1);

stack1.print(); // []
stack2.print(); // [1, 2, 3]


/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }