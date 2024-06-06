let currentIndex = 0;
const images = [
    "pictures_rosepurple/rpp1.png",
    "pictures_rosepurple/rpp2.png",
    "pictures_rosepurple/rpp3.png",
    "pictures_rosepurple/rpp4.png",
    "pictures_rosepurple/rpp5.png",
    "pictures_rosepurple/rpp6.png"
];

const positionsButton1 = [
    { left: '30%', top: '53%' },
    { left: '77%', top: '17.5%' },
    { left: '70%', top: '63%' },
    { left: '14.5%', top: '18%' },
    { left: '46.5%', top: '41.5%' },
    { left: '37%', top: '52%' }
];

const sizesButton1 = [
    { width: '280px', height: '280px' },
    { width: '50px', height: '50px' },
    { width: '75px', height: '75px' },
    { width: '310px', height: '310px' },
    { width: '80px', height: '80px' },
    { width: '370px', height: '370px' }
];

const positionsButton2 = [
    { left: '80%', top: '70%' },
    { left: '20%', top: '40%' },
    { left: '50%', top: '30%' },
    { left: '80%', top: '20%' },
    { left: '70%', top: '60%' },
    { left: '40%', top: '70%' }
];

const sizesButton2 = [
    { width: '100px', height: '100px' },
    { width: '150px', height: '150px' },
    { width: '200px', height: '200px' },
    { width: '250px', height: '250px' },
    { width: '300px', height: '300px' },
    { width: '350px', height: '350px' }
];

function changeImage(buttonId) {
    console.log("changeImage");
    console.log(currentIndex);
    const button = document.getElementById(buttonId);
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

            // Update button and circle position based on buttonId
            let newPosition, newSize;
            if (buttonId === 'button1') {
                newPosition = positionsButton1[currentIndex];
                newSize = sizesButton1[currentIndex];
            } else if (buttonId === 'button2') {
                newPosition = positionsButton2[currentIndex];
                newSize = sizesButton2[currentIndex];
            }

            button.style.left = newPosition.left;
            button.style.top = newPosition.top;
            circle.style.left = newPosition.left;
            circle.style.top = newPosition.top;

            // Update button and circle size
            button.style.width = newSize.width;
            button.style.height = newSize.height;
            circle.style.width = newSize.width;
            circle.style.height = newSize.height;

            // Redirect if currentIndex is 0
            if (currentIndex === 0) { 
                window.location.href = 'levelSieben.html'; 
            }
        }, 250); 

    }, 2000); 
}

window.onload = function() {
    document.getElementById('image').src = images[0];

    const button1 = document.getElementById('button1');
    const initialPosition1 = positionsButton1[0];
    button1.style.left = initialPosition1.left;
    button1.style.top = initialPosition1.top;

    const circle = document.getElementById('circle');
    const initialSize = sizesButton1[0];
    button1.style.width = initialSize.width;
    button1.style.height = initialSize.height;
    circle.style.width = initialSize.width;
    circle.style.height = initialSize.height;
    circle.style.left = initialPosition1.left;
    circle.style.top = initialPosition1.top;

    button1.addEventListener('click', function() {
        changeImage('button1');
    });

    const button2 = document.getElementById('button2');
    const initialPosition2 = positionsButton2[0];
    button2.style.left = initialPosition2.left;
    button2.style.top = initialPosition2.top;

    const initialSize2 = sizesButton2[0];
    button2.style.width = initialSize2.width;
    button2.style.height = initialSize2.height;

    button2.addEventListener('click', function() {
        changeImage('button2');
    });
};




/*let currentIndex = 0;
const images = [
    "pictures_rosepurple/rpp1.png",
    "pictures_rosepurple/rpp2.png",
    "pictures_rosepurple/rpp3.png",
    "pictures_rosepurple/rpp4.png",
    "pictures_rosepurple/rpp5.png",
    "pictures_rosepurple/rpp6.png"
];

const positions = [
    { left: '30%', top: '53%' },
    { left: '77%', top: '17.5%' },
    { left: '70%', top: '63%' },
    { left: '14.5%', top: '18%' },
    { left: '46.5%', top: '41.5%' },
    { left: '37%', top: '52%' }
];

const sizes = [
    { width: '280px', height: '280px' },
    { width: '50px', height: '50px' },
    { width: '75px', height: '75px' },
    { width: '310px', height: '310px' },
    { width: '80px', height: '80px' },
    { width: '370px', height: '370px' }
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
                window.location.href = 'levelSieben.html'; 
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
*/