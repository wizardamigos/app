/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  DATA
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
// Variables
var x = 5;
var message = 'hello world';
var isAwesome = true;
// Arrays
var array = [5, 'test', 7, 9, 'foo', 'bar'];
// Objects / Hashes
var object = {
  property1 : 5,
  'prop2'   : 9,
  "prop3"   : 9,
  myarray   : array
};
// Functions
function bla (a, b, c, d) {
  var sum = a * b + c;
  return sum + d;
}
// Function Call
console.log(x) // => 5
console.log(
  bla(4,5,6,7)
);
console.log(x); // => 8
// Loops over Arrays
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// Loops over Object Properties
for (key in object) {
  console.log(object[key]);
}
// Usage of arrays
console.log(array[2]);
array[3] = 'bar';
// Usage of objects
console.log(object.prop2);
console.log(object['prop2']);

// Control Flow: Conditionals
if (isAwesome) {
  console.log('yay');
} else if ( 5 + 5 === x) {
  console.log('w00t');
} else {
  console.log('meh is ' + (5+5 !== x));
}
console.log(
  (isAwesome) ? 'yay' : (5+5===x) ? 'w00t' : 'meh'
);
////////////////////////////
// Important predefined things in JavaScript
// process.argv // gets stuff from TERMINAL to JAVASCRIPT PROGRAM
// console.log  // gets stuff from JAVASCRIPT PROGRAM to TERMINAL
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
//Codecademy
// 1. Confirm and prompt

// We can make pop-up boxes appear!
// confirm("I am ok");
// prompt("Are you ok?");

// 2. Data types

// a. numbers (e.g. 4.3, 134)

// b. strings (e.g. "dogs go woof!", "JavaScript expert")

// c. booleans (e.g. false, 5 > 4)

// 3. If/Else

// if (12 / 4 === "Ari".length) {
//     confirm("Will this run the first block?");
// } else {
//     confirm("Or the second block?");
// }

/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
