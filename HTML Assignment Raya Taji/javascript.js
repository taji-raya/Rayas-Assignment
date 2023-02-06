const prev = document.querySelector(".prevButton");
const next = document.querySelector(".nextButton");
const track = document.querySelector(".swiperContent");
const containerWidth = document.querySelector(".swiperContainer").offsetWidth;

next.addEventListener('click', () => {

    track.style.transform = `translateX(-${containerWidth}px)`;
})
prev.addEventListener('click', () => {

    track.style.transform = `translateX(-${0}px)`;
})

