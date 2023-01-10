let btn = document.getElementById('btn');
let output = document.getElementById('output');
let challange =
    [
        'Challange 1',
        'Challange 2',
        'Challange 3',
    ];

btn.addEventListener('click', function(){
    var randomChallange = challange[Math.floor(Math.random() * challange.length)]
    output.innerHTML = randomChallange;
})