let x = 0; 
const images = [
    "pictures_green/gp2", "pictures_green/gp3", "pictures_green/gp4", 
    "pictures_green/gp5", "pictures_green/gp6", "pictures_green/gp7", 
    "pictures_green/gp8", "pictures_green/gp9", "pictures_green/gp10"
];

const sizes = ['image-small', 'image-medium', 'image-medium', 'image-medium', 'image-medium','image-medium', 'image-small', 'image-medium','image-small', 'image-medium',];

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('moveButton');
  const image = document.getElementById('image');

  // Set the initial image source only once when the DOM is fully loaded
  image.src = images[0] + ".png";
  image.classList.add(sizes[0]);

  const positions = [
    [8, 11],
    [3, 3],
    [6, 6],
    [9, 9],
    [12, 12],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3]
  ];

  let currentIndex = 0; 

  button.addEventListener('click', () => {
    // Update the image source on button click
    const nextIndex = (currentIndex + 1) % images.length;
    image.src = images[nextIndex] + ".png";

    // Update the image size
    image.classList.remove(...sizes); // Remove all size classes
    image.classList.add(sizes[nextIndex % sizes.length]); // Add new size class

    // Get the new position from the array
    const newPosition = positions[nextIndex];
    const newRow = newPosition[0];
    const newColumn = newPosition[1];

    // Update the button's position
    button.style.gridRow = newRow;
    button.style.gridColumn = newColumn;

    // Increment the index to point to the next position
    currentIndex = nextIndex;
  });
});