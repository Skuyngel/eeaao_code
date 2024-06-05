let currentIndex = 0;
const images = [
    "pictures_intro/ip1.png","pictures_intro/ip2.png", "pictures_intro/ip3.png", 
    "pictures_intro/ip4.png" 
];

const positions = [
    { left: '42%', top: '38%' },
    { left: '10%', top: '10%' },
    { left: '70%', top: '20%' },
    { left: '80%', top: '70%' },
];

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;

    // Set the current image
    document.getElementById('image').src = images[currentIndex];

    // If it's the last image, add click event listener for redirection
    if (currentIndex === images.length - 1) {
        document.getElementById('image').addEventListener('click', redirectToNewPage);
    }

    const button = document.querySelector('button');
    const newPosition = positions[currentIndex];
    button.style.left = newPosition.left;
    button.style.top = newPosition.top;
}

function redirectToNewPage() {
    window.location.href = 'levelEins.html'; // Redirect to the new HTML page
}

window.onload = function() {
    document.getElementById('image').src = images[0];

    const button = document.querySelector('button');
    const initialPosition = positions[0];
    button.style.left = initialPosition.left;
    button.style.top = initialPosition.top;
};
