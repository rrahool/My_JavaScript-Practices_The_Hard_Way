let re = /hello/;   
re = /hello/i;    // i = Case insensitive
//re = /hello/g;  // g = Global search

// console.log(re);
// console.log(re.source);

// // exec() - Return result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test('Hello There');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello Rahul'
// const result = str.match(re);
// console.log(result);

// search() - Return index of the first match, if not found return -1
// const str = 'Hey, Hello There';
// const result = str.search(re);
// console.log(result);


// replace() - Return new string with some or all matches of a pattern
const str = 'hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);
