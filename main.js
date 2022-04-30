//catching all main elements
//background colors
const colorRed = document.querySelector('a.red');
const colorBlue = document.querySelector('a.blue');
const colorGreen = document.querySelector('a.green');
// Navigation elements for Rules
const traditional = document.querySelector('a.traditional');
const lizardSpock = document.querySelector('a.lizardSpock');
// Rules
const rules = document.querySelector('.rules');
// Element for image 1 and image 2 
const img1 = document.querySelector('.img1');

const selectTypeOfGame = document.querySelector('.navElement2');
//Images for games
const imgTraditionalGame = document.querySelector('.imgTraditionalGame');
const imgLizardGame = document.querySelector('.imgLizardGame');

const newGameArea = document.querySelector('.newgame');

const TraditionalGame = document.querySelector('.imgTraditionalGame');
const LizardSpockGame = document.querySelector('.imgLizardGame');

const OpenGridTraditionalGame = document.querySelector('.GridTraditionalGameArea');
const OpenGridSpockGame = document.querySelector('.GridLizardGameArea');

const scissors = document.querySelector('.scissors');
const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');

const TraditionalGameRockClass = document.querySelector('#tRock');
const TraditionalGameScissorsClass = document.querySelector('#tScissors');
const TraditionalGamePaperClass = document.querySelector('#tPaper');

const TraditionalGameRockClassC = document.querySelector('#tRockC');
const TraditionalGameScissorsClassC = document.querySelector('#tScissorsC');
const TraditionalGamePaperClassC = document.querySelector('#tPaperC');

const paper2 = document.querySelector('.paper2');
const rock2 = document.querySelector('.rock2');
const scissors2 = document.querySelector('.scissors2');
const spock = document.querySelector('.spock');
const lizard = document.querySelector('.lizard');

const LSGameRockClass = document.querySelector('#lsRock');
const LSGameScissorsClass = document.querySelector('#lsScissors');
const LSGamePaperClass = document.querySelector('#lsPaper');
const LSGameLizardClass = document.querySelector('#lsLizard');
const LSGameSpockClass = document.querySelector('#lsSpock');

const LSGameRockClassC = document.querySelector('#lsRockC');
const LSGameScissorsClassC = document.querySelector('#lsScissorsC');
const LSGamePaperClassC = document.querySelector('#lsPaperC');
const LSGameLizardClassC = document.querySelector('#lsLizardC');
const LSGameSpockClassC = document.querySelector('#lsSpockC');

let myHeading3 = document.querySelector('h2');
let myHeading4 = document.querySelector('h3');
let myHeading5 = document.querySelector('h4');
let Turnsleft = 5;
let playerPoints=0;
let computerPoints=0;
let clickSound = new Audio("sound01.wav");

//change color

colorRed.addEventListener('click', () => {
    document.body.style.backgroundColor = "#af111c";
})

colorBlue.addEventListener('click', () => {
    document.body.style.backgroundColor = "blue";
})

colorGreen.addEventListener('click', () => {
    document.body.style.backgroundColor = "green";
})

// Image & text creator for rules

traditional.addEventListener('click', () => {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'The players may count aloud to three, or speak the name of the game (e.g. "Rock! Paper! Scissors!"), either raising one hand in a fist and swinging it down with each syllable or holding it behind their back. They then "throw" by extending it towards their opponent. Variations include a version where players throw immediately on the third count (thus throwing on the count of "Scissors!"), or a version where they shake their hands three times before "throwing".';;
    img1.src="image1.jpg";
    img1.style.display = "inline";
    newGameArea.style.display = "none";
    rules.style.display = "inline";
    OpenGridTraditionalGame.style.display = "none";
    OpenGridSpockGame.style.display = "none";
})

lizardSpock.addEventListener('click', () => {
    let myHeading2 = document.querySelector('h1');
    myHeading2.textContent = 'One popular five-weapon expansion is "rock paper scissors Spock lizard", invented by Sam Kass and Karen Bryla,[95] which adds "Spock" and "lizard" to the standard three choices. "Spock" is signified with the Star Trek Vulcan salute, while "lizard" is shown by forming the hand into a sock-puppet-like mouth. Spock smashes scissors and vaporizes rock; he is poisoned by lizard and disproved by paper. Lizard poisons Spock and eats paper; it is crushed by rock and decapitated by scissors. This variant was mentioned in a 2005 article in The Times of London[96] and was later the subject of an episode of the American sitcom The Big Bang Theory in 2008 (as rock-paper-scissors-lizard-Spock).';
    img1.src="image2.jpg";
    img1.style.display = "inline";
    newGameArea.style.display = "none";
    rules.style.display = "inline";
    OpenGridTraditionalGame.style.display = "none";
    OpenGridSpockGame.style.display = "none";
})

// Select new game 

selectTypeOfGame.addEventListener('click', () => {
    let myHeading3 = document.querySelector('h2');
    myHeading3.textContent = 'Select the type of game:';
    newGameArea.style.display = "inline";
    imgTraditionalGame.src="image4.jpg";
    imgLizardGame.src="image3.jpg";
    rules.style.display = "none";
    TraditionalGame.style.display = "inline";
    LizardSpockGame.style.display = "inline";
    OpenGridTraditionalGame.style.display = "none";
    OpenGridSpockGame.style.display = "none";
})
// Open traditional game 
TraditionalGame.addEventListener('click', () => {
    OpenGridTraditionalGame.style.display = "grid";
    OpenGridSpockGame.style.display = "none";
    TraditionalGame.style.display = "none";
    LizardSpockGame.style.display = "none";
    TraditionalGameRockClass.style.display = "none";
    TraditionalGameScissorsClass.style.display = "none";
    TraditionalGamePaperClass.style.display = "none";

    Turnsleft=5;
    playerPoints=0;
    computerPoints=0;

    TraditionalGameRockClassC.style.display = "none";
    TraditionalGameScissorsClassC.style.display = "none";
    TraditionalGamePaperClassC.style.display = "none";
    myHeading3.textContent = 'Turns left: '+Turnsleft;
    myHeading4.textContent = playerPoints+' : '+computerPoints;
})
// Open Lizard & Spock Game
LizardSpockGame.addEventListener('click', () => {
    OpenGridSpockGame.style.display = "grid";
    OpenGridTraditionalGame.style.display = "none";
    TraditionalGame.style.display = "none";
    LizardSpockGame.style.display = "none";
    
    LSGameRockClass.style.display = "none";
    LSGameScissorsClass.style.display = "none";
    LSGamePaperClass.style.display = "none";
    LSGameLizardClass.style.display = "none";
    LSGameSpockClass.style.display = "none";

    Turnsleft=10;
    playerPoints=0;
    computerPoints=0;

    LSGameRockClassC.style.display = "none";
    LSGameScissorsClassC.style.display = "none"; 
    LSGamePaperClassC.style.display = "none";
    LSGameLizardClassC.style.display = "none";
    LSGameSpockClassC.style.display = "none";
    myHeading3.textContent = 'Turns left: '+Turnsleft;
    myHeading5.textContent = playerPoints+' : '+computerPoints;

})
// Traditional Game 
paper.addEventListener('click', () => {
    clickSound.play()
    if (Turnsleft> 1) { 
        Turnsleft=Turnsleft-1;
        myHeading3.textContent = 'Turns left: '+Turnsleft;
        TraditionalGameRockClass.style.display = "none";
        TraditionalGameScissorsClass.style.display = "none";
        TraditionalGamePaperClass.style.display = "inline-block";
        let x = Math.floor((Math.random() * 3));
            if (x==0) {
                TraditionalGamePaperClassC.style.display = "none";
                TraditionalGameScissorsClassC.style.display = "none";
                TraditionalGameRockClassC.style.display = "inline-block";
                playerPoints=playerPoints+1;
                myHeading4.textContent = playerPoints+' : '+computerPoints;
            } else if (x==1) {
                TraditionalGameRockClassC.style.display = "none";
                TraditionalGamePaperClassC.style.display = "none";
                TraditionalGameScissorsClassC.style.display = "inline-block";
                computerPoints=computerPoints+1;
                myHeading4.textContent = playerPoints+' : '+computerPoints;
            } else {
                TraditionalGameRockClassC.style.display = "none";
                TraditionalGameScissorsClassC.style.display = "none";
                TraditionalGamePaperClassC.style.display = "inline-block";
                myHeading4.textContent = playerPoints+' : '+computerPoints;
    }
        
    } else if (Turnsleft == 1) { 
        Turnsleft=Turnsleft-1;
        TraditionalGameRockClass.style.display = "none";
        TraditionalGameScissorsClass.style.display = "none";
        TraditionalGamePaperClass.style.display = "none";
        TraditionalGameRockClassC.style.display = "none";
        TraditionalGameScissorsClassC.style.display = "none";
        TraditionalGamePaperClassC.style.display = "none";
        if (playerPoints==computerPoints) {
            myHeading3.textContent = 'Draw! Try again';
        } else if (playerPoints > computerPoints) {
            myHeading3.textContent = 'You win! Try again';
        } else {
            myHeading3.textContent = 'You lose! Try again';
        }
        myHeading4.textContent = playerPoints+' : '+computerPoints;
    }
    else {
        Turnsleft = 6
        playerPoints=0
        computerPoints=0
        myHeading4.textContent = playerPoints+' : '+computerPoints;
    }

    
    
})
rock.addEventListener('click', () => {
    clickSound.play()
    if (Turnsleft> 1) {
        Turnsleft=Turnsleft-1;
        myHeading3.textContent = 'Turns left: '+Turnsleft;
        TraditionalGamePaperClass.style.display = "none";
        TraditionalGameScissorsClass.style.display = "none";
        TraditionalGameRockClass.style.display = "inline-block";
        let x = Math.floor((Math.random() * 3));
            if (x == 0) {
                TraditionalGamePaperClassC.style.display = "none";
                TraditionalGameScissorsClassC.style.display = "none";
                TraditionalGameRockClassC.style.display = "inline-block";
                myHeading4.textContent = playerPoints+' : '+computerPoints;
            } else if ( x==1 ) {
                TraditionalGameRockClassC.style.display = "none";
                TraditionalGamePaperClassC.style.display = "none";
                TraditionalGameScissorsClassC.style.display = "inline-block";
                computerPoints=computerPoints+1;
                myHeading4.textContent = playerPoints+' : '+computerPoints;
            } else {
                TraditionalGameRockClassC.style.display = "none";
                TraditionalGameScissorsClassC.style.display = "none";
                TraditionalGamePaperClassC.style.display = "inline-block";
                playerPoints=playerPoints+1;
                myHeading4.textContent = playerPoints+' : '+computerPoints;

    }
    } else if (Turnsleft == 1) { 
        Turnsleft=Turnsleft-1;
        TraditionalGameRockClass.style.display = "none";
        TraditionalGameScissorsClass.style.display = "none";
        TraditionalGamePaperClass.style.display = "none";
        TraditionalGameRockClassC.style.display = "none";
        TraditionalGameScissorsClassC.style.display = "none";
        TraditionalGamePaperClassC.style.display = "none";
        if (playerPoints==computerPoints) {
            myHeading3.textContent = 'Draw! Try again';
        } else if (playerPoints > computerPoints) {
            myHeading3.textContent = 'You win! Try again';
        } else {
            myHeading3.textContent = 'You lose! Try again';
        }
        myHeading4.textContent = playerPoints+' : '+computerPoints;
    }
    else {
        Turnsleft = 6
        playerPoints=0
        computerPoints=0
        myHeading4.textContent = playerPoints+' : '+computerPoints;
    }
    
    
})
scissors.addEventListener('click', () => {
    clickSound.play()
    if (Turnsleft> 1) { 
        Turnsleft=Turnsleft-1;
        myHeading3.textContent = 'Turns left: '+Turnsleft;
        TraditionalGameRockClass.style.display = "none";
        TraditionalGamePaperClass.style.display = "none";
        TraditionalGameScissorsClass.style.display = "inline-block";
        let x = Math.floor((Math.random() * 3));
            if (x==0) {
                TraditionalGamePaperClassC.style.display = "none";
                TraditionalGameScissorsClassC.style.display = "none";
                TraditionalGameRockClassC.style.display = "inline-block";
                computerPoints=computerPoints+1;
                myHeading4.textContent = playerPoints+' : '+computerPoints;
        
            } else if (x==1) {
                TraditionalGameRockClassC.style.display = "none";
                TraditionalGamePaperClassC.style.display = "none";
                TraditionalGameScissorsClassC.style.display = "inline-block";
                myHeading4.textContent = playerPoints+' : '+computerPoints;
            } else {
                TraditionalGameRockClassC.style.display = "none";
                TraditionalGameScissorsClassC.style.display = "none";
                TraditionalGamePaperClassC.style.display = "inline-block";
                playerPoints=playerPoints+1;
                myHeading4.textContent = playerPoints+' : '+computerPoints;
            }

        } else if (Turnsleft == 1) { 
            Turnsleft=Turnsleft-1;
            TraditionalGameRockClass.style.display = "none";
            TraditionalGameScissorsClass.style.display = "none";
            TraditionalGamePaperClass.style.display = "none";
            TraditionalGameRockClassC.style.display = "none";
            TraditionalGameScissorsClassC.style.display = "none";
            TraditionalGamePaperClassC.style.display = "none";
            if (playerPoints==computerPoints) {
                myHeading3.textContent = 'Draw! Try again';
            } else if (playerPoints > computerPoints) {
                myHeading3.textContent = 'You win! Try again';
            } else {
                myHeading3.textContent = 'You lose! Try again';
            }
            myHeading4.textContent = playerPoints+' : '+computerPoints;
        }
        else {
            Turnsleft = 6
            playerPoints=0
            computerPoints=0
            myHeading4.textContent = playerPoints+' : '+computerPoints;
        }
})

// Lizard & Spock Game

paper2.addEventListener('click', () => {
    clickSound.play()
    if (Turnsleft> 1) { 
        Turnsleft=Turnsleft-1;
        myHeading3.textContent = 'Turns left: '+Turnsleft;
        LSGameRockClass.style.display = "none";
        LSGameScissorsClass.style.display = "none";
        LSGamePaperClass.style.display = "inline-block";
        LSGameLizardClass.style.display = "none";
        LSGameSpockClass.style.display = "none";
        let x = Math.floor((Math.random() * 5));
            if (x==0) {
                LSGameRockClassC.style.display = "inline-block";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                playerPoints=playerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==1) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "inline-block"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                computerPoints=computerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==2) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "inline-block";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==3) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "inline-block";
                LSGameSpockClassC.style.display = "none";
                computerPoints=computerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "inline-block";
                playerPoints=playerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;       
    }
        
    } else { 
        
        Turnsleft = 11;
        LSGameRockClass.style.display = "none";
        LSGameScissorsClass.style.display = "none";
        LSGamePaperClass.style.display = "none";
        LSGameLizardClass.style.display = "none";
        LSGameSpockClass.style.display = "none";
        LSGameRockClassC.style.display = "none";
        LSGameScissorsClassC.style.display = "none"; 
        LSGamePaperClassC.style.display = "none";
        LSGameLizardClassC.style.display = "none";
        LSGameSpockClassC.style.display = "none";

        if (playerPoints==computerPoints) {
            myHeading3.textContent = 'Draw! Try again';
        } else if (playerPoints > computerPoints) {
            myHeading3.textContent = 'You win! Try again';
        } else {
            myHeading3.textContent = 'You lose! Try again';
        }
        playerPoints=0
        computerPoints=0
        myHeading5.textContent = playerPoints+' : '+computerPoints;
    }
})

rock2.addEventListener('click', () => {
    clickSound.play()
    if (Turnsleft> 1) { 
        Turnsleft=Turnsleft-1;
        myHeading3.textContent = 'Turns left: '+Turnsleft;
        LSGameRockClass.style.display = "inline-block";
        LSGameScissorsClass.style.display = "none";
        LSGamePaperClass.style.display = "none";
        LSGameLizardClass.style.display = "none";
        LSGameSpockClass.style.display = "none";
        let x = Math.floor((Math.random() * 5));
            if (x==0) {
                LSGameRockClassC.style.display = "inline-block";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==1) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "inline-block"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                playerPoints=playerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==2) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "inline-block";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                computerPoints=computerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==3) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "inline-block";
                LSGameSpockClassC.style.display = "none";
                playerPoints=playerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "inline-block";
                computerPoints=computerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;       
    }
        
    } else { 
        
        Turnsleft = 11;
        LSGameRockClass.style.display = "none";
        LSGameScissorsClass.style.display = "none";
        LSGamePaperClass.style.display = "none";
        LSGameLizardClass.style.display = "none";
        LSGameSpockClass.style.display = "none";
        LSGameRockClassC.style.display = "none";
        LSGameScissorsClassC.style.display = "none"; 
        LSGamePaperClassC.style.display = "none";
        LSGameLizardClassC.style.display = "none";
        LSGameSpockClassC.style.display = "none";

        if (playerPoints==computerPoints) {
            myHeading3.textContent = 'Draw! Try again';
        } else if (playerPoints > computerPoints) {
            myHeading3.textContent = 'You win! Try again';
        } else {
            myHeading3.textContent = 'You lose! Try again';
        }
        playerPoints=0
        computerPoints=0
        myHeading5.textContent = playerPoints+' : '+computerPoints;
    }
})

scissors2.addEventListener('click', () => {
    clickSound.play()
    if (Turnsleft> 1) { 
        Turnsleft=Turnsleft-1;
        myHeading3.textContent = 'Turns left: '+Turnsleft;
        LSGameRockClass.style.display = "none";
        LSGameScissorsClass.style.display = "inline-block";
        LSGamePaperClass.style.display = "none";
        LSGameLizardClass.style.display = "none";
        LSGameSpockClass.style.display = "none";
        let x = Math.floor((Math.random() * 5));
            if (x==0) {
                LSGameRockClassC.style.display = "inline-block";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                computerPoints=computerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==1) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "inline-block"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==2) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "inline-block";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                playerPoints=playerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==3) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "inline-block";
                LSGameSpockClassC.style.display = "none";
                playerPoints=playerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "inline-block";
                computerPoints=computerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;       
    }
        
    } else { 
       
        Turnsleft = 11;
        LSGameRockClass.style.display = "none";
        LSGameScissorsClass.style.display = "none";
        LSGamePaperClass.style.display = "none";
        LSGameLizardClass.style.display = "none";
        LSGameSpockClass.style.display = "none";
        LSGameRockClassC.style.display = "none";
        LSGameScissorsClassC.style.display = "none"; 
        LSGamePaperClassC.style.display = "none";
        LSGameLizardClassC.style.display = "none";
        LSGameSpockClassC.style.display = "none";

        if (playerPoints==computerPoints) {
            myHeading3.textContent = 'Draw! Try again';
        } else if (playerPoints > computerPoints) {
            myHeading3.textContent = 'You win! Try again';
        } else {
            myHeading3.textContent = 'You lose! Try again';
        }
        playerPoints=0
        computerPoints=0
        myHeading5.textContent = playerPoints+' : '+computerPoints;
    }
})

lizard.addEventListener('click', () => {
    clickSound.play()
    if (Turnsleft> 1) { 
        Turnsleft=Turnsleft-1;
        myHeading3.textContent = 'Turns left: '+Turnsleft;
        LSGameRockClass.style.display = "none";
        LSGameScissorsClass.style.display = "none";
        LSGamePaperClass.style.display = "none";
        LSGameLizardClass.style.display = "inline-block";
        LSGameSpockClass.style.display = "none";
        let x = Math.floor((Math.random() * 5));
            if (x==0) {
                LSGameRockClassC.style.display = "inline-block";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                computerPoints=computerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==1) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "inline-block"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                computerPoints=computerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==2) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "inline-block";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                playerPoints=playerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==3) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "inline-block";
                LSGameSpockClassC.style.display = "none";
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "inline-block";
                playerPoints=playerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;       
    }
        
    } else { 
        
        Turnsleft = 11;
        LSGameRockClass.style.display = "none";
        LSGameScissorsClass.style.display = "none";
        LSGamePaperClass.style.display = "none";
        LSGameLizardClass.style.display = "none";
        LSGameSpockClass.style.display = "none";
        LSGameRockClassC.style.display = "none";
        LSGameScissorsClassC.style.display = "none"; 
        LSGamePaperClassC.style.display = "none";
        LSGameLizardClassC.style.display = "none";
        LSGameSpockClassC.style.display = "none";

        if (playerPoints==computerPoints) {
            myHeading3.textContent = 'Draw! Try again';
        } else if (playerPoints > computerPoints) {
            myHeading3.textContent = 'You win! Try again';
        } else {
            myHeading3.textContent = 'You lose! Try again';
        }
        playerPoints=0
        computerPoints=0
        myHeading5.textContent = playerPoints+' : '+computerPoints;
    }
})

spock.addEventListener('click', () => {
    clickSound.play()
    if (Turnsleft> 1) { 
        Turnsleft=Turnsleft-1;
        myHeading3.textContent = 'Turns left: '+Turnsleft;
        LSGameRockClass.style.display = "none";
        LSGameScissorsClass.style.display = "none";
        LSGamePaperClass.style.display = "none";
        LSGameLizardClass.style.display = "none";
        LSGameSpockClass.style.display = "inline-block";
        let x = Math.floor((Math.random() * 5));
            if (x==0) {
                LSGameRockClassC.style.display = "inline-block";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                playerPoints=playerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==1) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "inline-block"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                playerPoints=playerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==2) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "inline-block";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "none";
                computerPoints=computerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else if (x==3) {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "inline-block";
                LSGameSpockClassC.style.display = "none";
                computerPoints=computerPoints+1;
                myHeading5.textContent = playerPoints+' : '+computerPoints;
            } else {
                LSGameRockClassC.style.display = "none";
                LSGameScissorsClassC.style.display = "none"; 
                LSGamePaperClassC.style.display = "none";
                LSGameLizardClassC.style.display = "none";
                LSGameSpockClassC.style.display = "inline-block";
                myHeading5.textContent = playerPoints+' : '+computerPoints;       
    }
        
    } else { 
       
        Turnsleft = 11;
        LSGameRockClass.style.display = "none";
        LSGameScissorsClass.style.display = "none";
        LSGamePaperClass.style.display = "none";
        LSGameLizardClass.style.display = "none";
        LSGameSpockClass.style.display = "none";
        LSGameRockClassC.style.display = "none";
        LSGameScissorsClassC.style.display = "none"; 
        LSGamePaperClassC.style.display = "none";
        LSGameLizardClassC.style.display = "none";
        LSGameSpockClassC.style.display = "none";

        if (playerPoints==computerPoints) {
            myHeading3.textContent = 'Draw! Try again';
        } else if (playerPoints > computerPoints) {
            myHeading3.textContent = 'You win! Try again';
        } else {
            myHeading3.textContent = 'You lose! Try again';
        }
        playerPoints=0
        computerPoints=0
        myHeading5.textContent = playerPoints+' : '+computerPoints;
    }
})

