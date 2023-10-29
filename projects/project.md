# DOM Projects 💻

## Project Link 🔗

[ClickHere](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Codes

## Project One 🔗

```Javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      if (body.style.backgroundColor != e.target.id) {
        body.style.backgroundColor = e.target.id;
      } else {
        body.style.backgroundColor = '#fff';
      }
    }
    if (e.target.id === 'white') {
      if (body.style.backgroundColor != e.target.id) {
        body.style.backgroundColor = e.target.id;
      } else {
        body.style.backgroundColor = '#fff';
      }
    }
    if (e.target.id === 'blue') {
      if (body.style.backgroundColor != e.target.id) {
        body.style.backgroundColor = e.target.id;
      } else {
        body.style.backgroundColor = '#fff';
      }
    }
    if (e.target.id === 'yellow') {
      if (body.style.backgroundColor != e.target.id) {
        body.style.backgroundColor = e.target.id;
      } else {
        body.style.backgroundColor = '#fff';
      }
    }
  });
});

```

## Project 2 🔗

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter vaild height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter vaild weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## Project 3 🔗

```javascript
const display = document.getElementById('clock');

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  display.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4 🔗

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const gameText = document.querySelector('#guess');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 0) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      gameText.innerHTML = 'Game Over😭';
      displayMessage(`Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    gameText.innerHTML = '🎇 Yow Win 🎇';
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    gameText.innerHTML = 'Guess a Number';
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```

## Project 5 🔗

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});
```

## Project 6 🔗

```Javacript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```
