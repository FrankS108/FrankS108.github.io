let cards = document.querySelectorAll(".services__card");
let buttonLeft = document.querySelector(".services__symbol--left");
let buttonRight = document.querySelector(".services__symbol--right");

let index = 0;
let classShow = "services__card--show";

buttonLeft.addEventListener("click", () => {
    cards[index].classList.remove(classShow)
    index -= 1;
    if(index < 0){
        index = cards.length - 1;
        cards[index].classList.add(classShow)
    }else{
        cards[index].classList.add(classShow)
    }
})

buttonRight.addEventListener("click", () => {
    cards[index].classList.remove(classShow)
    index += 1;
    if(index > cards.length - 1){
        index = 0;
        cards[index].classList.add(classShow)
    }else{
        cards[index].classList.add(classShow)
    }
})


