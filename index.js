const MAX_NUMBER = 100
const MIN_NUMBER = 0

let minGuess = MIN_NUMBER
let maxGuess = MAX_NUMBER

let guess = 50 

document.getElementById('too-high-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too high?
    guess--
    setMessage(`Is it ${guess}?`) 
    

})

document.getElementById('too-low-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too low?
    guess++
    setMessage(`Is it ${guess}?`) 
    
})

document.getElementById('is-correct-btn').addEventListener('click', function () {

    setMessage("WOOHOO!") 
})



function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    guess = (minGuess + maxGuess) / 2           /*Math.floor(Math.random() * 101)*/

    setMessage(`Is it ${guess}?`)
}

document
    .getElementById('start-btn')
    .addEventListener('click', start)

