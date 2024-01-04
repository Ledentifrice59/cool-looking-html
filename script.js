// Add an event listener to handle the scroll
document.addEventListener('scroll', function() {
    // Check if the scroll position is greater than 50 pixels
    if (window.scrollY > 50) {
        // Change the background color to white
        document.body.style.backgroundColor = 'white';
    } else {
        // Change the background color back to black
        document.body.style.backgroundColor = 'black';
    }
});