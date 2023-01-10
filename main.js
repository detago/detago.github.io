let btn = document.getElementById('btn');
let output = document.getElementById('output');

let highPropChallanges =
    [
        'Drink a shot with someone you do not know',
        'Play a round of ragecage',
        'Take a selfie with someone you do not know',
        'Use the dancefloor until the end of the current song',
    ];

let lowPropChallanges =
    [
        'Play a round of foosball (Tischkicker)',
        'Play a round of beer pong',
        'Start a conversation with "never have I ever ..."',
        'Wear the red hat until someone else takes it',
        'Teach or learn the dance "Bachata"',

        'Challange the person in the red hat to sth and win',
        'Make the person in the red hat a compliment',

        'Use the funnel (Trichter)',
        'Exchange one article of clothing with someone',
        'Do not use the letter E for 2 minutes',
        'Make Lars a complement :)',
        'Have a non-alcoholic drink',
        'Sing along to a song. (You may request a song at the bar)',
    ];

var counter = 0;

btn.addEventListener('click', function () {
    var selectChallangeType = Math.floor(Math.random()*2);

    if (selectChallangeType == 0) {
        var randomChallange = highPropChallanges[Math.floor(Math.random() * highPropChallanges.length)]
    } else {
        var randomChallange = lowPropChallanges[Math.floor(Math.random() * lowPropChallanges.length)]
    }
        
    output.innerHTML = randomChallange;
    counter += 1;
    document.getElementById("counter").innerHTML = counter;
})
