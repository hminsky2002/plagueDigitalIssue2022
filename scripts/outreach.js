
const bills = ['img/dollarbill.jpeg','img/20dollarbill.jpeg','img/5dollarbill.jpeg','img/10dollarbill.jpeg']
var multiplierDiv = document.getElementById('multiplier')
var multiplier = 1;
var total = 0;
var clicks = 0;
function moneyTime() {
    clicks +=1
    if(total >= 500){
        multiplierDiv.innerHTML = "HOLY MULTIPLIER: ALL YOUR DONATIONS ARE MULTIPLIED BY 5!"
        multiplier = 5;
    }
    if(total >= 1000){
        multiplierDiv.innerHTML = "HOLIER MULTIPLIER: ALL YOUR DONATIONS ARE MULTIPLIED BY 10!"
        multiplier = 10;
    }
    if(total >= 5000){
        multiplierDiv.innerHTML = "HOLIER MULTIPLIER: ALL YOUR DONATIONS ARE MULTIPLIED BY 20!"
        multiplier = 10;
    }
    if(total >= 10000){
        multiplierDiv.innerHTML = "HOLIERER MULTIPLIER: ALL YOUR DONATIONS ARE MULTIPLIED BY 50!"
        multiplier = 20;
    }
    if(total >= 50000){
        multiplierDiv.innerHTML = "HOLIERERER MULTIPLIER: ALL YOUR DONATIONS ARE MULTIPLIED BY 100!"
        multiplier = 50;
    }
    if(total >= 100000){
        multiplierDiv.innerHTML = "HOLIEST MULTIPLIER: ALL YOUR DONATIONS ARE MULTIPLIED BY 500! PRAISE PLAUGE GOD"
        multiplier = 100;
    }
    var currentTotal = document.getElementById('total');
    var milestone = document.getElementById('milestone')
    var img = new Image();
    var bill;
    if(clicks == 1){
        bill = 0;
        total += 1;
    }
    else if(clicks == 2){
        bill = 2;
        total += 5;
    }
    else{
        switch(getRndInteger(0,3)) {
            case 0:
                bill = 0;
                total += 1*multiplier;
                break;
            case 1:
                bill = 1;
                total += 20*multiplier;
                break;
            case 2:
                bill = 2;
                total += 5*multiplier;
                break;
            case 3:
                bill = 3;
                total += 10*multiplier;
                break;
            default:
            // code block
        }
    }
    var max_height = document.getElementById('total').getBoundingClientRect().top
    img.src =
        bills[bill];
    img.style.position = "fixed"
    img.style.zIndex = 1;
    var bH = getRndInteger(50,100)
    img.style.height = `${bH}px`;
    img.style.width = `${bH*3}px`;
    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    img.style.top = `${getRndInteger(y+400,y+50)}px`
    img.style.left = `${getRndInteger(x-200,x+200)}px`
    document.getElementById('homeBody').appendChild(img);
    currentTotal.innerHTML = `$ ${total}.00`;
    if(total >= 1 && total < 5){
        milestone.innerHTML = 'You receive one prayer for prosperity and wealth because you clearly need it\n';

    }
    else if(total >= 5 && total < 10){
        milestone.innerHTML = 'With inflation your donation will just barely cover the cost of a coffee.';

    }
    else if(total >= 10 && total < 25){
        milestone.innerHTML = 'A starving child will be able to eat tonight thanks to you. They’ll be eating a gas station hot-dog because you couldn’t scrounge up the extra couple bucks';


    }
    else if(total >= 25 && total < 50){
        milestone.innerHTML = 'Donations of this amount go directly to fund our Youth Choir’s trip to perform at the Iowa State Fair';


    }
    else if(total >= 50 && total < 100){
        milestone.innerHTML = 'These donations will support our efforts to rebuild our exact replica of Stonehenge that was so devastatingly lost in the big storm';

    }
    else if(total >= 100 && total < 250){
        milestone.innerHTML = "One year subscription to our back catalog of reruns of children's television from Soviet-era Russia";

    }
    else if(total >= 250 && total < 500){
        milestone.innerHTML = "A refurbished series one XBox with minimal Cheeto-dust-finger stains on the controllers";

    }
    else if(total >= 500  && total < 1000){
        milestone.innerHTML = "Pooling all this money together to buy into the Mega Millions this week\n";

    }
    else if(total >= 1000 && total < 5000){
        milestone.innerHTML = "We can finally finish building our man cave (NO GIRLS ALLOWED)";

    }
    else if(total >= 5000 && total < 10000){
        milestone.innerHTML = "We will ensure you safe passage into heaven.";

    }
    else if(total >= 10000 && total < 25000){
        milestone.innerHTML = "We will ensure you never die."

    }
    else if(total >= 25000 && total < 50000){
        milestone.innerHTML = "We will ensure you do die, but in the exact way you want."

    }
    else if(total >= 50000 && total < 100000){
        milestone.innerHTML = "This donation will support the purchase of a Birkin for a child in need"

    }
    else if(total >= 100000  && total < 1000000){
        milestone.innerHTML = "If you have blood money you need to get rid of quick, feel free to drop it here and our holy accountants will take care of it"

    }
    else if(total >= 1000000 ){
        milestone.innerHTML = "You get a gift card to one free steak dinner at any participating Applebee's (Terms and Conditions apply. Donating constitutes permission (except where prohibited by law) to use Patron’s name, images, hometown, likeness, prize won, and photograph (all at Institution’s discretion) for future advertising, publicity in any and all media now or hereafter devised throughout the world in perpetuity, without additional compensation, notification or permission. Charitable Parties and their respective officers, directors, priests, pastors, deacons, rabbis, gods, deities, demi-gods, and idols (collectively, “Released Parties”) are not responsible for lost, late, misdirected, damaged, stolen, altered, garbled, incorrect, incomplete or delayed Entries; all of which will be void. Released Parties are also not responsible for problems related to health or wellness due to consuming undercooked meat which may limit a contestant’s ability to participate in this reward. Released Parties are not responsible for any other errors or malfunctions of any kind, whether network, printing, typographical, human or otherwise relating to or in connection with the Donation, including, without limitation, errors or malfunctions which may occur in connection with the administration of the Donation. Sponsor reserves the right at its sole discretion to disqualify any individual (and void his/her Entries)) it finds to not be worthy personality-wise of such a reward, or if the Donor is found to be intending to annoy, abuse, threaten or harass any other donor, Institution, or any of its representatives or to otherwise be acting in violation of these Official Rules. CAUTION: Any attempt by a Hater to deliberately damage any website or undermine the legitimate operations of the Donation is a violation of criminal and civil laws. Should such an attempt be made, the Sponsor reserves the right to seek damages from any such contestant to the fullest extent permitted by the law and publicly shame Donor in the town square."
    }

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

