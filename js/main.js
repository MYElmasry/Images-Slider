let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
let slidesCount = sliderImages.length;
let currentSlide = 1;

let slideNumberElement= document.querySelector('.slide-number');
let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');
let indicators = document.querySelector('.indicators');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let paginationElement = document.createElement('ul');
paginationElement.id = 'pagination-ul';
for(let i = 1; i<= slidesCount; i++){
    let paginationItem = document.createElement('li');
    paginationItem.dataset.index = `${i}`;
    paginationItem.appendChild(document.createTextNode(`${i}`));
    paginationElement.appendChild(paginationItem);
}
indicators.appendChild(paginationElement);

let paginationBullets = Array.from(paginationElement.children);

paginationBullets.forEach((e, index) => {
    e.addEventListener('click', (e) => {
        currentSlide = index + 1;
        checker();
    })
})

checker();

function nextSlide(){
    currentSlide++;
    checker();
}
function prevSlide(){
    currentSlide--;
    checker();
}

function checker(){
    slideNumberElement.textContent = `Slide #${currentSlide} Of ${slidesCount}`;
    removeAllActives();
    sliderImages[currentSlide-1].classList.add('active');
    paginationElement.children[currentSlide - 1].classList.add('active');
    if(currentSlide == 1){
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    if(currentSlide == slidesCount){
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}

function removeAllActives(){
    sliderImages.forEach((e) => {
        e.classList.remove('active');
    })
    paginationBullets.forEach((e) => {
        e.classList.remove('active');
    })

}