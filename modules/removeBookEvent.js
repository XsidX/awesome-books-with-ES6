/* eslint-disable import/extensions */
import UI from './UI.js';
import BookStore from './BookStore.js';

const removeBookEvent = () => {
  // Event: Remove book
  document.querySelector('.container').addEventListener('click', (e) => {
    // Remove from ui
    UI.removeBook(e.target);

    // Remove from local storage
    const title = e.target.previousElementSibling.previousElementSibling.textContent.replace(
      /[^a-z0-9]/gi,
      '',
    );
    BookStore.removeBook(title);
  });
};

export default removeBookEvent;
