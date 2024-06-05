let currentIndex = 0;
const images = [
    "pictures_green/gp2.png",
    "pictures_green/gp3.png",
    "pictures_green/gp4.png", 
    "pictures_green/gp5.png",
    "pictures_green/gp6.png",
    "pictures_green/gp7.png", 
    "pictures_green/gp8.png",
    "pictures_green/gp9.png",
    "pictures_green/gp10.png"
];

const positions = [
    { left: '45.5%', top: '42%' },
    { left: '54%', top: '45%' },
    { left: '48%', top: '51%' },
    { left: '35%', top: '61%' },
    { left: '80%', top: '50%' },
    { left: '30%', top: '80%' },
    { left: '50%', top: '10%' },
    { left: '10%', top: '50%' },
    { left: '90%', top: '90%' }
];

const sizes = [
    { width: '150px', height: '150px' },
    { width: '65px', height: '65px' },
    { width: '23px', height: '23px' },
    { width: '50px', height: '50px' },
    { width: '160px', height: '160px' },
    { width: '210px', height: '210px' },
    { width: '190px', height: '190px' },
    { width: '170px', height: '170px' },
    { width: '230px', height: '230px' }
];
console.log("init");
function changeImage() {
    console.log("changeImage");
    console.log(currentIndex);
    const button = document.querySelector('button');
    const circle = document.getElementById('circle');

    

    // Show and animate the circle
    circle.style.display = 'block';
    circle.classList.add('pulse');

    // Add a delay before changing the image, hiding the circle, and updating button position
    setTimeout(() => {
        // Hide the circle
        circle.style.display = 'none';
        circle.classList.remove('pulse');

        // Change image with fade effect
        const image = document.getElementById('image');
        image.classList.remove('fade-in');
        image.classList.add('fade-out');

        setTimeout(() => {
            // Update image source
            image.src = images[currentIndex];
            image.classList.remove('fade-out');
            image.classList.add('fade-in');

            // Update button and circle position
            const newPosition = positions[currentIndex];
            button.style.left = newPosition.left;
            button.style.top = newPosition.top;
            circle.style.left = newPosition.left;
            circle.style.top = newPosition.top;

            // Update button and circle size
            const newSize = sizes[currentIndex];
            button.style.width = newSize.width;
            button.style.height = newSize.height;
            circle.style.width = newSize.width;
            circle.style.height = newSize.height;

            // Increment currentIndex after updating the image, position, and size
            currentIndex = (currentIndex + 1) % images.length;
        }, 250); // 250 milliseconds for fade-out transition

    }, 2000); // 2000 milliseconds delay (2 seconds)
}

window.onload = function() {
    document.getElementById('image').src = images[0];

    const button = document.querySelector('button');
    const initialPosition = positions[0];
    button.style.left = initialPosition.left;
    button.style.top = initialPosition.top;

    // Ensure circle is positioned same as button
    const circle = document.getElementById('circle');
    const initialSize = sizes[0];
    button.style.width = initialSize.width;
    button.style.height = initialSize.height;
    circle.style.width = initialSize.width;
    circle.style.height = initialSize.height;
    circle.style.left = initialPosition.left;
    circle.style.top = initialPosition.top;

    // Add click event listener to button
    button.addEventListener('click', changeImage);
};
