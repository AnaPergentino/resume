document.addEventListener('DOMContentLoaded', () => {
  // Select elements to animate
  const title = document.querySelector('#main-title');
  const subtitle = document.querySelector('#main-subtitle');
  const mainRight = document.querySelector('#mainRight');

  // Function to handle the slide-in animation
  const slideInAnimation = () => {
    title.style.opacity = '1';
    title.style.transform = 'translateY(0)';

    subtitle.style.opacity = '1';
    subtitle.style.transform = 'translateY(0)';

    mainRight.style.opacity = '1';
    mainRight.style.transform = 'translateX(0)';
  };

  // Trigger the animation when the page is fully loaded
  slideInAnimation();

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

