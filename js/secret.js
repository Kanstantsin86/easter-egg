const menu = document.querySelector('nav');
const secret = document.querySelector('.secret');
let netology = 'YTNJKJUBZ';
let netString = '';
function nav(event) {
  if (event.altKey && event.ctrlKey && event.keyCode == 84) {
    menu.classList.toggle('visible');
  } else {
    netString += String.fromCharCode(event.keyCode);
    if (netology.indexOf(netString) != -1 && netString < netology) {
    } else if (netString == netology) {
      secret.classList.add('visible');
    } else {
      netString = '';
    }
  }
}

document.addEventListener('keydown', nav);