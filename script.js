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
        window.location.href = 'levelZwei.html'; // Replace 'newpage.html' with the actual URL
        return; // Exit the function to prevent further code execution
    }

    const button = document.querySelector('button');
    const circle = document.getElementById('circle');

    // Get the position of the clicked button
    const buttonRect = button.getBoundingClientRect();
    const buttonX = buttonRect.left + (buttonRect.width / 2);
    const buttonY = buttonRect.top + (buttonRect.height / 2);

    // Set circle position to match the button's position
    circle.style.left = buttonX + 'px';
    circle.style.top = buttonY + 'px';

    // Show and animate the circle
    circle.style.display = 'block';
    circle.classList.add('pulse');

    // Add a delay before changing the image, hiding the circle, and updating button position
    setTimeout(() => {
        // Hide the circle
        circle.style.display = 'none';
        circle.classList.remove('pulse');

        // Change image and update button position after hiding the circle
        document.getElementById('image').src = images[currentIndex];
        const newPosition = positions[currentIndex];
        button.style.left = newPosition.left;
        button.style.top = newPosition.top;
    }, 2000); // 2000 milliseconds delay (2 seconds)
}

window.onload = function() {
    document.getElementById('image').src = images[0];

    const button = document.querySelector('button');
    const initialPosition = positions[0];
    button.style.left = initialPosition.left;
    button.style.top = initialPosition.top;

    // Set initial circle position to match the button's position
    const circle = document.getElementById('circle');
    circle.style.left = button.style.left;
    circle.style.top = button.style.top;

    // Add click event listener to button
    button.addEventListener('click', changeImage);
};

