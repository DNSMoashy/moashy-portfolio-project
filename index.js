let imgOne = document.getElementById('main');
let imgTwo = document.getElementById('midone');
let imgThree = document.getElementById('midtwo');
let imgFour = document.getElementById('waveone');
let imgIdx = 0;
const imgCarousel = [imgOne, imgTwo, imgThree, imgFour];


setInterval(() => {
  imgCarousel[imgIdx].hidden = true;

  // check if we need to restart - we are on the last element of imgCarousel
  if (imgIdx + 1 === imgCarousel.length) {
    // start back over at imgOne
    imgIdx = 0;
  } else {
    // add one so we can move to the next image
    imgIdx++;
  }

  // show the next image
  imgCarousel[imgIdx].hidden = false;
}, 700);

// let eventTarget = document.getElementById('animated-logo');

// //get random color function
// const randColor = () => {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
// }


// const changeBgColor = () => {
//   eventTarget.style.backgroundColor = randColor();
// }

// eventTarget.addEventListener('wheel', changeBgColor);