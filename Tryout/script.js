let currentIndex = 0;
const images = [
    "pictures_green/gp2.png", "pictures_green/gp3.png", "pictures_green/gp4.png", 
    "pictures_green/gp5.png", "pictures_green/gp6.png", "pictures_green/gp7.png", 
    "pictures_green/gp8.png", "pictures_green/gp9.png", "pictures_green/gp10.png"
];

const positions = [
    { left: '42%', top: '38%' },
    { left: '10%', top: '10%' },
    { left: '70%', top: '20%' },
    { left: '20%', top: '70%' },
    { left: '80%', top: '50%' },
    { left: '30%', top: '80%' },
    { left: '50%', top: '10%' },
    { left: '10%', top: '50%' },
    { left: '90%', top: '90%' }
];


function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;

    // Check if the current image is the last one
    if (currentIndex === images.length - 1) {
        // Redirect to the new HTML page if it's the last image
        window.location.href = 'newTryOut.html'; // Replace 'newpage.html' with the actual URL
        return; // Exit the function to prevent further code execution
    }

    document.getElementById('image').src = images[currentIndex];

    const button = document.querySelector('button');
    const newPosition = positions[currentIndex];
    button.style.left = newPosition.left;
    button.style.top = newPosition.top;
}

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
        
        image.src = images[nextIndex];

        // Update the image size
        //image.classList.remove(...sizes); // Remove all size classes
        //image.classList.add(sizes[nextIndex % sizes.length]); // Add new size class

        // Get the new position from the array
        // const newPosition = positions[nextIndex];
        // const newRow = newPosition[0];
        // const newColumn = newPosition[1];

        // Update the button's position
        // button.style.gridRow = newRow;
        // button.style.gridColumn = newColumn;

        // Hide the circle again
        circle.style.display = 'none';
        circle.classList.remove('pulse');

        // Increment the index to point to the next position
        currentIndex = nextIndex;
    }, 2000); // 2000 milliseconds delay (2 seconds)
});

window.onload = function() {
    document.getElementById('image').src = images[0];

    const button = document.querySelector('button');
    const initialPosition = positions[0];
    button.style.left = initialPosition.left;
    button.style.top = initialPosition.top;
};
