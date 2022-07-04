/* eslint-disable import/extensions */
import Book from './Book.js';
import UI from './UI.js';
import BookStore from './BookStore.js';

const addBookEvent = () => {
  // Event: Add Book
  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;

    // Validate form inputs
    if (title === '' || author === '') {
      UI.showAlert('Please fill in all fields', 'error');
    } else {
      const book = new Book(title, author);

      UI.addBookToUI(book);

      BookStore.addBookToStore(book);

      UI.clearFields();

      UI.showAlert('Book added', 'success');
    }
  });
};

export default addBookEvent;
