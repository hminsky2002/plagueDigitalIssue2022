
const images = ['../img/penne.png','../img/pixelspaghetti.png','../img/tortellini.png','../img/spaghetti2.png']
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let start = Date.now(); // remember start time
let col1 = document.getElementById('col1');
let col3 = document.getElementById('col3');

draw1 = function() {
    let start = Date.now();
    var img = new Image();
    let index = getRndInteger(0,4)
    img.src =
        images[index];
    img.classList.toggle("rain")
    col1.appendChild(img)

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        img.style.top = timePassed / 5 + 'px';

        if (timePassed > 2000) clearInterval(timer);

    }, 20);
}
draw3 = function() {
    let start = Date.now();
    var img = new Image();
    let index = getRndInteger(0,4)
    img.src =
        images[index];
    img.classList.toggle("rain")
    col3.appendChild(img)

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        img.style.top = timePassed / 5 + 'px';

        if (timePassed > 2000) clearInterval(timer);

    }, 20);
}
let timer = setInterval(function() {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 2000) {
        clearInterval(timer); // finish the animation after 2 seconds
        return;
    }

    // draw the animation at the moment timePassed
    draw1(timePassed);
    draw3(timePassed);


}, 20);
var img2 = new Image();
img2.src = "../img/pastagod.png";
img2.classList.toggle('pgod')
var translation = document.getElementById('translation')
var text = document.getElementById('text')


translation.insertBefore(img2,text)




