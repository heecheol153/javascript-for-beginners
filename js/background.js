const images = [
  "10.jpeg",
  "20.jpg",
  "30.jpg",
  "40.jpeg",
  "50.jpg",
  "60.jpg",
  "img01.jpg",
];
const BACKGROUND = "background";
const chosenImag = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = BACKGROUND;

bgImage.src = `img/${chosenImag}`;

document.body.appendChild(bgImage);
