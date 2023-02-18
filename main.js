// create a book class object
class Book {
  constructor(title,author,pages) {
    this.title = title,
    this.author = author,
    this.pages = pages

  }
}

// creat a class that contains all necessary methods

class Library {
  //display books on screen
   static displayBook() {
    const storedBooks = [
      {
      title: 'The Wonder City of Oz (1940)',
      author: 'L. Frank Baum',
      pages: '318'
    },
    {
      title: 'Alice in Wonderland(1865)',
      author: 'Lewis Carroll',
      pages: '101'
    }
  ]
  const books = storedBooks;
  books.forEach((book) => Library.addBookToList(book));


  }

  // add book to the table
  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><input type="checkbox" class="form-check-input"></td>
    <td><a herf='#' class='btn btn-success btn-sm delete'>X</a></td>`;
    list.appendChild(row)
  }

  // delete books from the table
  static deleteBooks(el) {
     if(el.classList.contains('delete')) {
       el.parentElement.parentElement.remove();
     }
  }
  // clear input area after adding books
  static clearFields() {
     document.querySelector('#title').value = '';
     document.querySelector('#author').value = '';
     document.querySelector('#pages').value = '';
  }

}
 // event for display deleteBooks
document.addEventListener('DOMContentLoaded', Library.displayBook);

 // event for add books
 document.querySelector('#book-form').addEventListener('submit', (e) => {
   //prevent actual submit
   e.preventDefault();
   // get form values
   const title = document.querySelector('#title').value;
   const author = document.querySelector('#author').value;
   const pages = document.querySelector('#pages').value;

   //instatiate book object
   const book = new Book(title, author, pages);

   //add book to library
   Library.addBookToList(book);
   //clearFields
   Library.clearFields();
 })

 //event for delete books

document.querySelector('#book-list').addEventListener('click', (e) => {
  Library.deleteBooks(e.target)
});
