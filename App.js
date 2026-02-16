import { Header } from './components/Header.js';
import { Sidebar } from './components/Sidebar.js';
import { Canvas } from './components/Canvas.js';
import { generateObject } from './aiMaker.js';

const root = document.getElementById('root');

const header = Header();
const sidebar = Sidebar();
const canvas = Canvas();

root.append(sidebar, canvas);
document.body.prepend(header);

// List of objects in the canvas
window.objects = [];

export function addObject(type) {
    const finalType = generateObject(type); // AI can modify type

    const ctx = window.ctx;
    const x = Math.random() * (window.mainCanvas.width - 50);
    const y = Math.random() * (window.mainCanvas.height - 50);

    let color = 'black';
    if (finalType === 'player') color = 'blue';
    if (finalType === 'ball') color = 'red';
    if (finalType === 'goal') color = 'green';

    ctx.fillStyle = color;
    ctx.fillRect(x, y, 50, 50);

    window.objects.push({ type: finalType, x, y, color });
}
