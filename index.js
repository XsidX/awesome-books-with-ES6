/* eslint-disable import/extensions */
import UI from './modules/UI.js';
import navigationEvent from './modules/navigationEvent.js';
import addBookEvent from './modules/addBookEvent.js';
import removeBookEvent from './modules/removeBookEvent.js';

document.addEventListener('DOMContentLoaded', () => {
  UI.displayBooks();
});

navigationEvent();
addBookEvent();
removeBookEvent();
