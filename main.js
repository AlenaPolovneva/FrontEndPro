const images = ["img 1.jpg", "img 2.jpg", "img 3.jpg","img 4.jpg", "img 5.jpg", "img 6.jpg", "img 7.jpg", "img 8.jpg", "img 9.jpg", "img 10.jpg"] ;
    const randomIndex =  Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

document.write(`<img src="./img/${randomImage}" alt="Random Image">`);