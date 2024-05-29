let x = 0; 
const images = ["pictures_green/gp2", "pictures_green/gp3", "pictures_green/gp4", "pictures_green/gp5", "pictures_green/gp6", "pictures_green/gp7", "pictures_green/gp8", "pictures_green/gp9", "pictures_green/gp10"];

function changeImage() {
    var image = document.getElementById('image');
    image.src = images[x] + ".png";
    x = (x + 1) % images.length; 
}