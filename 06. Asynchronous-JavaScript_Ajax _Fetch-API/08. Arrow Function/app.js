// Typical Function
// const sayHello = function() {
//   console.log('Hello');
// }

// Arrow Function

// const sayHello = () => {
//   console.log('Hello');
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello';
// console.log(sayHello());

// Typical Return Statement
// const sayHello = function() {
//   return 'Hello' ;
// }

// console.log(sayHello());

// Return Object
// const sayHello = () => ({ msg: 'Hello' });

// Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

const user = ['Nathan', 'Mary', 'William'];

// const nameLengths = user.map(function(name) {
//   return name.length
// });

// Shorter
// const nameLengths = user.map((name) => {
//   return name.length
// });

// Shortest & cleaner
const nameLengths = user.map(name => name.length);


console.log(nameLengths);