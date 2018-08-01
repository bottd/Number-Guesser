var guess = 0;
var guessCount = 0;
var rangeMin = 0;
var rangeMax = 100;
var usrGuess = document.querySelector('.usrIn');
var guessDisplay = document.querySelector('.guess');
var submit = document.querySelector('.submit');
var clear = document.querySelector('.clear');
var reset = document.querySelector('.reset');
var result = document.querySelector('.result');
var setMin = document.querySelector('.setMin');
var setMax = document.querySelector('.setMax');
function generate(){
    var n = Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin);
    return n;
}
var number = generate();
clear.disabled = true;
submit.disabled = true;
submit.addEventListener('click', function(){
    submit.disabled = true;
    if (isNaN(usrGuess.value) || usrGuess.value > rangeMax || usrGuess.value < rangeMin){
        result.innerText = "Guess is out of range or not a number, try again";
    }
    else {
        guessCount ++;
        var guess = usrGuess.value;
        guessDisplay.innerText = guess;
        if (guess == number){
           result.innerText = "BOOM! \n You took " + guessCount + " guesses. \nRange has been expanded by 10 in both directions";
           rangeMin -= 10;
           rangeMax += 10; 
           number = generate(); 
           reset.disabled = false; 
           guessCount = 0;
        } else if (guess > number){
            result.innerText = "That is too high";
        }
        else if (guess < number){
            result.innerText = "That is too low";
        }
    } 
})
reset.addEventListener('click', function(){
    if (isNaN(setMin.value) || isNaN(setMax.value) || parseInt(setMin.value) >= parseInt(setMax.value)){
        result.innerText = "Error: Selected range NaN, try again";
    }
    else{
        guessDisplay.innerText = "?";
        if (setMin.value != ''){
           rangeMin = parseInt(setMin.value); 
        }
        if (setMax.value != ''){
            rangeMax = parseInt(setMax.value);
        }
        number = generate();
        result.innerText = "You have not guessed yet \n Range: " + rangeMin + "-" + rangeMax;
        guessDisplay.innerText = "?";
        reset.disabled = true;
        reset.classList.add('.disabled');
    }
})
clear.addEventListener('click', function(){
    usrGuess.value = '';
    setMin.value = '';
    setMax.value = '';
    clear.disabled = true;
    submit.disabled = true;
})
usrGuess.addEventListener('change', function(){
    clear.disabled = false;
    submit.disabled = false;
})
setMin.addEventListener('change', function(){
    clear.disabled = false;
    submit.disabled = false;
})

setMax.addEventListener('change', function(){
    clear.disabled = false;
    submit.disabled = false;
})
