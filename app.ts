const startGameBtn = document.getElementById('start-game-btn')!;

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const LIZARD = 'LIZARD';
const SPOCK = 'SPOCK';
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_USER_WINS = 'USER_WINS';
const RESULT_BOT_WINS = 'BOT_WINS';

let gameIsRunning = false;

const getUserChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER}, ${SCISSORS}, ${LIZARD} or ${SPOCK} ?`,
    ''
  )!.toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS &&
    selection !== LIZARD &&
    selection !== SPOCK
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getBotChoice = () => {
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

const getWinner = (
  bChoice: string,
  uChoice = DEFAULT_CHOICE // when userChoice is undefined, DEFAULT_CHOICE will override it
) =>
  bChoice === uChoice
    ? RESULT_DRAW
    : (bChoice === ROCK && uChoice === PAPER) ||
      (bChoice === PAPER && uChoice === SCISSORS) ||
      (bChoice === LIZARD && uChoice === ROCK) ||
      (bChoice === SPOCK && uChoice === LIZARD) ||
      (bChoice === SCISSORS && uChoice === SPOCK) ||
      (bChoice === LIZARD && uChoice === SCISSORS) ||
      (bChoice === PAPER && uChoice === LIZARD) ||
      (bChoice === SPOCK && uChoice === PAPER) ||
      (bChoice === ROCK && uChoice === SPOCK) ||
      (bChoice === SCISSORS && uChoice === ROCK)
    ? RESULT_USER_WINS
    : RESULT_BOT_WINS;

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const userSelection = getUserChoice(); // might be undefined when default option is removed
  const botSelection = getBotChoice();
  let winner;
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
