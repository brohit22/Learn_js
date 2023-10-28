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
