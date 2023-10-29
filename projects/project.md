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
