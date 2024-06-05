let currentIndex = 0;
const images = [
    "pictures_green/gp2.png", "pictures_green/gp3.png", "pictures_green/gp4.png", 
    "pictures_green/gp5.png", "pictures_green/gp6.png", "pictures_green/gp7.png", 
    "pictures_green/gp8.png", "pictures_green/gp9.png", "pictures_green/gp10.png"
];

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('image').src = images[currentIndex];
}

window.onload = function() {
    document.getElementById('image').src = images[0];
};