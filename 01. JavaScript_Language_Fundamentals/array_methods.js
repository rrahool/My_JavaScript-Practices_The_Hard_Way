//several declaration of arrays
const numbers = [12,23,2,25,-6,-21];
const numbers2 = new Array(5,-5.6,1,0,-2.5,62);
const fruit = ['apple', 'orange', 'banana', 'mango'];
const mixed = [17, 'mango', undefined, null, true, {a:1, b:1}, new Date()];

let arr_val;

//Get array length
arr_val = numbers.length;

//Check if is array
arr_val = Array.isArray(numbers);

//Get single value
arr_val = numbers[0];
arr_val = numbers[5];

//Insert into array
numbers[1] = 51;
arr_val = numbers;

//Find index value
arr_val = numbers2.indexOf(-2.5);

//MUTATING Arrays
//Reverse 
//arr_val = numbers.reverse();

// //Add on to end
//  arr_val = numbers.push(100);
//  arr_val = numbers;

// //Add on to front
// arr_val = numbers.unshift(5);
// arr_val = numbers;

// //Take off from end
// arr_val = numbers.pop();
// arr_val = numbers;

// //Take off from front
// arr_val = numbers.shift();
// arr_val = numbers;


// //Splice values
// //arr_val = numbers.splice(0,3);
// // arr_val = numbers.slice(0,3);

// //Concatenate array
// arr_val = numbers.concat(numbers2);
// // arr_val = numbers.concat(numbers2.reverse());

// //Sorting Array
// arr_val = numbers.sort();

// //Sort - Using the "Compare Function"
// arr_val = numbers.sort(function(x, y){
//     return y - x;
// });

// //Reverse Sort - Using the "Compare Function"
// arr_val = numbers.sort(function(x, y){
//   return x - y;
// });

//Find the first number less than 50
function under50(num){
    return num < 50;
}
 arr_val = numbers.find(under50);



console.clear();
console.log(arr_val);
//console.log(mixed);

