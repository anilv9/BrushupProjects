//es5
//book constructor
function Book(title,author,isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//ui constructor
function UI(){

}
UI.prototype.addBookToList = function(book){
  // console.log(book);
  const list = document.getElementById('book-list');
  //create tr ele
  const row = document.createElement('tr');
  //insert cols
  row.innerHTML = `<td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</td>`

  list.appendChild(row);
}
//clear fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}
//event listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  // console.log('test');
  //get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);
// console.log(book);

//instantiate ui
const ui = new UI();
// console.log(ui);
//add book to list
ui.addBookToList(book);

//clear fields
ui.clearFields();

// console.log(title,author,isbn);
  e.preventDefault();

});