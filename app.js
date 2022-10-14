var startGameBtn = document.getElementById('start-game-btn'); // excalamation mark tells TS that this cannot be null
var ROCK = 'ROCK';
var PAPER = 'PAPER';
var SCISSORS = 'SCISSORS';
var LIZARD = 'LIZARD';
var SPOCK = 'SPOCK';
var DEFAULT_CHOICE = ROCK;
var RESULT_DRAW = 'DRAW';
var RESULT_USER_WINS = 'USER_WINS';
var RESULT_BOT_WINS = 'BOT_WINS';
var gameIsRunning = false;
var getUserChoice = function () {
    var selection = prompt("".concat(ROCK, ", ").concat(PAPER, ", ").concat(SCISSORS, ", ").concat(LIZARD, " or ").concat(SPOCK, " ?"), '').toUpperCase(); // excalamation mark tells TS that this cannot be null
    if (selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS &&
        selection !== LIZARD &&
        selection !== SPOCK) {
        alert("Invalid choice! We chose ".concat(DEFAULT_CHOICE, " for you!"));
        return DEFAULT_CHOICE;
    }
    return selection;
};
var getBotChoice = function () {
    var randomValue = Math.random();
    if (randomValue < 0.2) {
        return ROCK;
    }
    else if (randomValue < 0.4) {
        return PAPER;
    }
    else if (randomValue < 0.6) {
        return SCISSORS;
    }
    else if (randomValue < 0.8) {
        return LIZARD;
    }
    else {
        return SPOCK;
    }
};
var getWinner = function (bChoice, // by making sure that there could not be other types returned, we make sure that TS does not get annoyed by this
uChoice) {
    if (uChoice === void 0) { uChoice = DEFAULT_CHOICE; }
    if (bChoice === uChoice) {
        RESULT_DRAW;
    }
    else if ((bChoice === ROCK && uChoice === PAPER) ||
        (bChoice === PAPER && uChoice === SCISSORS) ||
        (bChoice === LIZARD && uChoice === ROCK) ||
        (bChoice === SPOCK && uChoice === LIZARD) ||
        (bChoice === SCISSORS && uChoice === SPOCK) ||
        (bChoice === LIZARD && uChoice === SCISSORS) ||
        (bChoice === PAPER && uChoice === LIZARD) ||
        (bChoice === SPOCK && uChoice === PAPER) ||
        (bChoice === ROCK && uChoice === SPOCK) ||
        (bChoice === SCISSORS && uChoice === ROCK)) {
        RESULT_USER_WINS;
    }
    else {
        RESULT_BOT_WINS;
    }
};
startGameBtn.addEventListener('click', function () {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    var userSelection = getUserChoice();
    var botSelection = getBotChoice();
    var winner; // we needed to make
    if (userSelection) {
        winner = getWinner(botSelection, userSelection);
    }
    else {
        winner = getWinner(botSelection, userSelection);
    }
    var message = "You picked ".concat(userSelection || DEFAULT_CHOICE, ", bot picked ").concat(botSelection, ", so you ");
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    }
    else if (winner === RESULT_USER_WINS) {
        message = message + 'won.';
    }
    else {
        message = message + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
});
