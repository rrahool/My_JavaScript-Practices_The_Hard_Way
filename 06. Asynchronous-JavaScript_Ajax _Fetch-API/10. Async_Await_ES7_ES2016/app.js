// async function myFunc() {

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello Rahul'), 2000);
//   });

//   const error = false;
//   if (!error) {
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something Went Wrong....'));
//   }

// }

// myFunc()
// .then(res => console.log(res));

// Another Example
async function getUsers() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once its resolved
  const data = await response.json();

  // Only proceed once second promise is resolved
  return data;
} 

getUsers().then(users => console.log(users));