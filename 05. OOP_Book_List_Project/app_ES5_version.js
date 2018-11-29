// Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');

  // Create tr element
  const row = document.createElement('tr');

  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  // Append the rows with list
  list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className){
  // Create div
  const div = document.createElement('div');
  // Add Class
  div.className = `alert ${className}`;
  // Get Text
  div.appendChild(document.createTextNode(message));
  // Get Parent
  const container = document.querySelector('.container');
  // Get Form
  const form = document.querySelector('#book-form');
  
  // Insert Alert
  container.insertBefore(div, form);

  // Timeout after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}

// Clear the fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // console.log(title, author, isbn);

  // Instantiate Book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

    // console.log(ui);

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Show alert - error message
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show alert - success message
    ui.showAlert('Book Added!', 'success');
    

    // Clear the fields
    ui.clearFields();
  }


  e.preventDefault();
});

// Event Listener for delete book
document.getElementById('book-list').addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete Book
  ui.deleteBook(e.target);

  // Show alert - success message
  ui.showAlert('Book Removed!', 'success');
  
  e.preventDefault();
})