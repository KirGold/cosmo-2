let sliderBox = document.querySelector(".slider")
let slideElement = document.querySelectorAll(".slider__slider")
let checkIndex = 0
let arrayColors = ["#e7c4c4", "#c1440e", "#6b93d6", "#8c8c94"]

function changeBackgroundColor(index){
    document.body.style.backgroundColor = arrayColors[index];
}











function showSlideElement(index){
    sliderBox.style.transform = `translateX(-${index*100}%)`;
    /* Ця функція переміщує слайди вліво та вправо, завдяки transform для елементу слайдера, 
    де всередині кожен елемент рухається на 100% ширини слайдера */
}

function toSlide(index){
    checkIndex = index
    showSlideElement(checkIndex)
    changeBackgroundColor(checkIndex)
}

function goNextSlide(){
/*     slideElement[checkIndex].classList.remove("new") */
    checkIndex = (checkIndex + 1) % slideElement.length
/*     slideElement[checkIndex].classList.add("new") */
    showSlideElement(checkIndex)
}

function goPrevSlide(){
/*     slideElement[checkIndex].classList.remove("new") */
        checkIndex = (checkIndex - 1 + slideElement.length) % slideElement.length
/*     slideElement[checkIndex].classList.add("new") */
    showSlideElement(checkIndex)
    }

/* Ці функціі змінюють наш checkIndex (0), для того, щоб відобразити 
наступний/попередній слайд */

showSlideElement(checkIndex)

let firstSlide = document.querySelector(".slider__dots__groop-element-1")
let secondSlide = document.querySelector(".slider__dots__groop-element-2")
let thirdSlide = document.querySelector(".slider__dots__groop-element-3")
let fourSlide = document.querySelector(".slider__dots__groop-element-4")

firstSlide.addEventListener("click", function(){
    toSlide(0)
})

secondSlide.addEventListener("click", function(){
    toSlide(1)
})

thirdSlide.addEventListener("click", function(){
    toSlide(2)
})

fourSlide.addEventListener("click", function(){
    toSlide(3)
})

























let slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach((slide) => {
    slide.style.display = 'none';
});
    slides[n].style.display = 'block';
}
