/**
 * Superman Funding Propaganda Poster
 *
 * This script controls the interactions for the Superman funding propaganda poster.
 * It can be included in an HTML page to display the poster as a modal or fullscreen element.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Check if we want to auto-show the poster or wait for a trigger
    const autoShow = true; // Set to false if you want to trigger the poster with a button

    // Reference to close button
    const closeButton = document.getElementById('close-superman-poster');
   
    // Add event listener to close button
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            const posterContainer = document.getElementById('superman-poster-container');
            if (posterContainer) {
                // Add fade-out animation
                posterContainer.style.transition = 'opacity 0.5s ease';
                posterContainer.style.opacity = '0';
               
                // Remove the poster after animation completes
                setTimeout(() => {
                    if (posterContainer.parentNode) {
                        posterContainer.parentNode.removeChild(posterContainer);
                    }
                }, 500);
            }
        });
    }

    // Function to show the poster programmatically
    function showSupermanPoster() {
        const posterContainer = document.getElementById('superman-poster-container');
        if (posterContainer) {
            // Make sure it's visible and add fade-in animation
            posterContainer.style.display = 'flex';
            posterContainer.style.opacity = '0';
            posterContainer.style.transition = 'opacity 0.5s ease';
           
            // Trigger reflow
            void posterContainer.offsetWidth;
           
            // Fade in
            posterContainer.style.opacity = '1';
        }
    }

    // Auto-show the poster if enabled
    if (autoShow) {
        showSupermanPoster();
    }

    // Export the show function to the global scope so it can be called from elsewhere
    window.showSupermanPoster = showSupermanPoster;

    // You can add a button to show the poster if autoShow is false
    // Example:
    // const showButton = document.createElement('button');
    // showButton.innerText = 'Show Superman Poster';
    // showButton.addEventListener('click', showSupermanPoster);
    // document.body.appendChild(showButton);
});

/**
 * Optional: Add keyboard support to close the poster with ESC key
 */
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const closeButton = document.getElementById('close-superman-poster');
        if (closeButton) {
            closeButton.click();
        }
    }
});

/**
 * Optional: You can add this function to your page to trigger the poster display
 * Usage: displaySupermanPoster();
 */
function displaySupermanPoster() {
    if (window.showSupermanPoster) {
        window.showSupermanPoster();
    } else {
        console.error('Superman poster function not available. Make sure the script is loaded.');
    }
}
