const MAX_NUMBER = 100
const MIN_NUMBER = 0

let NewMaxNumber = 100 
let NewMinNumber = 0 

let guess  

document.getElementById('too-high-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too high?
    NewMaxNumber = guess
    guess = LowMiddleNumber(NewMinNumber,guess)
    setMessage(`Is it ${guess}?`) 
    

})

document.getElementById('too-low-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too low?
    NewMinNumber = guess
    guess = HighMiddleNumber(NewMaxNumber, guess)
    setMessage(`Is it ${guess}?`) 
    
})

document.getElementById('is-correct-btn').addEventListener('click', function () {

    setMessage("YAY!") 
})



function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    makeGuess() 
    setMessage(`Is it ${guess}?`)
}

globalThis.setMessage = setMessage; 

document
    .getElementById('start-btn')
    .addEventListener('click', start)

function makeGuess() {
    guess = Math.floor(Math.random() * 101)
}

function HighMiddleNumber(max, highGuess){
    console.log("high")
    highGuess = (max + guess)/2
    console.log(guess)
    return Math.round(highGuess)
}

function LowMiddleNumber(min, lowGuess){
    console.log("low")
    lowGuess = (min + guess)/2
    console.log(guess)
    return Math.round(lowGuess)
}

function setCounter() {
    
}

