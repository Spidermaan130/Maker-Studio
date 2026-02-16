export function Canvas() {
    const container = document.createElement('div');
    container.className = 'canvas-container';

    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 500;

    container.appendChild(canvas);

    // Store canvas in window to access from App.js
    window.mainCanvas = canvas;
    window.ctx = canvas.getContext('2d');

    return container;
}
