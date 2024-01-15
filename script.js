let buttons = document.querySelectorAll(".btn")
let userScore = document.getElementById("user-score")
let pcScore = document.getElementById("pc-score")
let user = 0
let pc = 0

userScore.textContent = user
pcScore.textContent = pc

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault

        ClearResult()

        let buttonId = e.target.id

        RandomNum()
        const pcResult = RandomNum()
        
        const Results = () => {
        
            if (buttonId == pcResult) {
                PrintResult("Draw")
            } else if (buttonId == 1 && pcResult == 2) {
                pc++
                pcScore.textContent = pc
                PrintResult("You Lost (User: Rock, PC: Paper)")
            } else if (buttonId == 1 && pcResult == 3) {
                user++
                userScore.textContent = user
                PrintResult("You Won (User: Rock, PC: Scissors)")
            } else if (buttonId == 2 && pcResult == 1) {
                user++
                userScore.textContent = user
                PrintResult("You Won (User: Paper, PC: Rock)");
            } else if (buttonId == 2 && pcResult == 3) {
                pc++
                pcScore.textContent = pc
                PrintResult("You Lost (User: Paper, PC: Scissors)")
            } else if (buttonId == 3 && pcResult == 1) {
                pc++
                pcScore.textContent = pc
                PrintResult("You Lost (User: Scissors, PC: Rock)")
            } else if (buttonId == 3 && pcResult == 2) {
                user++
                userScore.textContent = user
                PrintResult("You Won (User: Scissors, PC: Paper)")
            }
        }
        Results()

    })
});


/**Print the result*/
const PrintResult = (text) => {
    let paragraph = document.createElement("p")
    paragraph.textContent = text

    let resultElement = document.querySelector(".result")
    resultElement.appendChild(paragraph)
}

/**Clean the result*/
const ClearResult = () => {
    let resultElement = document.querySelector(".result");
    resultElement.innerHTML = "";
}

/**Random number generation*/
const RandomNum = () => {
    return Math.floor(Math.random() * (4 - 1) + 1)
}


