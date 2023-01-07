function changeEye() {
    var image = document.getElementById('pl1');
    var image2 = document.getElementById('pl2');
    if (image.src.match("img/plaguelogo1.png")) {
        image.src = "img/plaguelogo2.png";
    }
    else {
        image.src = "img/plaguelogo1.png";
    }
    if (image2.src.match("img/plaguelogo1.png")) {
        image2.src = "img/plaguelogo2.png";
    }
    else {
        image2.src = "img/plaguelogo1.png";
    }
}



// Set up an event handler. Notice that we don't use "on" in front
// of the event name when doing it this way.
var menu = document.getElementById('homeMenu')

menu.addEventListener("mouseover", changeDef);

function changeDef(event){
    console.log(event.target)
    changeEye()
}