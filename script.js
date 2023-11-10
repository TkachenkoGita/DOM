// 1) HTML: є кнопка.
//     JS: При натисканні на кнопку змінити текст цієї кнопки (див. textContent).
const changeNameBtn=document.querySelector('.changeNameBtn');
function clickHeandlerFirst(e){
    changeNameBtn.textContent='Changed content';
}
changeNameBtn.addEventListener('click', clickHeandlerFirst);

// 2) HTML: є кнопка.
//     JS: При натисканні на кнопку змінити її колір.
const changeColorBtn=document.querySelector('.changeColorBtn');
function clickHeandlerSecond(e){
    changeColorBtn.style.backgroundColor= 'blue'
    changeColorBtn.textContent='Changed color';
}
changeColorBtn.addEventListener('click', clickHeandlerSecond);


// 3) HTML: є зображення.
//     JS: Зробити так, щоб при появі сторінки відображалася одна картинка, а при наведенні миші на неї відображалася інша
const atrImg={
    src:'https://i.pinimg.com/originals/62/9c/d4/629cd4f49744c21ea652ac37dde8195f.jpg',
    alt:'Anime nature',
};
const atrImg2={
    src:'https://2x2tv.ru/upload/medialibrary/dd7/dd7694b4722252ca3f4badd122a038cc.jpg',
    alt: 'Kakashi Hattake',
};
function changedImgHeandler(e){
    changeImgHeandler.src=atrImg2.src;
    changeImgHeandler.alt=atrImg2.alt;
    changedImgHeandler.setAttribute('style', 'width: 350px');
};
const changeImgHeandler= document.querySelector('img');
changeImgHeandler.src=atrImg.src;
changeImgHeandler.alt=atrImg.alt;

changeImgHeandler.setAttribute('style', 'width: 350px');
changeImgHeandler.addEventListener('click', changedImgHeandler);

