let ButtonMenu = document.querySelector('.button__menu');
let BackDrop = document.querySelector('.backdrop');
let Menu = document.querySelector('.menu');

const About = document.getElementById('abouts');
const Gallery = document.getElementById('gallery');
const Contacts = document.getElementById('contacts');

ButtonMenu.addEventListener('click', ()=> {
    BackDrop.classList.add('open');
    Menu.classList.add('open');
});

BackDrop.addEventListener('click', ()=> {
    BackDrop.classList.remove('open');
    Menu.classList.remove('open');
});

About.addEventListener('click', ()=> {
    BackDrop.classList.remove('open');
    Menu.classList.remove('open');
});

Gallery.addEventListener('click', ()=> {
    BackDrop.classList.remove('open');
    Menu.classList.remove('open');
});

Contacts.addEventListener('click', ()=> {
    BackDrop.classList.remove('open');
    Menu.classList.remove('open');
});

