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