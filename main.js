﻿let btn = document.getElementById('btn');
let output = document.getElementById('output');

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
    ];


var _counter = parseInt(localStorage.getItem("Cs"));
document.getElementById("counter").innerHTML = _counter;
var lastRandomChallange = "";

btn.addEventListener('click', function () {
    selectChallangeType = Math.floor(Math.random()*2);

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


    output.innerHTML = randomChallange;
    lastRandomChallange = randomChallange;
    _counter += 1;
    document.getElementById("counter").innerHTML = _counter;
    localStorage.setItem('Cs', _counter);
})

rst.addEventListener('click', function () {
    output.innerHTML = "Press the button to get a new challange";

    _counter = 0;
    document.getElementById("counter").innerHTML = _counter;
    localStorage.setItem('Cs', _counter);
})