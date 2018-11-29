const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);    
//   }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/2', function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);    
//   }
// });

// Create Data
const data = {
  title: 'Custom post',
  body: 'This is a custom post'
};

// Create Posts
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);    
//   }
// });

// Update post
// http.put('https://jsonplaceholder.typicode.com/posts/10', data, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);    
//   }
// });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/5', function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);    
  }
});