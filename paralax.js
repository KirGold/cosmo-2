let dropShadow = document.querySelectorAll(".slider__slider-body-box");
let newShadow = document.querySelectorAll(".slider__slider-body-box__1-2")
let newTwoShadow = document.querySelectorAll(".slider__slider-body-box__1-1")

window.addEventListener("mousemove", function(event){
    let x = event.offsetX
    let y = event.offsetY
    for(let i = 0; i < dropShadow.length; i++){
        let list = dropShadow[i]
        list.style.transform = `translate(-${x/50}px, -${y/50}px)`
    }
    for(let j = 0; j < newShadow.length; j++){
        let newList = newShadow[j]
        newList.style.transform = `translate(${x/300}px, -${y/300}px)`
    }
    /*for(let k = 0; k < newTwoShadow.length; k++){
        let newTwoList = newTwoShadow[k]
        newTwoList.style.transform = `translate(-${x/120}px, ${y/120}px)`
    }*/
})