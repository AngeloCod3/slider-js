const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll('.img');

let number = 1;

left.addEventListener('click', ()=> {
    slider.style.transform = `translateX(${(number) * 600}px)`
    number--;
    console.log(number * 600)
});


right.addEventListener('click', ()=> {
    if(number < images.length) {
        slider.style.transform = `translateX(-${number * 600}px)`
        number++;
    } else {
        slider.style.transform = `translateX(0px)`
        number = 1;
    }
    console.log(number * 600)
});