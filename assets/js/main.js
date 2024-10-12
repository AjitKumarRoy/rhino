// // for horizontall scrolling 
// const scrollContainer = document.querySelector('.cd-scroll-container');
// let isDown = false;
// let startX;
// let scrollLeft;

// scrollContainer.addEventListener('mousedown', (e) => {
//     isDown = true;
//     scrollContainer.classList.add('active');
//     // Get the starting X position of the mouse
//     startX = e.pageX - scrollContainer.offsetLeft;
//     // Get the current scroll position
//     scrollLeft = scrollContainer.scrollLeft;
// });

// scrollContainer.addEventListener('mouseleave', () => {
//     isDown = false;
//     scrollContainer.classList.remove('active');
// });

// scrollContainer.addEventListener('mouseup', () => {
//     isDown = false;
//     scrollContainer.classList.remove('active');
// });

// scrollContainer.addEventListener('mousemove', (e) => {
//     if (!isDown) return; // Stop the function from running if mouse is not held down
//     e.preventDefault();
//     const x = e.pageX - scrollContainer.offsetLeft;
//     const walk = (x - startX) * 3; // Scroll-fast multiplier
//     scrollContainer.scrollLeft = scrollLeft - walk;
// });










AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



let lastScrollTop = 0; // To store the last scroll position
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down - hide the navbar
    navbar.style.top = "-72px"; // Adjust the value based on your navbar height
  } else {
    // Scrolling up - show the navbar
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});





