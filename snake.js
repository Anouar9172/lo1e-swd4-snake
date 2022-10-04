let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");

let snakeX = 200;
let snakeY = 200;
let snake = [
    {
        x: 200,
        y: 200
    },
    {
        x: 220,
        y: 200
    }
];

let foodX;
let foodY;

let direction = null;

// Draw the background
function drawBackground() {
    context.fillStyle = "black";
    context.fillRect(0, 0, 400, 400);
}

// Draw the snake
function drawSnake() {
    context.fillStyle = "white";

    for (let index = 0; index < snake.length; index++) {
        context.fillRect(snake[index].x, snake[index].y, 20, 20);
    }
}

function update() {

    let tailIndex = snake.length - 1;
    let tailX = snake[tailIndex].x;
    let tailY = snake[tailIndex].y;

    let headX = snake[0].x;
    let headY = snake[0].y;



    if (direction == "right") {
        if (headX < 380) {
            headX.x += 20;
        } else {
            gameOver();
        }

    } else if (direction == "left") {
        if (headX > 0) {
            headX -= 20;
        } else {
            gameOver();
        }

    } else if (direction == "up") {
        if (headY > 0) {
            headY -= 20;
        } else {
            gameOver();
        }

    } else if (direction == "down") {
        if (headY < 380) {
            headY += 20;
        } else {
            gameOver();
        }
    }

    if(direction != null) {
        for(let index = snake.length - 1; index > 0; index--) {
            snake[index].x = snake[index - 1].x;
            snake[index].y = snake[index - 1].y;
        }
    }

    snake[0].x = headX;
    snake[0].y = headY;

    // Appel eten als positie snake en food zelfde zijn.
    if (foodX == snake[0].x && foodY == snake[0].y) {
        // Score ophogen
        // Groeien

        snake.push({
            x: tailX,
            y: tailY
        });

        spawnFood();
    }

    drawBackground();
    drawSnake();
    drawFood();
}

function changeDirection(event) {
    if (event.code == "ArrowUp") {
      if (direction != 'down') {
        direction = "up";
      }
    } else if (event.code == "ArrowRight") {
      if (direction != 'left') {
        direction = "right";
      }
    } else if (event.code == "ArrowLeft") {
      if (direction != 'right') {
        direction = "left";
      }
    } else if (event.code == "ArrowDown") {
      if (direction != 'up') {
        direction = "down";
      }
    }
}

function gameOver() {
    direction = null;
    alert("Game Over!");
}

// Geeft de appel een nieuwe plek.
function spawnFood() {
    foodX = Math.floor(Math.random() * 20) * 20;
    foodY = Math.floor(Math.random() * 20) * 20;
}

// Tekent de appel
function drawFood() {
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, 20, 20);
}

drawBackground();
drawSnake();
setInterval(update, 500);
addEventListener("keydown", changeDirection);
spawnFood();
