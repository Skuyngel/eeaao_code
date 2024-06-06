let currentIndex = 0;
const images = [
    "pictures_intro/ip1.png", "pictures_intro/ip2.png", "pictures_intro/ip3.png", 
    "pictures_intro/ip4.png"
];

const positions = [
    { left: '60%', top: '40%' },
    { left: '60%', top: '40%' },
    { left: '60%', top: '40%' },
    { left: '71%', top: '51%' }
];

const sizes = [
    { width: '150px', height: '150px' },
    { width: '150px', height: '150px' },
    { width: '150px', height: '150px' },
    { width: '70px', height: '70px' } // Changed to match button size
];

function changeImage() {
    const image = document.getElementById('image');
    const text = document.querySelector('.text');
    const circle = document.getElementById('circle');

    image.style.transition = 'opacity 0.25s ease-in-out';
    image.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;

        image.src = images[currentIndex];

        const button = document.querySelector('button');
        const newPosition = positions[currentIndex];
        const newSize = sizes[currentIndex];
        button.style.left = newPosition.left;
        button.style.top = newPosition.top;
        button.style.width = newSize.width;
        button.style.height = newSize.height;

        circle.style.left = newPosition.left; // Set circle's position to match the button's position
        circle.style.top = newPosition.top;
        circle.style.width = newSize.width; // Set circle's size to match the button's size
        circle.style.height = newSize.height;

        if (currentIndex === images.length - 1) {
            button.style.display = 'block';
            button.disabled = false;
            text.style.display = 'block';
        } else {
            button.style.display = 'none';
            text.style.display = 'none';
        }

        const circleColor = getComputedStyle(document.body).getPropertyValue('--circle-color');
        circle.querySelector('circle').style.stroke = circleColor;

        image.style.opacity = 1;
    }, 250);
}

function redirectToNewPage() {
    const circle = document.getElementById('circle');
    const button = document.getElementById('changeButton');

    // Set circle's position to match the button's position
    circle.style.left = button.style.left;
    circle.style.top = button.style.top;

    // Trigger the pulse animation
    circle.classList.add('pulse');

    // Redirect after a delay
    setTimeout(() => {
        window.location.href = 'levelEins.html';
    }, 2000);
}

window.onload = function() {
    const image = document.getElementById('image');
    image.src = images[0];

    const button = document.getElementById('changeButton');
    const initialPosition = positions[0];
    const initialSize = sizes[0];
    button.style.left = initialPosition.left;
    button.style.top = initialPosition.top;
    button.style.width = initialSize.width;
    button.style.height = initialSize.height;

    button.style.display = 'none';

    button.addEventListener('click', redirectToNewPage);

    const intervalId = setInterval(changeImage, 3000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, (images.length - 1) * 3000);
};

