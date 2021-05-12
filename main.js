const max = 100;
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }
const randomNumber = getRandomNumber(max);
const input = document.querySelector("#tryNumber");
const inputValue = input.value;
const message = document.querySelector(".message");
const button = document.querySelector(".button");
const attemptsNumber = document.querySelector(".attempts_number");
const attemptsNumberOp = parseInt(attemptsNumber);


function handleResult (event){
    event.preventDefault()
    function resultMessage(inputValue) {
        if(inputValue < randomNumber) {
            message.innerHTML = "Demasiado bajo";
        }
        else if(inputValue > randomNumber) {
            message.innerHTML = "Demasiado alto";
        }
        else if(inputValue = randomNumber) {
            message.innerHTML = "Has ganado campeona!!"
        }
        else if(inputValue === NaN || inputValue > 100 || inputValue < 1) {
            message.innerHTML = "El número debe estar entre 1 y 100"
        }
    }
    function attemptsCount() {
        attemptsNumberOp.innerHTML += 1; 
    }
}
button.addEventListener("click", handleResult);

