const images = [
  "0.jpg",
  "2.jpg",
  "img01.jpg",
  "img02.jpg",
  "img03.jpg",
  "img04.jpg",
  "img05.jpg",
];
const BACKGROUND = "background";
const chosenImag = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = BACKGROUND;

bgImage.src = `img/${chosenImag}`;

document.body.appendChild(bgImage);
