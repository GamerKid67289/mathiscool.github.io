const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const blockWidth = 40;
const blockHeight = 40;
const blocks = [];
let currentIndex = 0;

function createBlock(x, color) {
  return {
    x,
    y: canvas.height - blockHeight,
    width: blockWidth,
    height: blockHeight,
    color,
  };
}

function drawBlock(block) {
  ctx.fillStyle = block.color;
  ctx.fillRect(block.x, block.y, block.width, block.height);
}

function moveBlocks() {
  currentIndex++;
  if (currentIndex >= blocks.length) {
    currentIndex = 0;
  }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < blocks.length; i++) {
    drawBlock(blocks[i]);
  }
}

function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}

function initializeGame() {
  blocks.push(createBlock(200, "red"));
  blocks.push(createBlock(300, "blue"));
  blocks.push(createBlock(400, "red"));
  blocks.push(createBlock(500, "blue"));

  gameLoop();
}

document.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    if (blocks[currentIndex].color === "red") {
      moveBlocks();
    }
  }
});

initializeGame();
