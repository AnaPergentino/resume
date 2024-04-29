document.addEventListener('DOMContentLoaded', () => {
  // Select elements to animate
  const header = document.querySelector('h1');
  const mainLeft = document.querySelector('#mainLeft');
  const mainRight = document.querySelector('#mainRight');

  // Function to handle the slide-in animation
  const slideInAnimation = () => {
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';

    mainLeft.style.opacity = '1';
    mainLeft.style.transform = 'translateX(0)';

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
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
  }
  // Calling the function after click event occurs
  burger.addEventListener('click', function () {
    toggleNav();
  });