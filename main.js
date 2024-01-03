let btn = document.getElementById('btn');
let output = document.getElementById('output');
let rst = document.getElementById('rst');

let highPropChallanges =
    [
        'Let someone choose a shot you drink',
        'Let someone mix you a longdrink',
        'Drink a shot with someone you do not know',
        'Play a round of rage cage',
        'Teach someone your best dance move',
        'Take a selfie with someone you do not know',
    ]; 

let lowPropChallanges =
    [
        'Mix someone a longdrink',
        'Convince 2 others to use the dancefloor with you until the end of the song',
        'Drink a shot with someone you know',
        'Your next drink is the same as the person on your left is drinking right now',
        'Mix yourself a longdrink',
        'Play a round of foosball (Tischkicker)',
        'Make Lars a complement :)',
        'Convince someone to drink a shot',
        'Play a round of beer pong',
        'Use the funnel (Trichter)',
        'Exchange one article of clothing with someone',
        'Have a non-alcoholic drink',
        'Sing along to a song with someone. (You may request a song at the bar)',
        'Start a conversation with a random fact',
        'Tell a really bad joke',
        'Teach or find someone to teach you Bachata',
        'Teach or find someone to teach you Lindyhop'
    ];

let usedChallangesHighProb = [];
let usedChallangesLowProb = [];

var _counter = parseInt(localStorage.getItem("Cs")) || 0;
document.getElementById("counter").innerHTML = _counter;
// var lastRandomChallange = "";



// um Liste mit noch nicht vorkommenden Elemente zu erstellen
function findUniqueElements(list1, list2) {
    let uniqueElements = [];

    for (let i = 0; i < list1.length; i++) {
        if (!list2.includes(list1[i]) && !uniqueElements.includes(list1[i])) {
            uniqueElements.push(list1[i]);
        }
    }

    for (let i = 0; i < list2.length; i++) {
        if (!list1.includes(list2[i]) && !uniqueElements.includes(list2[i])) {
            uniqueElements.push(list2[i]);
        }
    }

    return uniqueElements;
}

btn.addEventListener('click', function () {

    // select a challange
    selectChallangeType = Math.floor(Math.random() * 100);

    // Highprob challanges
    if (selectChallangeType > 30) {
        // checks ob alle schon verwendet, wenn ja dann low prob
        if (usedChallangesHighProb.length != highPropChallanges.length) {
            let uniqueList = findUniqueElements(usedChallangesHighProb, highPropChallanges);
            randomChallange = uniqueList[Math.floor(Math.random() * uniqueList.length)]
            usedChallangesHighProb.push(randomChallange)
        } else {
            let uniqueList = findUniqueElements(usedChallangesLowProb, lowPropChallanges);
            randomChallange = uniqueList[Math.floor(Math.random() * uniqueList.length)]
            usedChallangesLowProb.push(randomChallange)
        }
    }
    // low prob
    else {
        if (usedChallangesLowProb.length != lowPropChallanges.length) {
            let uniqueList = findUniqueElements(usedChallangesLowProb, lowPropChallanges);
            randomChallange = uniqueList[Math.floor(Math.random() * uniqueList.length)]
            usedChallangesLowProb.push(randomChallange)
        } else {
            let uniqueList = findUniqueElements(usedChallangesHighProb, highPropChallanges);
            randomChallange = uniqueList[Math.floor(Math.random() * uniqueList.length)]
            usedChallangesHighProb.push(randomChallange)
        }
    }


    // wenn alle Challanges durch, dann wieder reset
    if (usedChallangesHighProb.length == highPropChallanges.length && usedChallangesLowProb.length == lowPropChallanges.length) {
        usedChallangesHighProb = [];
        usedChallangesLowProb = [];
    }

/*   selectChallangeType = Math.floor(Math.random()*2);

    if (selectChallangeType == 0) {
        randomChallange = highPropChallanges[Math.floor(Math.random() * highPropChallanges.length)];
        if (lastRandomChallange == randomChallange) {
            randomChallange = lowPropChallanges[Math.floor(Math.random() * lowPropChallanges.length)];
        }
    } else {
        randomChallange = lowPropChallanges[Math.floor(Math.random() * lowPropChallanges.length)];
        if (lastRandomChallange == randomChallange) {
            randomChallange = highPropChallanges[Math.floor(Math.random() * highPropChallanges.length)];
        }
    }
    */

    output.innerHTML = randomChallange;
    // lastRandomChallange = randomChallange;
    document.getElementById("counter").innerHTML = _counter;
    localStorage.setItem('Cs', _counter);
    _counter += 1;
})

rst.addEventListener('click', function () {
    output.innerHTML = "Press the button to get a new Challange";
    _counter = 0;

    usedChallangesHighProb = [];
    usedChallangesLowProb = [];

    document.getElementById("counter").innerHTML = _counter;
    localStorage.setItem('Cs', _counter);
})