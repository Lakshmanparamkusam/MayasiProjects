let currentScrollPosition = 0;
let scrollAmount = 300;

const sCont = document.querySelector(".sub-container");
const hScroll = document.querySelector(".horizontal-scroll");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");

btnScrollLeft.style.opacity = "0";

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val){
    currentScrollPosition += (val * scrollAmount);
    
    if(currentScrollPosition > 0){
        currentScrollPosition = 0;
        btnScrollLeft.style.opacity = "0";
    }else{
        btnScrollLeft.style.opacity = "1";
    }

    if(currentScrollPosition < maxScroll){
        currentScrollPosition = maxScroll;
        btnScrollRight.style.opacity = "0";
    }else{
        btnScrollRight.style.opacity = "1";
    }

    sCont.style.left = currentScrollPosition + "px";

}


function initializeSlider(sliderContainer) {
    let slider = sliderContainer.querySelector('.list');
    let items = sliderContainer.querySelectorAll('.list .item');
    let next = sliderContainer.querySelector('.buttons #next');
    let prev = sliderContainer.querySelector('.buttons #prev');
    let dots = sliderContainer.querySelectorAll('.dots li');

    let lengthItems = items.length - 1;
    let active = 0;

    next.onclick = function() {
        if (active + 1 <= lengthItems) {
            active = active + 1;
        } else {
            active = 0;
        }
        reloadSlider();
    };
    
    prev.onclick = function() {
        if (active - 1 >= 0) {
            active = active - 1;
        } else {
            active = lengthItems;
        }
        reloadSlider();
    };
    

    function reloadSlider() {
        slider.style.left = -items[active].offsetLeft + 'px';
        let lastActiveDot = sliderContainer.querySelector('.dots li.active');
        lastActiveDot.classList.remove('active');
        dots[active].classList.add('active');
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function() {
            active = i;
            reloadSlider();
        });
    }
    reloadSlider();
}

let sliderContainers = document.querySelectorAll('.grid_container');
for (let i = 0; i < sliderContainers.length; i++) {
    initializeSlider(sliderContainers[i]);
}






