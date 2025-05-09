const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const box = 20;
let snake = [{ x: box * 5, y: box * 5 }];
let direction = 'RIGHT';
let food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
let score = 0;
let game;

document.addEventListener('keydown', changeDirection);
document.getElementById('startBtn').addEventListener('click', startGame);

function startGame() {
    score = 0;
    document.getElementById('score').textContent = score;
    snake = [{ x: box * 5, y: box * 5 }];
    direction = 'RIGHT';
    food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
    clearInterval(game);
    game = setInterval(draw, 100);
}

function changeDirection(event) {
    if (event.keyCode == 37 && direction !== 'RIGHT') direction = 'LEFT';
    else if (event.keyCode == 38 && direction !== 'DOWN') direction = 'UP';
    else if (event.keyCode == 39 && direction !== 'LEFT') direction = 'RIGHT';
    else if (event.keyCode == 40 && direction !== 'UP') direction = 'DOWN';
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenhar a comida
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    // Mover a cobra
    const snakeX = snake[0].x;
    const snakeY = snake[0].y;

    if (direction === 'd') snake[0].x -= box;
    if (direction === 'w') snake[0].y -= box;
    if (direction === 'a') snake[0].x += box;
    if (direction === 's') snake[0].y += box;

    // Verificar se a cobra comeu a comida
    if (snake[0].x === food.x && snake[0].y === food.y) {
        score++;
        document.getElementById('score').textContent = score;
        food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box };
    } else {
        snake.pop();
    }

    // Adicionar a nova posição da cobra
    const newHead = { x: snake[0].x, y: snake[0].y };
    snake.unshift(newHead);

    // Desenhar a cobra
    ctx.fillStyle = 'green';
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    // Verificar colisão com as bordas ou com a própria cobra
    if (snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height || collision(snake)) {
        clearInterval(game);
        alert('Game Over! Sua pontuação: ' + score);
    }
}

function collision(snake) {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    return false;
}