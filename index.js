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
    const image = document.getElementById('image');
    image.style.transition = 'opacity 0.25s ease-in-out';
    image.style.opacity = 0; 

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;

        image.src = images[currentIndex];

        const button = document.querySelector('button');
        const newPosition = positions[currentIndex];
        button.style.left = newPosition.left;
        button.style.top = newPosition.top;

        // If it's the last image, make the button visible and enable it
        if (currentIndex === images.length - 1) {
            button.style.display = 'block';
            button.disabled = false;
        } else {
            button.style.display = 'none';
        }

        image.style.opacity = 1;
    }, 250); // Wait for 250 milliseconds for fade out effect
}

function redirectToNewPage() {
    if (currentIndex === images.length - 1) {
        window.location.href = 'levelEins.html'; // Redirect to the new HTML page
    }
}

window.onload = function() {
    const image = document.getElementById('image');
    image.src = images[0];

    const button = document.querySelector('button');
    const initialPosition = positions[0];
    button.style.left = initialPosition.left;
    button.style.top = initialPosition.top;

    // Hide the button initially
    button.style.display = 'none';

    // Set interval to change image every 3 seconds for the first three images
    const intervalId = setInterval(changeImage, 3000);

    // Clear interval after the last image is shown
    setTimeout(() => {
        clearInterval(intervalId);
    }, (images.length - 1) * 3000);
};
