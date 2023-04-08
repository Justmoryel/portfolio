const clickable = document.querySelector('.menu');
const navdiv = document.querySelector('.navdiv');

let isOpen = false;

clickable.addEventListener('click', function() {
  if (!isOpen) {
    navdiv.style.display = 'block';
    isOpen = true;
  } else {
    navdiv.style.display = 'none';
    isOpen = false;
  }
});