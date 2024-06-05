let currentIndex = 0;
const images = [
    "pictures_intro/ip1.png","pictures_intro/ip2.png", "pictures_intro/ip3.png", 
    "pictures_intro/ip4.png"
];

const positions = [
    { left: '42%', top: '38%' },
    { left: '10%', top: '10%' },
    { left: '70%', top: '20%' },
    { left: '60%', top: '40%' },
];

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;

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

    // Set the delay based on whether it's the last image or not
    const delay = currentIndex === images.length - 1 ? 4000 : 2000; // 4 seconds delay for the last image

    // Add a delay before changing the image, hiding the circle, and updating button position
    setTimeout(() => {
        // Hide the circle
        circle.style.display = 'none';
        circle.classList.remove('pulse');

        // Fade out effect
        const image = document.getElementById('image');
        image.style.transition = 'opacity 0.5s ease-in-out';
        image.style.opacity = 0;

        // Change image and fade in
        setTimeout(() => {
            image.src = images[currentIndex];
            image.style.transition = 'opacity 0.5s ease-in-out';
            image.style.opacity = 1;

            // Update button position after hiding the circle
            const newPosition = positions[currentIndex];
            button.style.left = newPosition.left;
            button.style.top = newPosition.top;

            // Make the button visible and enable it only on the last image
            if (currentIndex === images.length - 1) {
                button.style.display = 'block';
                button.disabled = false;
            } else {
                button.style.display = 'none';
            }
        }, 500); // Wait for 0.5 seconds (500 milliseconds) for fade out effect
    }, delay); // Adjusted delay for the last image
}

function redirectToNewPage() {
    if (currentIndex === images.length - 1) {
        window.location.href = 'levelEins.html'; // Redirect to the new HTML page
    }
}

window.onload = function() {
    document.getElementById('image').src = images[0];

    const button = document.querySelector('button');
    const initialPosition = positions[0];
    button.style.left = initialPosition.left;
    button.style.top = initialPosition.top;

    // Hide the button initially
    button.style.display = 'none';

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

    // Set interval to change image every 5 seconds for the first three images
    const intervalId = setInterval(changeImage, 3000);

    // Clear interval after the last image is shown
    setTimeout(() => {
        clearInterval(intervalId);
    }, (images.length - 1) * 3000);
};






/*let currentIndex = 0;
const images = [
    "pictures_intro/ip1.png","pictures_intro/ip2.png", "pictures_intro/ip3.png", 
    "pictures_intro/ip4.png" 
];

const positions = [
    { left: '42%', top: '38%' },
    { left: '10%', top: '10%' },
    { left: '70%', top: '20%' },
    { left: '60%', top: '40%' },
];

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;

    // Set the current image
    document.getElementById('image').src = images[currentIndex];

    const button = document.querySelector('button');
    const newPosition = positions[currentIndex];
    button.style.left = newPosition.left;
    button.style.top = newPosition.top;

    // If it's the last image, make the button visible and enable it
    if (currentIndex === images.length - 1) {
        button.style.display = 'block';
        button.disabled = false;
    }
}

function redirectToNewPage() {
    if (currentIndex === images.length - 1) {
        window.location.href = 'levelEins.html'; // Redirect to the new HTML page
    }
}

window.onload = function() {
    document.getElementById('image').src = images[0];

    const button = document.querySelector('button');
    const initialPosition = positions[0];
    button.style.left = initialPosition.left;
    button.style.top = initialPosition.top;

    // Set interval to change image every 5 seconds for the first three images
    const intervalId = setInterval(changeImage, 3000);

    // Clear interval after the last image is shown
    setTimeout(() => {
        clearInterval(intervalId);
    }, (images.length - 1) * 3000);
};
*/