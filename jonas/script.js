"use strict";

const greeting1 = document.querySelector(".greeting-1");

const text1 = `Happy birthday, Jonas!!!!`;

let index = 0;

function writeText1() {
  greeting1.innerText = text1.slice(0, index);
  index++;

  if (index > text1.length - 1) {
    index = 0;
  }
}

setInterval(writeText1, 200);

function createRain() {
  const rain = document.createElement("div");
  rain.classList.add("rain");
  rain.innerText = "JJ is 3🎈❤👏";
  rain.style.right = Math.random() * 100 + "vw";
  rain.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.body.appendChild(rain);

  setTimeout(() => {
    rain.remove();
  }, 5000);
}

setInterval(createRain, 300);
