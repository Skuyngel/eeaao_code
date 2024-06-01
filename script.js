let x = 0; 
const images = [
    "pictures_green/gp2", "pictures_green/gp3", "pictures_green/gp4", 
    "pictures_green/gp5", "pictures_green/gp6", "pictures_green/gp7", 
    "pictures_green/gp8", "pictures_green/gp9", "pictures_green/gp10"
];

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('moveButton');
  const image = document.getElementById('image');

  // Set the initial image source only once when the DOM is fully loaded
  image.src = images[0] + ".png";

  const positions = [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3]
  ];

  let currentIndex = 0; 

  button.addEventListener('click', () => {
    // Update the image source on button click
    x = (x + 1) % images.length;
    image.src = images[x] + ".png";

    // Get the new position from the array
    const newPosition = positions[currentIndex];
    const newRow = newPosition[0];
    const newColumn = newPosition[1];

    // Update the button's position
    button.style.gridRow = newRow;
    button.style.gridColumn = newColumn;

    // Increment the index to point to the next position
    currentIndex = (currentIndex + 1) % positions.length;
  });
});