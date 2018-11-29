// Book Class
class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class
class UI{
  addBookToList(book){
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

  showAlert(message, className){
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

  deleteBook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Store Class
class Store{
  static getbooks(){
    let books;

    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks(){
    const books = Store.getbooks();

    books.forEach(function(book){
      const ui = new UI;

      // Add book to UI
        ui.addBookToList(book);
    });
  }

  static addBooks(book){
    const books = Store.getbooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBooks(isbn){
    const books = Store.getbooks();

    books.forEach(function(book, index){
     if(book.isbn === isbn) {
       books.splice(index, 1);
     }
    });

    localStorage.setItem('books', JSON.stringify(books));

  }

}

// DOM Content Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

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

    // Add to LS
    Store.addBooks(book);

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

  // Remove from LS
  Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);

  // Show alert - success message
  ui.showAlert('Book Removed!', 'success');
  
  e.preventDefault();
})