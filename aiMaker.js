// Simulate AI object generation
function generateCustomModel(name) {
  console.log(`Generating custom model: ${name}`);
  // Example: add model to game area manually
  const div = document.createElement('div');
  div.innerText = `Object: ${name}`;
  div.style.color = '#3b82f6';
  div.style.marginTop = '10px';
  document.getElementById('game-area').appendChild(div);
}

// Export for app.js usage
window.generateCustomModel = generateCustomModel;
