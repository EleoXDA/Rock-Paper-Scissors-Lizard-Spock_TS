const startGameBtn = document.getElementById('start-game-btn')!; // excalamation mark tells TS that this cannot be null

const ROCK: string = 'ROCK';
const PAPER: string = 'PAPER';
const SCISSORS: string = 'SCISSORS';
const LIZARD: string = 'LIZARD';
const SPOCK: string = 'SPOCK';
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW: string = 'DRAW';
const RESULT_USER_WINS: string = 'USER_WINS';
const RESULT_BOT_WINS: string = 'BOT_WINS';

let gameIsRunning = false;

const getUserChoice = function (): string {
  const selection = prompt(
    `${ROCK}, ${PAPER}, ${SCISSORS}, ${LIZARD} or ${SPOCK} ?`,
    ''
  )!.toUpperCase(); // excalamation mark tells TS that this cannot be null
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS &&
    selection !== LIZARD &&
    selection !== SPOCK
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you!`);
    return DEFAULT_CHOICE;
  }
  return selection;
};

const getBotChoice = function (): string {
  const randomValue = Math.random();
  if (randomValue < 0.2) {
    return ROCK;
  } else if (randomValue < 0.4) {
    return PAPER;
  } else if (randomValue < 0.6) {
    return SCISSORS;
  } else if (randomValue < 0.8) {
    return LIZARD;
  } else {
    return SPOCK;
  }
};

const getWinner = function (
  bChoice: string, // by making sure that there could not be other types returned, we make sure that TS does not get annoyed by this
  uChoice = DEFAULT_CHOICE
): void {
  if (bChoice === uChoice) {
    RESULT_DRAW;
  } else if (
    (bChoice === ROCK && uChoice === PAPER) ||
    (bChoice === PAPER && uChoice === SCISSORS) ||
    (bChoice === LIZARD && uChoice === ROCK) ||
    (bChoice === SPOCK && uChoice === LIZARD) ||
    (bChoice === SCISSORS && uChoice === SPOCK) ||
    (bChoice === LIZARD && uChoice === SCISSORS) ||
    (bChoice === PAPER && uChoice === LIZARD) ||
    (bChoice === SPOCK && uChoice === PAPER) ||
    (bChoice === ROCK && uChoice === SPOCK) ||
    (bChoice === SCISSORS && uChoice === ROCK)
  ) {
    RESULT_USER_WINS;
  } else {
    RESULT_BOT_WINS;
  }
};

startGameBtn.addEventListener('click', function (): void {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const userSelection = getUserChoice();
  const botSelection = getBotChoice();
  let winner: any; // we needed to make
  if (userSelection) {
    winner = getWinner(botSelection, userSelection);
  } else {
    winner = getWinner(botSelection, userSelection);
  }
  let message = `You picked ${
    userSelection || DEFAULT_CHOICE
  }, bot picked ${botSelection}, so you `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_USER_WINS) {
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});
