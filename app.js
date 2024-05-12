const slides = document.querySelectorAll(".slider");
console.log(slides);
var counter = 0;
slides.forEach((slider, index) => {
  slider.style.left = `${index * 100}%`;
});
// console.log(slides.length);
const goNext = () => {
  if (counter < slides.length - 1) {
    counter++;
    slideImage();
  }
};
const goPrev = () => {
  if (counter > 0) {
    counter--;
    console.log(slides.length);
    slideImage();
  }
};
const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
