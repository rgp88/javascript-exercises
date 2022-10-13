const add = function(a,b) {
  return a+b;
	// for(let i of args){
  // i += args;
  // }
  // return i;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function([a=0,...args]) {
  let sum = a;
  for (let i of args) {
      sum += i;
  }
  return sum;
}

const multiply = function([a=1,...args]) {
  let mult = a;
  for (let i of args) {
    mult *= i;
  }
  return mult;
};

const power = function(a,b) {
  let func = 1;
  for (i=1;i<=b;i++) {
    func *= a;
  }
	return func;
};

const factorial = function(a) {
  if (a===0||a===1) {
    return 1;
  } else {
	for (i=a-1;i>=1;i--) {
    a*=i;
  }
  return a;
}
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
