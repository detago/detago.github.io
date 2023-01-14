let btn = document.getElementById('btn');
let output = document.getElementById('output');

let highPropChallanges =
    [
        'Drink a shot with someone you do not know',
        'Play a round of rage cage',
        'Take a selfie with someone you do not know',
        'Convince 2 others to use the dancefloor with you',
        'Teach someone your best dance move',
    ];

let lowPropChallanges =
    [
        'Your next drink is the same as the person on your left is drinking right now',
        'Make yourself a longdrink',
        'Make someone else a longdrink',
        'Play a round of foosball (Tischkicker)',
        'Make Lars a complement :)',
        'Convince someone to drink a shot',

        'Play a round of beer pong',
        'Wear the red hat until someone else takes it',
        'Challange the person in the red hat to sth and win',
        'Make the person in the red hat a compliment',

        'Use the funnel (Trichter)',
        'Exchange one article of clothing with someone',
        'Do not use the letter E for 2 minutes',
        'Have a non-alcoholic drink',
        'Sing along to a song. (You may request a song at the bar)',
        'Start a conversation with a random fact',
    ];


var counter = 0;
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
    counter += 1;
    document.getElementById("counter").innerHTML = counter;
})
