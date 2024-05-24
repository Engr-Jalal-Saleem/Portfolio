document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded and ready.');
    // Additional interactivity can be added here
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded and ready.');

    // Select the button
    const button = document.querySelector('#changeColorButton');

    // Check if the button exists
    if (button) {
        // Add click event listener to the button
        button.addEventListener('click', () => {
            // Change the background color of the body
            document.body.style.backgroundColor = '#bada55';
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Select all links with hashes
    const links = document.querySelectorAll('a[href*="#"]');

    // Add smooth scrolling to all links
    for (const link of links) {
        link.addEventListener("click", function(event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                let target = document.querySelector(this.hash);
                target = target ? target : document.querySelector('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        });
    }
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

