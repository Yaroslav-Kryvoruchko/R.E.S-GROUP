let ButtonLeft = document.getElementById('line-gallery__left');
let ButtonRight = document.getElementById('line-gallery__right');
let Img1 = document.getElementById('img-1');
let Img2 = document.getElementById('img-2');
let Img3 = document.getElementById('img-3');
let Img4 = document.getElementById('img-4');
let Img5 = document.getElementById('img-5');

function one() {
    Img2.classList.add('left__img2');
    Img3.classList.add('left__img3');
    Img4.classList.add('left__img4');
    Img5.classList.add('left__img5');
}

// function two() {
//     Img2.classList.add('left__img2');
//     Img3.classList.add('left__img3');
//     Img4.classList.add('left__img4');
//     Img5.classList.add('left__img5');
// }

let i = 1;
let r = 1;

ButtonLeft.addEventListener('click', ()=> {
    if(i === 1) {
        one();
        i++;
        ButtonRight.style.opacity = '1';
        r = 1;
    }else if(i === 2){
        Img3.classList.toggle('left__img3-2');
        Img4.classList.toggle('left__img4-2');
        Img5.classList.toggle('left__img5-2');
        ButtonLeft.style.opacity = '0';
        i++;
    } else {
        i = 3;
    }
})

ButtonRight.addEventListener('click', ()=> {
    if(r === 1) {
        Img1.classList.add('right__img1');
        Img2.classList.add('right__img2');
        Img3.classList.add('right__img3');
        Img4.classList.add('right__img4');
        r++;
        ButtonLeft.style.opacity = '1';
    }else if(r === 2){
        Img1.classList.add('right__img1-2');
        Img2.classList.add('right__img2-2');
        Img3.classList.add('right__img3-2');
        ButtonRight.style.opacity = '0';
    }
})