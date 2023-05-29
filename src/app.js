/* eslint-disable */
import "bootstrap";
import "./style.css";

let numbersOfCards = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let randomNumber =
  numbersOfCards[Math.floor(Math.random() * numbersOfCards.length)];
let randomNumberElement = document.getElementById("randomNumber");
randomNumberElement.innerHTML = randomNumber;

let suits = [
  { suit: "♦", color: "red" },
  { suit: "♥", color: "red" },
  { suit: "♠", color: "black" },
  { suit: "♣", color: "black" }
];
let randomSuit = suits[Math.floor(Math.random() * suits.length)];
let randomSuitElement = document.querySelectorAll(".randomSuit");

randomSuitElement.forEach(element => {
  element.innerHTML = randomSuit.suit;
  element.style.color = randomSuit.color;
  randomNumberElement.style.color = randomSuit.color;
});

document.getElementById("button").addEventListener("click", function() {
  location.reload();
});

// Función para recargar la página

function recargarPagina() {
  location.reload();
}

setInterval(recargarPagina, 10000);

// Agregamos inputs para modificar altura

