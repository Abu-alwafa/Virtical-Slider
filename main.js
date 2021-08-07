const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = '-' + (slidesLength - 1) * 100 + '%';

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (dir) => {
  if (dir === 'up') activeSlideIndex >= slidesLength - 1 ? activeSlideIndex = 0 : activeSlideIndex++;
  else if (dir === 'down') activeSlideIndex <= 0 ? activeSlideIndex = slidesLength - 1 : activeSlideIndex--;

  const sliderHeight = sliderContainer.clientHeight;
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}