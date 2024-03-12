import Rooster from "./rooster.js";
import { ROOSTERS_ARRAY } from "./roosters-data.js";
console.log(ROOSTERS_ARRAY);

const roosterOneButtonEl = document.getElementById("galo-1-btn");
const roosterTwoButtonEl = document.getElementById("galo-2-btn");
const roosterOneImageEl = document.getElementById("galo-1-img");
const roosterTwoImageEl = document.getElementById("galo-2-img");
const resultTextEl = document.getElementById("result");

let roosterOneIndex = Math.floor(Math.random() * ROOSTERS_ARRAY.length);
let roosterTwoIndex = Math.floor(Math.random() * ROOSTERS_ARRAY.length);

while (roosterOneIndex == roosterTwoIndex) {
  // não gerar galos iguais
  roosterTwoIndex = Math.floor(Math.random() * ROOSTERS_ARRAY.length);
}

const roosterOne = ROOSTERS_ARRAY[roosterOneIndex];
const roosterTwo = ROOSTERS_ARRAY[roosterTwoIndex];

console.log(`${roosterOne.name} vs ${roosterTwo.name}`);

/**
 * @param {Rooster} rooster
 * @param {HTMLImageElement} imgEl
 */
function defineRoosterImageAttributes(rooster, imgEl) {
  imgEl.setAttribute("src", rooster.image_url);
  imgEl.setAttribute("alt", `Galo de briga - ${rooster.name}`);
  imgEl.setAttribute("title", `Galo - ${rooster.name}`);
}

function clearResults() {
  resultTextEl.innerHTML = "";
  roosterOneImageEl.classList.remove("perdedor");
  roosterOneImageEl.classList.remove("vencedor");
  roosterTwoImageEl.classList.remove("perdedor");
  roosterTwoImageEl.classList.remove("vencedor");
}

function makeButtonsDisabled(boolean) {
  if (boolean) {
    roosterOneButtonEl.setAttribute("disabled", true);
    roosterTwoButtonEl.setAttribute("disabled", true);
  } else {
    roosterOneButtonEl.removeAttribute("disabled");
    roosterTwoButtonEl.removeAttribute("disabled");
  }
}

/**
 * @param {Rooster} rooster
 * @param {HTMLButtonElement} buttonEl
 * @param {number} roosterNumber
 */
function defineRoosterButtonAttributes(rooster, buttonEl, roosterNumber) {
  buttonEl.innerText = rooster.name;
  buttonEl.title = `Clique para apostar no ${rooster.name}`;

  buttonEl.addEventListener("click", () => {
    clearResults();
    makeButtonsDisabled(true);
    setTimeout(() => apostar(roosterNumber), 2000);
  });
}

defineRoosterImageAttributes(roosterOne, roosterOneImageEl);
defineRoosterImageAttributes(roosterTwo, roosterTwoImageEl);

defineRoosterButtonAttributes(roosterOne, roosterOneButtonEl, 1);
defineRoosterButtonAttributes(roosterTwo, roosterTwoButtonEl, 2);

function apostar(escolha) {
  const resultado = Math.random();
  let winnerRooster = "";
  let winnerRoosterNumber = 0;
  let message = "";

  if (resultado < 0.45) {
    winnerRooster = roosterOne.name;
    roosterOneImageEl.classList.add("vencedor");
    roosterTwoImageEl.classList.add("perdedor");
    winnerRoosterNumber = 1;
  } else if (resultado < 0.9) {
    winnerRooster = roosterTwo.name;
    roosterTwoImageEl.classList.add("vencedor");
    roosterOneImageEl.classList.add("perdedor");
    winnerRoosterNumber = 2;
  } else {
    winnerRooster = "draw";
  }

  if (winnerRooster == "draw") {
    message = "deu empate, os dois galos perderam na briga";
    roosterOneImageEl.classList.add("perdedor");
    roosterTwoImageEl.classList.add("perdedor");
  } else {
    message = `O vencedor foi: ${winnerRooster}`;
  }

  if (escolha == winnerRoosterNumber) {
    message += "<br> Você ganhou a sua aposta 😎";
  } else {
    message += "<br> Você perdeu a sua aposta 😪";
  }

  message +=
    "<br><br> <p class='result'>Quer tentar outra aposta? <a onclick='window.location.reload()' href='#'>Clique aqui</a></p>";

  resultTextEl.innerHTML = `<br> ${message}`;
  makeButtonsDisabled(false);
}
