let currentIndex = 0;
const images = [
    "pictures_purple/pp1.png",
    "pictures_purple/pp2.png",
    "pictures_purple/pp3.png", 
    "pictures_purple/pp4.png",
    "pictures_purple/pp5.png",
    "pictures_purple/pp6.png", 
    "pictures_purple/pp7.png",
    "pictures_purple/pp8.png",
    "pictures_purple/pp9.png",
];

const positions = [
    { left: '37%', top: '50%' },
    { left: '4%', top: '72%' },
    { left: '21%', top: '53%' },
    { left: '54%', top: '51%' },
    { left: '48%', top: '36%' },
    { left: '47%', top: '48%' },
    { left: '43%', top: '40%' },
    { left: '62%', top: '27%' },
    { left: '27%', top: '10%' }
];

const sizes = [
    { width: '280px', height: '280px' },
    { width: '15px', height: '15px' },
    { width: '120px', height: '120px' },
    { width: '90px', height: '90px' },
    { width: '170px', height: '170px' },
    { width: '70px', height: '70px' },
    { width: '45px', height: '45px' },
    { width: '80px', height: '80px' },
    { width: '500px', height: '500px' }
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

            
            if (currentIndex === 0) { 
                window.location.href = 'levelVier.html'; 
            }
        }, 250); 

    }, 2000); 
}

window.onload = function() {
    document.getElementById('image').src = images[0];

    const button = document.querySelector('button');
    const initialPosition = positions[0];
    button.style.left = initialPosition.left;
    button.style.top = initialPosition.top;

    const circle = document.getElementById('circle');
    const initialSize = sizes[0];
    button.style.width = initialSize.width;
    button.style.height = initialSize.height;
    circle.style.width = initialSize.width;
    circle.style.height = initialSize.height;
    circle.style.left = initialPosition.left;
    circle.style.top = initialPosition.top;

    button.addEventListener('click', changeImage);
};
