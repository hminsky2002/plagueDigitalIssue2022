const body = document.getElementById('momBlogBody')
function randint(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomizeImg(el) {
    el.style.position = "sticky";
    el.style.top = randint(0, window.innerHeight) + "px";
    el.style.left = randint(0,  window.innerWidth) + "px";
}

let element = document.getElementById("randlogo");

function loopFunction(delay, callback){
    var loop = function(){
        callback();
        setTimeout(loop, delay);
    }; loop();
};


loopFunction(1000, function(){randomizeImg(element)});