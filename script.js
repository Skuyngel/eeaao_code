let x = 0; 
const images = [
    "pictures_green/gp2", "pictures_green/gp3", "pictures_green/gp4", 
    "pictures_green/gp5", "pictures_green/gp6", "pictures_green/gp7", 
    "pictures_green/gp8", "pictures_green/gp9", "pictures_green/gp10"
];

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('moveButton');
  const image = document.getElementById('image');

  button.addEventListener('click', () => {
    // Change the image source
    image.src = images[x] + ".png";
    x = (x + 1) % images.length; 

    // Generate random positions for the button within the grid
    const newRow = Math.floor(Math.random() * 3) + 1; // Random row between 1 and 3
    const newColumn = Math.floor(Math.random() * 3) + 1; // Random column between 1 and 3

    // Update the button's grid position
    button.style.gridRow = 3;
    button.style.gridColumn = 3;
  });
});