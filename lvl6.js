let currentIndex = 0;
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

const divPositions = [
    { left: '20%', top: '70%' },
    { left: '28%', top: '53%' },
    { left: '75%', top: '70%' },
    { left: '32%', top: '59.5%' },
    { left: '45.5%', top: '42%' },
    { left: '54%', top: '45%' },
    { left: '45.5%', top: '42%' },
    { left: '54%', top: '45%' },
    { left: '45.5%', top: '42%' }
    // Add more positions as needed
];

const divSizes = [
    { width: '0px', height: '0px' },
    { width: '250px', height: '250px' },
    { width: '200px', height: '200px' },
    { width: '40px', height: '40px' },
    { width: '200px', height: '200px' },
    { width: '200px', height: '200px' },
    { width: '200px', height: '200px' },
    { width: '200px', height: '200px' },
    { width: '200px', height: '200px' },
    // Add more sizes as needed
];

const phrases = [
    "Try again!", "Wrong circle", "Nu-uh", "Nope.", 
    "Try harder", "That's not it.", "Almost.", 
    "Not quite.", "Nice try."
];

console.log("init");

function changeImage() {
    console.log("changeImage");
    console.log(currentIndex);
    const button = document.querySelector('button');
    const circle = document.getElementById('circle');
    const wrongDiv = document.getElementById('wrong');

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

            // Update button, circle, and wrongDiv position and size
            const newPosition = positions[currentIndex];
            button.style.left = newPosition.left;
            button.style.top = newPosition.top;
            circle.style.left = newPosition.left;
            circle.style.top = newPosition.top;
            wrongDiv.style.left = newPosition.left;
            wrongDiv.style.top = newPosition.top;

            // Update button, circle, and wrongDiv size
            const newSize = sizes[currentIndex];
            button.style.width = newSize.width;
            button.style.height = newSize.height;
            circle.style.width = newSize.width;
            circle.style.height = newSize.height;
            wrongDiv.style.width = newSize.width;
            wrongDiv.style.height = newSize.height;

            // Update the position and size of the wrongDiv
            updateWrongDiv();

            // Check if it is the last image and redirect if true
            if (currentIndex === 0) { // This means it has looped back to the first image
                window.location.href = 'levelZwei.html'; 
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

const wrongDiv = document.getElementById('wrong');

    // Add click event listener to wrongDiv
    wrongDiv.addEventListener('click', () => {
        // Select a random phrase from the phrases array
        const randomIndex = Math.floor(Math.random() * phrases.length);
        const randomPhrase = phrases[randomIndex];

        // Display the random phrase in the wrongDiv
        wrongDiv.innerText = randomPhrase;

        // Clear the text after a certain duration (e.g., 2 seconds)
        setTimeout(() => {
            wrongDiv.innerText = '';
        }, 2000);
    });

    // Function to update the position and size of the wrongDiv
    function updateWrongDiv() {
        const currentPosIndex = currentIndex % divPositions.length;
        const currentSizeIndex = currentIndex % divSizes.length;

        // Update position
        wrongDiv.style.left = divPositions[currentPosIndex].left;
        wrongDiv.style.top = divPositions[currentPosIndex].top;

        // Update size
        wrongDiv.style.width = divSizes[currentSizeIndex].width;
        wrongDiv.style.height = divSizes[currentSizeIndex].height;
    }

    // Call the function initially
    updateWrongDiv();
