let ButtonLeft = document.getElementById('line-gallery__left');
let ButtonRight = document.getElementById('line-gallery__right');
let Img1 = document.getElementById('img-1');
let Img2 = document.getElementById('img-2');
let Img3 = document.getElementById('img-3');
let Img4 = document.getElementById('img-4');
let Img5 = document.getElementById('img-5');

let i = 1;

function one() {
    Img2.classList.add('left__img2');
    Img3.classList.add('left__img3');
    Img4.classList.add('left__img4');
    Img5.classList.add('left__img5');
}

function two() {
    Img2.classList.add('left__img2');
    Img3.classList.add('left__img3');
    Img4.classList.add('left__img4');
    Img5.classList.add('left__img5');
}

ButtonLeft.addEventListener('click', ()=> {
    if(i === 1) {
        one();
        i++;
    }else if(i === 2){
        Img3.classList.add('left__img3-2');
        Img4.classList.add('left__img4-2');
        Img5.classList.add('left__img5-2');
        ButtonLeft.style.opacity = '0'
        i++;
    } else {
        i = 3;
    }
})

ButtonRight.addEventListener('click', ()=> {
    if(i === 3) {
        two();
        i--;
    }else if(i === 2){
        Img3.classList.remove('left__img3-2');
        Img4.classList.remove('left__img4-2');
        Img5.classList.remove('left__img5-2');
        ButtonLeft.style.opacity = '1'
        i--;
    } else if(i === 1) {
        Img2.classList.remove('left__img2');
        Img3.classList.remove('left__img3');
        Img4.classList.remove('left__img4');
        Img5.classList.remove('left__img5');
    }
})