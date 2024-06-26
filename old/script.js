let currentIndex = 0;
const images = [
    "pictures_green/gp2", "pictures_green/gp3", "pictures_green/gp4", 
    "pictures_green/gp5", "pictures_green/gp6", "pictures_green/gp7", 
    "pictures_green/gp8", "pictures_green/gp9", "pictures_green/gp10"
];

const sizes = ['image-small', 'image-medium', 'image-medium', 'image-medium', 'image-medium', 'image-medium', 'image-small', 'image-medium', 'image-small', 'image-medium'];
const positions = [
    [10, 12],
    [10, 12],
    [10, 12],
    [10, 12],
    [10, 12],
    [10, 12],
    [10, 12],
    [10, 12],
];

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('moveButton');
    const image = document.getElementById('image');
    const circle = document.getElementById('circle');

    // Set the initial image source only once when the DOM is fully loaded
    image.src = images[0] + ".png";
    image.classList.add(sizes[0]);

    // Set the initial button position
    const initialPosition = positions[0];
    button.style.gridRow = initialPosition[0];
    button.style.gridColumn = initialPosition[1];

    button.addEventListener('click', () => {
        // Update the circle's position to match the button's position
        circle.style.gridRow = button.style.gridRow;
        circle.style.gridColumn = button.style.gridColumn;

        // Show and animate the circle
        circle.style.display = 'block';
        circle.classList.add('pulse');

        // Add a delay before changing the image and hiding the circle again
        setTimeout(() => {
            // Update the image source
            const nextIndex = (currentIndex + 1) % images.length;
            
               // Check if the next image is the last one
               if (nextIndex === images.length - 1) {
                // Redirect to the new HTML page if it's the last image
                window.location.href = 'newpage.html'; // Replace 'newpage.html' with the actual URL
                return; // Exit the function to prevent further code execution
            }
            
            image.src = images[nextIndex] + ".png";

            // Update the image size
            image.classList.remove(...sizes); // Remove all size classes
            image.classList.add(sizes[nextIndex % sizes.length]); // Add new size class

            // Get the new position from the array
            const newPosition = positions[nextIndex];
            const newRow = newPosition[0];
            const newColumn = newPosition[1];

            // Update the button's position
            button.style.gridRow = newRow;
            button.style.gridColumn = newColumn;

            // Hide the circle again
            circle.style.display = 'none';
            circle.classList.remove('pulse');

            // Increment the index to point to the next position
            currentIndex = nextIndex;
        }, 2000); // 2000 milliseconds delay (2 seconds)
    });
});

