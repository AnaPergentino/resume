document.addEventListener('DOMContentLoaded', () => {
  // Select elements to animate
  const header = document.querySelector('h1');
  const mainLeft = document.querySelector('#mainLeft');
  const mainRight = document.querySelector('#mainRight');

  // Function to handle the slide-in animation
  const slideInAnimation = () => {
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
/*
    mainLeft.style.opacity = '1';
    mainLeft.style.transform = 'translateX(0)';

    mainRight.style.opacity = '1';
    mainRight.style.transform = 'translateX(0)';*/
  };

  // Trigger the animation when the page is fully loaded
  slideInAnimation();
  document.addEventListener("mousemove", rotateCube)

});
// Selection of HTML objects
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');
// Defining a function
function toggleNav() {
  nav.classList.toggle('nav-collapsed');

  burger.classList.toggle('fa-bars');
  burger.classList.toggle('fa-times');
  nav.classList.toggle('nav-active');

}
// Calling the function after click event occurs
burger.addEventListener('click', function () {
  toggleNav();
});
burger.addEventListener('touchstart', () => { });
burger.addEventListener('touchend', () => { });
burger.addEventListener('touchcancel', () => { });
burger.addEventListener('touchmove', () => { });

function rotateCube(e) {
  var cube = document.getElementsByClassName("cube");
  var x = e.clientX - window.innerWidth / 2;
  var y = e.clientY - window.innerHeight / 2;
  var q = 0.15;
  var i;

  x = x * q * 1.25;
  y = -y * q * 1.25;
  for (i = 0; i < cube.length; i++) {
    cube[i].style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)"
  }
}