//Get Elements
const choices = document.querySelectorAll(".choices img");
const playBtn = document.querySelector("#play-btn");
const resetBtn = document.querySelector("#reset-btn");
const resultText = document.querySelector("#result");

let playerChoice = null;

//step1: select choice by clicking on image
choices.forEach(choice =>{ //choice is parameter
    choice.addEventListener("click", ()=>{ //here click is type of event listener and, another event handler function is passed as parameter
        //Store the player choice
        playerChoice = choice.alt.toLowerCase();  //choice.alt → Gets the alt text of the clicked <img> element (e.g., "Rock", "Paper", "Scissors"). and .toLowerCase() → Converts that text to all lowercase ("rock", "paper", "scissors") so it matches the format of the array

        //Highlight the selected choice
        choices.forEach(c =>c.style.border = "none");
        choice.style.border = "3px solid yellow";
    });
});
//choices is the NodeList of all the images (of rock, paper, scissors).
//NodeList is like an array-like collection of DOM elements. It is returned by methods such as document.querySelectorAll("img"), document.getElementsByTagName("p") (returns HTMLCollection, which is very similar).
//A NodeList is just a list (collection) of DOM nodes (like elements, text, etc.), returned when you query the DOM.

//step2: Play button logic
playBtn.addEventListener("click", ()=>{
    if(!playerChoice){
        resultText.textContent = "Please select Rock, Paper, or Scissors!";
        resultText.scrollIntoView({ behavior: "smooth", block: "center" }); //for auto scrolling down
        return;
    }

    const options = ["rock", "paper", "scissors"];
    const computerChoice = options[Math.floor(Math.random()*3)];

    let result = "";

    if(playerChoice === computerChoice){
        result = `It is a TIE! You both chose ${playerChoice.toUpperCase()}`;
    }
    else if(
        (playerChoice === "rock" && computerChoice === "scissors") || 
        (playerChoice === "paper" && computerChoice === "rock") || 
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `🎉 You, the Warrior, WINS! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`;
    }
    else{
        result = `😞 Sorry Warrior, TIMO WINS! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}!`;
    }

    resultText.textContent = result;
    resultText.scrollIntoView({ behavior: "smooth", block: "center" }); //for auto scrolling down
});

//step3: Reset button logic
resetBtn.addEventListener("click", ()=>{
    playerChoice = null;
    resultText.textContent = "";
    choices.forEach(c=> c.style.border = "none");

});


