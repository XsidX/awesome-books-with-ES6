const navItems = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-links');
const sections = document.querySelectorAll('.section');

const navigationEvent = () => {
  navItems.addEventListener('click', (e) => {
    e.preventDefault();
    const clicked = e.target.closest('.nav-links');
    if (!clicked.classList.contains('nav-links')) return;

    const { tab } = clicked.dataset;
    navLinks.forEach((link) => link.classList.remove('active'));
    clicked.classList.add('active');

    sections.forEach((section) => section.classList.remove('display-flex'));
    document.querySelector(`.section-${tab}`).classList.add('display-flex');
  });
};

export default navigationEvent;
