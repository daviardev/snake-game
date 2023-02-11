import { $ } from '../utils/dom'

const playBoard = $('.play-board')

let foodX
let foodY

// Random value 0 to 30 of the food position
const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1 // Change direction of the food in x
  foodY = Math.floor(Math.random() * 30) + 1 // Change direction of the food in y
}

// Draw area of the scene
const initGame = () => {
  const htmlMarkup = `<div class='food' style='grid-area: ${foodY} / ${foodX}' />`
  playBoard.innerHTML = htmlMarkup
}

changeFoodPosition()
initGame()
