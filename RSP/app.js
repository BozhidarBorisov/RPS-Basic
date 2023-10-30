const yourChoice = document.getElementById('your-choice');
const cpuChoice = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const winsCounter = document.getElementById('wins-counter');
const lossCount = document.getElementById('loss-counter');
let userChoice;
let computerChoice;
let result;
let counter=0;
let lossCounter =0;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) =>{
 userChoice=e.target.id;
 yourChoice.innerHTML=userChoice;
 computerChoiceDisplay();
 getResult();
}));


function computerChoiceDisplay(){
    const randomNumber = Math.floor(Math.random()*possibleChoices.length)+1;
    if(randomNumber===1){
        computerChoice='rock';
    }
    if(randomNumber===2){
        computerChoice='paper';
    }
    if(randomNumber===3){
        computerChoice='scissors';
    }
    cpuChoice.innerHTML=computerChoice
}
function getResult(){
    if(computerChoice === userChoice){
        result = 'tie!'
    }
    if(computerChoice==='rock'&&userChoice==='paper'){
        result='you win!'
        counter++;
    }
    if(computerChoice==='paper'&&userChoice==='scissors'){
        result='you win!'
        counter++;
    }
    if(computerChoice==='rock'&&userChoice==='scissors'){
        result='you lose!'
        lossCounter++;
    }
    if(computerChoice==='scissors'&&userChoice==='paper'){
        result='you lose!'
        lossCounter++;
    }
    resultDisplay.innerHTML = result;
    winsCounter.innerHTML=counter;
    lossCount.innerHTML = lossCounter;
}