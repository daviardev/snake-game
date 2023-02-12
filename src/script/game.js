import { $ } from '../utils/dom'

const playBoard = $('.play-board')

// Position of the food

let foodX
let foodY

// Position of the snake

let snakeX = 5
let snakeY = 10

// Velocity

let velocityX = 0
let velocityY = 0

// Random value 0 to 30 of the food position
const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1 // Change direction of the food in x
  foodY = Math.floor(Math.random() * 30) + 1 // Change direction of the food in y
}

// Change direction of the snake
const changeDirection = e => {
  if (e.key === 'ArrowUp') {
    velocityX = 0
    velocityY = -1
  } else if (e.key === 'ArrowDown') {
    velocityX = 0
    velocityY = 1
  } else if (e.key === 'ArrowLeft') {
    velocityX = -1
    velocityY = 0
  } else if (e.key === 'ArrowRight') {
    velocityX = 1
    velocityY = 0
  }
  initGame()
}

// Draw area of the scene
const initGame = () => {
  let htmlMarkup = `<div class='food' style='grid-area: ${foodY} / ${foodX}'></div>`

  snakeX += velocityX
  snakeY += velocityY

  htmlMarkup += `<div class='head' style='grid-area: ${snakeY} / ${snakeX}'></div>`
  playBoard.innerHTML = htmlMarkup
}

changeFoodPosition()
initGame()

document.addEventListener('keydown', changeDirection)
