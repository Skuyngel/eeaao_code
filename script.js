let currentIndex = 0;
const images = [
    "pictures_green/gp2.png", "pictures_green/gp3.png", "pictures_green/gp4.png", 
    "pictures_green/gp5.png", "pictures_green/gp6.png", "pictures_green/gp7.png", 
    "pictures_green/gp8.png", "pictures_green/gp9.png", "pictures_green/gp10.png"
];

const positions = [
    { left: '50%', top: '50%' },
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

    // Get the size of the button
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Set circle size to match the button's size
    circle.style.width = buttonWidth + 'px';
    circle.style.height = buttonHeight + 'px';

    // Get the position of the clicked button
    const buttonRect = button.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + (buttonRect.width / 2);
    const buttonCenterY = buttonRect.top + (buttonRect.height / 2);

    // Set circle position to overlap the button's center
    const circleLeft = buttonCenterX - (buttonWidth / 2);
    const circleTop = buttonCenterY - (buttonHeight / 2);
    circle.style.left = circleLeft + 'px';
    circle.style.top = circleTop + 'px';

    // Show and animate the circle
    circle.style.display = 'block';
    circle.classList.add('pulse');

    // Add a delay before changing the image, hiding the circle, and updating button position
    setTimeout(() => {
        // Hide the circle
        circle.style.display = 'none';
        circle.classList.remove('pulse');

        // Fade out effect
        const image = document.getElementById('image');
        image.style.transition = 'opacity 0.25s ease';
        image.style.opacity = 0;

        // Change image and fade in
        setTimeout(() => {
            image.src = images[currentIndex];
            image.style.transition = 'opacity 0.25s ease';
            image.style.opacity = 1;

            // Update button position after hiding the circle
            const newPosition = positions[currentIndex];
            button.style.left = newPosition.left;
            button.style.top = newPosition.top;
        }, 500); // Wait for 0.5 seconds (500 milliseconds) for fade out effect
    }, 2000); // 2000 milliseconds delay (2 seconds)
}

window.onload = function() {
    document.getElementById('image').src = images[0];

    const button = document.querySelector('button');
    const initialPosition = positions[0];
    button.style.left = initialPosition.left;
    button.style.top = initialPosition.top;

    // Set initial circle position to overlap the button's center and size to match button's size
    const circle = document.getElementById('circle');
    circle.style.width = button.offsetWidth + 'px';
    circle.style.height = button.offsetHeight + 'px';
    const circleLeft = parseFloat(button.style.left) - (button.offsetWidth / 2);
    const circleTop = parseFloat(button.style.top) - (button.offsetHeight / 2);
    circle.style.left = circleLeft + 'px';
    circle.style.top = circleTop + 'px';

    // Add click event listener to button
    button.addEventListener('click', changeImage);
};

