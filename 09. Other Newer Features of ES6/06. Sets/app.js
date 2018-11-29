// SETS - Store unique values of any type

const set1 = new Set();

set1.add(100);
set1.add('Rahul');
set1.add(true);
set1.add({name: 'John'});

// const set2 = new Set([1, true, 'String']);
// console.log(set2);

// console.log(set1);

// Get Count
// console.log(set1.size);

// Check for values
// console.log(set1.has(100));
// console.log(set1.has(80+20));
// console.log(set1.has({ name: 'John' }));

// console.log( { name: 'John' } === { name: 'John' } );

// Delete from set
// set1.delete('Rahul');
// console.log(set1);

// ITERATING THROUGH SETS

// For...of
// for(let item of set1) {
//   console.log(item);
// }

// ForEach loop
// set1.forEach((values) => {
//   console.log(values);
// });

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
