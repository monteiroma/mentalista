let targetNumber = generateRandomNumber();
let attempts = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 1001);
}

function makeGuess() {
    const guessInput = document.getElementById('guessInput');
    const resultDisplay = document.getElementById('result');
    const attemptCount = document.getElementById('attemptCount');

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 1000) {
        resultDisplay.textContent = 'Por favor, insira um número válido entre 0 e 1000.';
        return;
    }

    attempts++;

    if (userGuess === targetNumber) {
        resultDisplay.textContent = `Parabéns! Você acertou o número ${targetNumber} em ${attempts} tentativas.`;
        resultDisplay.style.color = 'green';
        guessInput.disabled = true;
    } else {
        resultDisplay.textContent = `Tente novamente. ${userGuess} é ${userGuess < targetNumber ? 'menor' : 'maior'} que o número correto.`;
        resultDisplay.style.color = 'red';
    }

    attemptCount.textContent = attempts;
}

function newGame() {
    targetNumber = generateRandomNumber();
    attempts = 0;

    const guessInput = document.getElementById('guessInput');
    const resultDisplay = document.getElementById('result');
    const attemptCount = document.getElementById('attemptCount');

    guessInput.value = '';
    resultDisplay.textContent = '';
    attemptCount.textContent = '0';

    guessInput.disabled = false;
}