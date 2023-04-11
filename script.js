
const navButton = document.querySelector('.menu');
const navContainer = document.querySelector('.navdiv');
const closeButton = document.querySelector('.menu-close');
let isNavOpen = false;

function toggleNav() {
  navContainer.style.display = isNavOpen ? 'none' : 'block';
  navButton.style.display = isNavOpen ? 'flex' : 'none';
  closeButton.style.display = isNavOpen ? 'none' : 'block';
  isNavOpen = !isNavOpen;
}

navButton.addEventListener('click', toggleNav);
closeButton.addEventListener('click', toggleNav);




//animation cursor move

const body = document.body;
const projectButton = document.querySelector('.project-button');
const projectTwo = document.getElementById('two');
const projectThree = document.getElementById('three');
const projectFour = document.getElementById('four');
const circleWhite = document.getElementById('circle-white');
const circleOrange = document.getElementById('circle-orange');
let timer;
body.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const xOffset = (x / window.innerWidth) - 0.1; // Calculate the cursor position relative to the center of the screen
  const yOffset = (y / window.innerHeight) - 0.1;
  const dx = -xOffset * 100; // Multiply the cursor position by a factor to determine the amount of movement
  const dy = -yOffset * 100;

  clearTimeout(timer); // Clear any previous timer
  timer = setTimeout(() => {
    projectButton.style.transform = `translate(-0%, -0%) translate(${dx}px, ${dy}px)`;
    projectTwo.style.transform = `translate(-0%, -0%) translate(${dx}px, ${dy}px)`;
    projectThree.style.transform = `translate(-0%, -0%) translate(${dx}px, ${dy}px)`;
    projectFour.style.transform = `translate(-0%, -0%) translate(${dx}px, ${dy}px)`;
    circleWhite.style.transform = `translate(-0%, -0%) translate(${dx}px, ${dy}px)`;
    circleOrange.style.transform = `translate(-0%, -0%) translate(${dx}px, ${dy}px)`;
    
  }, 10);
});

body.addEventListener('mouseenter', () => {
  projectButton.classList.add('hovered');
  projectTwo.classList.add('hovered');
  projectThree.classList.add('hovered');
  projectFour.classList.add('hovered');
  circleWhite.classList.add('hovered');
  circleOrange.classList.add('hovered');
  
});

body.addEventListener('mouseleave', () => {
  projectButton.classList.remove('hovered');
  projectTwo.classList.remove('hovered');
  projectThree.classList.remove('hovered');
  projectFour.classList.remove('hovered');
  circleWhite.classList.remove('hovered');
  circleOrange.classList.remove('hovered');
  clearTimeout(timer);
});

