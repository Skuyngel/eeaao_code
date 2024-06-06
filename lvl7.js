currentIndex = 0;
const images = [
    "pictures_all/pa1.png",
    "pictures_all/pa2.png",
    "pictures_all/pa3.png",
    "pictures_all/pa4.png"
];

const positions = [
    { left: '68%', top: '50%' },
    { left: '62%', top: '58%' },
    { left: '74%', top: '19%' },
    { left: '32%', top: '25%' }
];

const sizes = [
    { width: '60px', height: '60px' },
    { width: '70px', height: '70px' },
    { width: '70px', height: '70px' },
    { width: '400px', height: '400px' }
];

console.log("init");

function changeImage() {
    console.log("changeImage");
    console.log(currentIndex);
    const button = document.querySelector('button');
    const circle = document.getElementById('circle');
    const text = document.querySelector('.epi'); // Get the text element

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
            // Increment currentIndex before updating the image, position, and size
            currentIndex = (currentIndex + 1) % images.length;

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


            
        // Show the button only after the last image
        if (currentIndex === images.length - 1) {
            text.style.display = 'block'; // Show the text on the last picture
        } else {
            text.style.display = 'none'; // Hide the text on other pictures
        }

            // Check if it is the last image and redirect if true
            if (currentIndex === 0) { // This means it has looped back to the first image
                window.location.href = 'index.html'; 
            }
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
