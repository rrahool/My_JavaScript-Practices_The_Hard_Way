const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// Create User Data
const data = {
  name: 'Rahul Biswas',
  username: 'rrahool',
  email: 'rrahool596@gmail.com'
}

// Create Post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// // Update User
http.put('https://jsonplaceholder.typicode.com/users/5', data)
  .then(data => console.log(data))
  .catch(err => console.log(err))

// DELETE User
// http.delete('https://jsonplaceholder.typicode.com/users/2')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))