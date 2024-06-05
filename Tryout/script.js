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

window.onload = function() {
    document.getElementById('image').src = images[0];

    const button = document.querySelector('button');
    const initialPosition = positions[0];
    button.style.left = initialPosition.left;
    button.style.top = initialPosition.top;
};