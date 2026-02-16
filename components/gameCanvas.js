// This will hold 2D/3D canvas logic (Three.js or 2D canvas)
const gameArea = document.getElementById('game-area');

function initCanvas() {
  const canvas = document.createElement('canvas');
  canvas.width = gameArea.clientWidth;
  canvas.height = gameArea.clientHeight;
  gameArea.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#f5f5f5';
  ctx.fillRect(50, 50, 100, 100); // example square
}

initCanvas();
