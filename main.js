let btn = document.getElementById('btn');
let output = document.getElementById('output');
let rst = document.getElementById('rst');

let highPropChallenges =
    [
        // Paulinas Bday
        /*
        'Take a photo with someone',
        'Give someone a compliment',
        'Play Rock Paper Scissors with someone',
        'Be silent for 2 min',
        'Tell someone a joke',
        'Tell someone a fun fact',
        'Trade an article of clothing',
        'Take a shot without using your hands',
        'Give someone a hug',
        'Next time someone tries to talk to you bark at them',
        'Yell out the first thing that comes to your mind',
        'Put 5 different available liquids into a cup and drink it',
        'Let someone DM someone else from your account',
        'Get at least 3 other people to dance with you',
        'You cannot drink your drink by yourself for 10 minutes, someone else has to feed it to you',
        'Ask for ice at the bar, put it in your mouth until it melts',
        'Do 10 push ups',
        'Wear your shirt backwards/inside out for a few minutes',
        'Use a pickup line on someone',
        'Ask someone if you can sit on their lap (and do it if yes)',
        'Give someone a kiss (can be anywhere, mouth, cheek, forehead, hand, etc.)',
        'Smack someones ass',
        'Call a friend and tell them you cannot talk right now',
        'Play a round of Tischkicker',
        'Play a round of beer pong/rage cage/flip cup',
        'Sing along to a song with someone (you can request a song at the bar)',
        'Ask Paulina for the camera and take some photos ',
        'Start a conversation with someone you do not know (or know least)',
        'Say something weird/completely out of context to someone and walk away ',
        */

        //Lars Bday
        /*
        'Let someone choose a shot you drink',
        'Let someone mix you a longdrink',
        'Drink a shot with someone you do not know',
        'Play a round of rage cage',
        'Teach someone your best dance move',
        'Take a selfie with someone you do not know',
        */

        // ESN Glühwein
        'Try to sell something to someone or do a trade',
        'Teach someone your best dance move',
        'Take a selfie with someone you do not know',
        'Convince 2 others to use the dance floor with you until the end of the song',
        'Play a round of foosball (Tischkicker)',
        'Exchange one article of clothing with someone',
        'Start a conversation with a random fact',
        'Tell a really bad joke',
        'Take a photo with someone',
        'Give someone a compliment',
        'Play Rock Paper Scissors with someone',
        'Tell someone a joke',
        'Tell someone a fun fact',
        'Next time someone tries to talk to you bark at them',
        'Yell out the first thing that comes to your mind',
        'Wear your shirt backwards/inside out for a few minutes',
        'Use a pickup line on someone',
        'Sing along to a song with someone (you can request a song at the bar)',
        'Start a conversation with someone you do not know (or know least)',
        'Say something weird/completely out of context to someone and walk away',

    ];

let lowPropChallenges =
    [
        //Paulinas Bday
        /*
        'Try to sell something to someone or do a trade',
        'Drink from the funnel',
        'Down your drink',
        'Make Lars a compliment :)',     
        */
        
        //Lars Bday
        /*
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
        */

        'Make Lars a compliment :)',
        'Take a photo with a person who has more than 5 diopters',
        'Act out like a meme',
        'Start a survey with 10 people on any topic (e.g., favorite Disney movie, cats or dogs, socks with sandals okay or not)',
        'Discover the hidden talent of two strangers',
        'Move backwards for 2 minutes straight',
        'Confess romantic feelings to a stranger, optionally propose marriage and get on one knee (extremely emotional and heart-wrenching)'
    ];


var _counter = parseInt(localStorage.getItem("Cs")) || 0;
document.getElementById("counter").innerHTML = _counter;
var lastRandomChallenge = "";

btn.addEventListener('click', function () {
    selectChallengeType = Math.floor(Math.random()*100);

    if (selectChallengeType > 1) {
        randomChallenge = highPropChallenges[Math.floor(Math.random() * highPropChallenges.length)];
        if (lastRandomChallenge == randomChallenge) {
            randomChallenge = lowPropChallenges[Math.floor(Math.random() * lowPropChallenges.length)];
        }
    } else {
        randomChallenge = lowPropChallenges[Math.floor(Math.random() * lowPropChallenges.length)];
        if (lastRandomChallenge == randomChallenge) {
            randomChallenge = highPropChallenges[Math.floor(Math.random() * highPropChallenges.length)];
        }
    }


    output.innerHTML = randomChallenge;
    lastRandomChallenge = randomChallenge;
    _counter += 1;
    document.getElementById("counter").innerHTML = _counter;
    localStorage.setItem('Cs', _counter);
})

rst.addEventListener('click', function () {
    output.innerHTML = "Press the button to get a new challenge";

    _counter = 0;
    document.getElementById("counter").innerHTML = _counter;
    localStorage.setItem('Cs', _counter);
})
