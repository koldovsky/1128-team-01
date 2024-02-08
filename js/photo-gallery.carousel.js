const slides = [
    '<div><img src="img/gallery-carousel/cross-man-1.jpg" alt="Man looks up"></div>',
    '<div><img src="img/gallery-carousel/two-girls-2.jpg" alt="Two delighted girls"></div>',
    '<div><img src="img/gallery-carousel/girl-in-boat-3.jpg" alt="Girl sitting in a boat"></div>',
    '<div><img src="img/gallery-carousel/man-in-pink-4.jpg" alt="Man in pink T-shirt"></div>',
    '<div><img src="img/gallery-carousel/two-women-5.jpg" alt="Two women hug each other"></div>',
    '<div><img src="img/gallery-carousel/three-people-6.jpg" alt="Two sons one father"></div>',
    '<div><img src="img/gallery-carousel/lonely-man-7.jpg" alt="Man sitting next to river"></div>'
];


let slideIdx = 0;

const slideContainer = document.querySelector('.guests__carousel-items');


function renderSlide () {
    slideContainer.innerHTML = slides[slideIdx].replace('height="', 'style="height: 385px;" height="');
    if (window.matchMedia('(min-width: 768px)').matches){
        const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx].replace('height="', 'style="height: 385px;" height="');
        if (window.matchMedia('(min-width: 768px)').matches){
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx].replace('height="', 'style="height: 385px;" height="');
        }
    }
};


function nextSlide() {
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    renderSlide();
};

function backSlide() {
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
    renderSlide();
};



const btnNext = document.querySelector('.guests__carousel-btn-next');
btnNext.addEventListener('click', nextSlide);

const btnBack = document.querySelector('.guests__carousel-btn-back');
btnBack.addEventListener('click', nextSlide);

renderSlide();

window.addEventListener('resize', renderSlide)
