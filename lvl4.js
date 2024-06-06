currentIndex = 0;
const images = [
    "pictures_greenrose/grp1.png",
    "pictures_greenrose/grp2.png",
    "pictures_greenrose/grp3.png", 
    "pictures_greenrose/grp4.png",
    "pictures_greenrose/grp5.png",
    "pictures_greenrose/grp6.png", 
    "pictures_greenrose/grp7.png"
];

const positions = [
    { left: '52.4%', top: '52.3%' },
    { left: '40.5%', top: '63.5%' },
    { left: '32.5%', top: '34.5%' },
    { left: '47%', top: '36%' },
    { left: '70%', top: '50%' },
    { left: '42%', top: '26%' },
    { left: '47%', top: '51.5%' }
];

const sizes = [
    { width: '95px', height: '95px' },
    { width: '30px', height: '30px' },
    { width: '100px', height: '100px' },
    { width: '70px', height: '70px' },
    { width: '320px', height: '320px' },
    { width: '25px', height: '25px' },
    { width: '100px', height: '100px' }
];

const divPositions = [
    { left: '67%', top: '35%' },
    { left: '0%', top: '0%' },
    { left: '50%', top: '17%' },
    { left: '25%', top: '19%' },
    { left: '42%', top: '40%' },
    { left: '14%', top: '45%' },
    { left: '45.5%', top: '15%' }
    // Add more positions as needed
];

const divSizes = [
    { width: '350px', height: '400px' },
    { width: '0px', height: '0px' },
    { width: '200px', height: '200px' },
    { width: '200px', height: '200px' },
    { width: '200px', height: '200px' },
    { width: '900px', height: '400px' },
    { width: '200px', height: '200px' }
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
                window.location.href = 'levelFünf.html'; 
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
