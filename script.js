const priceOld = document.querySelector('.price__old');
const priceNew = document.querySelector('.price__new');
const timer = document.querySelector('.timer');
const firstSlide = document.querySelector('[data-slide="first"]');
const options = document.querySelector('.order__options');

const price = '250.00';
const new_price = '160.00';
const currency = 'R';

//Set price and discount price
function setPrice() {
  priceOld.innerHTML = `${currency} ${price}`;
  priceNew.innerHTML = `${currency} ${new_price}`;
}
setPrice();

// 04:51:16
const startHours = 4;
const startMinutes = 51;
const startSec = 16;

function setTimer(h, m, s) {
  let sec = s + m * 60 + h * 3600;

  const interval = setInterval(() => {
    //exit when 0
    sec === 0 && clearInterval(interval);

    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec % 3600) / 60);
    let seconds = Math.floor((sec % 3600) % 60);

    hours < 10 && (hours = '0' + hours);
    minutes < 10 && (minutes = '0' + minutes);
    seconds < 10 && (seconds = '0' + seconds);

    timer.innerHTML = `${hours}:${minutes}:${seconds}`;
    sec--;
  }, 1000);
}

setTimer(startHours, startMinutes, startSec);

function setSlide(num) {
  firstSlide.style.marginLeft = `-${num * (firstSlide.offsetWidth + 20)}px`;
}

//slider function
function setActive(e) {
  for (let child of options.children) {
    child.classList.remove('active');
  }
  e.target.classList.add('active');
}

options.addEventListener('click', setActive);
