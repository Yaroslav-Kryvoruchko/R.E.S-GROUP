let ButtonLeft = document.getElementById('line-gallery__left');
let ButtonRight = document.getElementById('line-gallery__right');
let ButtonLeft2 = document.getElementById('line-gallery__left--2');
let ButtonRight2 = document.getElementById('line-gallery__right--2');
let ButtonLeft3 = document.getElementById('line-gallery__left--3');
let ButtonRight3 = document.getElementById('line-gallery__right--3');
let Img1 = document.getElementById('img-1');
let Img2 = document.getElementById('img-2');
let Img3 = document.getElementById('img-3');
let Img4 = document.getElementById('img-4');
let Img5 = document.getElementById('img-5');



function right() {

    ButtonLeft.style.display = 'none';
    ButtonRight.style.display = 'none';
    ButtonLeft2.classList.add('openbutton');
    ButtonRight2.classList.add('openbutton');

    let i = 1;


ButtonLeft2.addEventListener('click', ()=> {
   if(i === 3) {
        Img1.classList.remove('right__img1-2');
        Img2.classList.remove('right__img2-2');
        Img3.classList.remove('right__img3-2');
        ButtonRight2.style.opacity = '1';
        i--;
   } else if(i === 2) {
        Img1.classList.remove('right__img1');
        Img2.classList.remove('right__img2');
        Img3.classList.remove('right__img3');
        Img4.classList.remove('right__img4');
        ButtonLeft.style.display = 'block';
        ButtonRight.style.display = 'block';
        ButtonLeft2.classList.remove('openbutton');
        ButtonRight2.classList.remove('openbutton');
        i--;
   }
})

ButtonRight2.addEventListener('click', ()=> {
    if(i === 1) {
        Img1.classList.add('right__img1');
        Img2.classList.add('right__img2');
        Img3.classList.add('right__img3');
        Img4.classList.add('right__img4');
        i++;
    }else if(i === 2){
        Img1.classList.add('right__img1-2');
        Img2.classList.add('right__img2-2');
        Img3.classList.add('right__img3-2');
        ButtonRight2.style.opacity = '0';
        i++;
    }
})
}

function left() {
    
    ButtonLeft.style.display = 'none';
    ButtonRight.style.display = 'none';
    ButtonLeft3.classList.add('openbutton');
    ButtonRight3.classList.add('openbutton');

    let l = 1;
    console.log(l);

    ButtonLeft3.addEventListener('click', ()=> {
        if(l === 1) {
            Img2.classList.add('left__img2');
            Img3.classList.add('left__img3');
            Img4.classList.add('left__img4');
            Img5.classList.add('left__img5');
            l++;
            console.log(l);
        }else if(l === 2) {
            Img3.classList.add('left__img3-2');
            Img4.classList.add('left__img4-2');
            Img5.classList.add('left__img5-2');
            ButtonLeft3.style.opacity = '0';
            l++;
            console.log(l);
        }
    })

    ButtonRight3.addEventListener('click', ()=> {
        if(l === 3) {
            Img3.classList.remove('left__img3-2');
            Img4.classList.remove('left__img4-2');
            Img5.classList.remove('left__img5-2');
            ButtonLeft3.style.opacity = '1';
            l--;
        }else if(l === 2) {
            Img2.classList.remove('left__img2');
            Img3.classList.remove('left__img3');
            Img4.classList.remove('left__img4');
            Img5.classList.remove('left__img5');
            ButtonLeft.style.display = 'block';
            ButtonRight.style.display = 'block';
            ButtonLeft3.classList.remove('openbutton');
            ButtonRight3.classList.remove('openbutton');
            l--;
        }
    })
}

ButtonLeft.addEventListener("click", left);
ButtonRight.addEventListener("click", right);