const clickable = document.querySelector('.menu');
const fixed = document.querySelector('.fixed');

let isOpen = false;

clickable.addEventListener('click', function() {
  if (!isOpen) {
    fixed.style.display = 'block';
    isOpen = true;
  } else {
    fixed.style.display = 'none';
    isOpen = false;
  }
});