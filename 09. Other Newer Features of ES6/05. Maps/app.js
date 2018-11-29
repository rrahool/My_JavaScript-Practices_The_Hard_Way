// MAPS = key-value pairs - can use ANY type as a key or value

const map = new Map();

// Set keys
const key1 = 'Some string',
      key2 = {},
      key3 = function() {};

// Set map values by key
map.set(key1, 'Value of key1');
map.set(key2, 'Value of key2');
map.set(key3, 'Value of key3');

// Get values by key
// console.log(map.get(key1));
// console.log(map.get(key2));
// console.log(map.get(key3));

// Count values
// console.log(map.size);

// ITERATING MAPS

// Loop using for....of to get keys and values
// for(let [key, value] of map) {
//   console.log(`${key} = ${value}`);
// }

// Iterate keys only
// for(let key of map.keys()) {
//   console.log(key);
// }

// Iterate values only
// for(let value of map.values()) {
//   console.log(value);
// }

// Loop with forEach
// map.forEach(function(value, key) {
//   console.log(`${key} = ${value}`);  
// });

// CONVERT TO ARRAYS

// Create an array of the key value pairs
// const keyValArr = Array.from(map);
// console.log(keyValArr);

// Create an array of the keys
// const keyArr = Array.from(map.keys());
// console.log(keyArr);

// Create an array of the values
const valArr = Array.from(map.values());
console.log(valArr);