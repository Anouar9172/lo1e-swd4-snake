let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');

let snakeX = 200;
let snakeY = 200;

// Draw the background
function drawBackrgound(){
  context.fillStyle = "black";
  context.fillRect(0, 0, 400, 400);
}

// Draw the snake
function drawSnake(){
  context.fillStyle = 'white';
  context.fillRect(snakeX, snakeY, 20, 20);
}

function update() {
  snakeX += 20;
  drawBackrgound();
  drawSnake();
}
drawBackrgound();
drawSnake();
setInterval(update,1000);
