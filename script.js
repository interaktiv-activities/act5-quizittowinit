// The following variables below are all the sound variables and mute/unmute fucntions 
var backgroundMusic = new Audio();
backgroundMusic.src = "SOUNDS/background-music.mp3"

let backgroundMusicStatus = 0
let backgroundMusicInterval 

function playBackgroundMusic(){
    backgroundMusic.play()
    backgroundMusic.volume = 0.1
}

function muteBackgroundMusic(){
    if (backgroundMusicStatus == 0){
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/mute.png")
        backgroundMusic.volume = 0
        backgroundMusicStatus++
    } else {
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/unmute.png")
        backgroundMusic.volume = 0.1
        backgroundMusicStatus--
    }
}

document.getElementById("mute-header-btn").addEventListener("click", muteBackgroundMusic)
//END HERE

// The following lines of codes include all of the functions and variables needed for you to transition from the start screen to the game board
let startScreenTimer

function startTicketInterval(){
    startScreenTimer = setInterval(startGame ,500)
    document.getElementById("right-ticket-img").style.opacity = "0%"
}

// Add the function below to your start game function
function hideStartScreen(){
    document.getElementById("start-screen").style.display = "none"
    playBackgroundMusic()
    backgroundMusicInterval = setInterval(playBackgroundMusic, 120000)
    clearInterval(startScreenTimer)
}

document.getElementById("start-button").addEventListener("click", startTicketInterval)
// END HERE

// The following lines of codes hides all the header and gameboard elements, and shows the end message
function endGame(){
    scoreCounter
    document.getElementById("game-board").style.display = "none"
    document.getElementById("header").style.display = "none"
    clearInterval(backgroundMusicInterval)
    backgroundMusic.volume = 0
    if (scoreCounter >= 8){
        document.getElementById("pass-end-screen").style.display = "flex"
    } else {
        document.getElementById("fail-end-screen").style.display = "flex"
    }
}
// END HERE

// QUESTION BANK

let questionBank =[
    [
        ["Cumulative Grade Point Average", true],
        ["Term Grade Point Average", false],
        ["Cumulative Term Average", false],
        ["Term Grade Average", false],
        "This general average should be 3.000 and above in order to qualify a student for the Latin Honors at the end of the school year."

    ],
    [
        ["3.000", false],
        ["2.500", false],
        ["3.500", true],
        ["3.800", false],
        "To be recognized on the Dean’s list at the end of each term, a student should garner the minimum Term Grade Point Average (TGPA) of ____ for First Honors with no grades below 2.500 in an academic course."
    ],
    [
        ["2.5", false],
        ["4.0", true],
        ["3.5", false],
        ["3.0", false],
        "If a percentage of 87 for an academic course is equivalent to 2.5. What is the equivalent grade of 97?"
    ],
    [
        ["MATWRLD", false],
        ["CSBLIFE", true],
        ["REEXSPI", false],
        ["ARTAPRI", false],
        "This is a non-academic course that is either marked with Pass (P) or Repeat (R)."
    ],
    [
        ["Cumulative Grade Point Average", false],
        ["Term Grade Point Average", true],
        ["Cumulative Term Average", false],
        ["Term Grade Average", false],
        "This is the general average a student get at the end of every term?"
    ],
    [
        ["12", false],
        ["10", false],
        ["15", true],
        ["18", false],
        "To be qualified as a Dean’s list, a student should take a minimum total load of ___ units."
    ],
    [
        ["3.000", true],
        ["2.500", false],
        ["3.500", false],
        ["3.800", false],
        "Aside from having no failure or R in any course, no deferred grade, and/or not more than 1 W for the term, you need to have this minimum Term Grade Point Average (TGPA) to qualify for Second Honors."
    ],
    [
        ["Take a total load of at least 15 academic units in an online term.", false],
        ["No record of a major offense or academic dishonesty.", false],
        ["Have no grade below 2.000 in an academic course.", true],
        ["Have a TGPA of at least 3.000 for Second Honors and 3.500 for First Honors.", false],
        "All of the following statements below are correct to qualify for Dean’s List except one."
    ],
    [
        ["4.0", false],
        ["3.5", true],
        ["3.0", false],
        ["2.5", false],
        "The grading system in De La Salle-College of Saint Benilde is different from other schools. If you receive a percentage score of 96 for an academic course, what is its equivalent grade?"
    ],
    [
        ["Academic Courses", false],
        ["Non-Academic Courses", true],
        ["Supplementary Courses", false],
        ["None of the choices given", false],
        "CSBLIFE, NSTP, and CSBGRAD are required courses that do not follow a numerical grading system. What do you call these courses?"
    ],
]

// VARIABLES

const choiceButtonA = document.getElementById("answer-txt-1")
const choiceButtonB = document.getElementById("answer-txt-2")
const choiceButtonC = document.getElementById("answer-txt-3")
const choiceButtonD = document.getElementById("answer-txt-4")

let questionPrompt = document.getElementById("question")

let scoreDisplay = document.getElementById("score")

let scoreCounter = 0
let roundIndex = 0

// GAME FUNCTIONS PROPER

function startGame(){
    hideStartScreen()
}

function changeDisplay(){
    choiceButtonA.innerHTML = questionBank[roundIndex][0][0]
    choiceButtonB.innerHTML = questionBank[roundIndex][1][0]
    choiceButtonC.innerHTML = questionBank[roundIndex][2][0]
    choiceButtonD.innerHTML = questionBank[roundIndex][3][0]
    questionPrompt.innerHTML = questionBank[roundIndex][4]

    scoreDisplay.innerHTML = "SCORE: " + scoreCounter
}

function selectChoiceA(){
    if (roundIndex <= 8 && questionBank[roundIndex][0][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 9){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

function selectChoiceB(){
    if (roundIndex <= 8 && questionBank[roundIndex][1][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 9){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

function selectChoiceC(){
    if (roundIndex <= 8 && questionBank[roundIndex][2][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 9){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

function selectChoiceD(){
    if (roundIndex <= 8 && questionBank[roundIndex][3][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 9){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

document.getElementById("answer-btn-1").addEventListener("click", selectChoiceA)
document.getElementById("answer-btn-2").addEventListener("click", selectChoiceB)
document.getElementById("answer-btn-3").addEventListener("click", selectChoiceC)
document.getElementById("answer-btn-4").addEventListener("click", selectChoiceD)
