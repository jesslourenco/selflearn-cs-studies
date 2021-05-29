const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
  return num1 - num2;	
};

const sum = function(numArray) {
  return numArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
};

const multiply = function(numArray) {
  return numArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(num1,num2) {
	return num1 ** num2;	
};

const factorial = function(num) {
  let res = 1;
  for (let i=num; i>1; i--) {
    res += res * (i-1);
  }
	return res;
};

console.log(factorial(5));

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
