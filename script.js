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

 
  image.src = images[0] + ".png";
  image.classList.add(sizes[0]);

  const positions = [
    [10,15],
    [10,12],
    [10,12],
    [10,12],
    [10,12],
    [10,12],
    [10,12],
    [10,12],
    [10,12],
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

    if (images[nextIndex] === "pictures_green/gp10") {
      button.addEventListener('click', redirectToNewPage);
  } else {
      button.removeEventListener('click', redirectToNewPage);
  }

  currentIndex = nextIndex;
});

function redirectToNewPage() {
  window.location.href = "newpage.html"; // replace with your new page URL
}
});