import { $ } from '../utils/dom'

const playBoard = $('.play-board')

// Position of the food

let foodX
let foodY

// Position of the snake

let snakeX = 5
let snakeY = 10

// Snake body
const snakeBody = []

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
}

// Draw area of the scene
const initGame = () => {
  let htmlMarkup = `<div class='food' style='grid-area: ${foodY} / ${foodX}'></div>`

  // Cambiar posición de la comida al tomar la manzana
  if (snakeX === foodX && snakeY === foodY) {
    changeFoodPosition()
    snakeBody.push([foodX, foodY])
    console.log(snakeBody)
  }

  snakeBody[0] = [snakeX, snakeY]

  snakeX += velocityX
  snakeY += velocityY

  for (let i = 0; i < snakeBody.length; i++) {
    htmlMarkup += `<div class='head' style='grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}'></div>`
  }

  playBoard.innerHTML = htmlMarkup
}

changeFoodPosition()
setInterval(initGame, 125) // Velocidad de la serpiente

document.addEventListener('keydown', changeDirection)
