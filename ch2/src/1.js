// Template Strings
var string1 = "Hello";
var string2 = "ladies and gents!";
var boolvalue1 = true;
var stringCombi1 = string1 + ', ' + string2;
// >>
var stringCombi2 = `${string1}, ${string2}`;
var stringCombi3 = `The boolvalue is ${boolvalue1 ? 'T' : 'F'}!`

// spread operators
var array1 = ['one', 'two'];
var array2 = ['一', '二'];
var arrayCombi1 = [array1[0], array1[1], array2[0], array2[1]];
var arrayCombi2 = array1.concat(array2);
var arrayCombi3 = [].concat(array1, array2);
// >>
var arrayCombi4 = [...array1, ...array2];

var objectOne = {
  one: 1,
  two: 2,
  three: 3,
  other: 0
};
var objectTwo = {
  four: 4,
  five: 5,
  other: -1
};

var objCombi1 = Object.assign({}, objectOne, objectTwo);
// >>
var objCombi2 = {...objectOne, ...objectTwo};
var { other, excOthers } = objCombi2;

// immutables
array3 = [1, 2, 3, 4, 5, 6];
array4 = [1, 2, 3, 4, 5, 6];
// these built-in functions can mutate the array:
array3.push([5, 6, 7])
array3.splice();
array3.pop()
array3.shift()

// these are not; they will return processed array
array4.concat()
array4.slice(0).concat()
array4.slice(0)
array4.slice(1)

// so when using const & let: you would set your own constraints for these keywords
// i.e. making a variable with const and mutate it with functions can lead you to confusing results