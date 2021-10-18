const images = [
  "10.jpeg",
  "20.jpg",
  "30.jpg",
  "40.jpeg",
  "50.jpg",
  "60.jpg",
  "70.jpg",
  "80.jpeg",
  "90.jpg",
  "100.jpg",
  "110.jpeg",
  "img01.jpg",
];
const BACKGROUND = "background";
const chosenImag = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = BACKGROUND;

bgImage.src = `img/${chosenImag}`;

document.body.appendChild(bgImage);
