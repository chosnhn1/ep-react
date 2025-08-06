// # Arrow Function:

// 1. declare function
function add1(first, second) {
  return first + second;
}

// 2. make a anonymous function and assign it to variable
var add2 = function(first, second) {
  return first + second;
}

// 3. Arrow Function: kind of abbrev. for 2
var add3 = (first, second) => {
  return first + second;
}

var addandMultiple = (first, second) => ({
  add: first + second,
  multiply: first * second
});

// 3 with "currying" pattern: building a function-making function
function addNumber1(num) {
  return function (value) {
    return num + value;
  };
}

var addNumber2 = num => value => num + value;
// can to these things:
// var addNumberToFive = addNumber2(5);
// console.log(addNumber2(10)(11));

class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function(first, second) {
      return this.value + first + second;
    }.bind(this);
    // bind function will fix "this" for class into function

    var addThis3 = (first, second) => this.value + first + second;
    // function built with arrow will do this automatically
  }
}

