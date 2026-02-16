import { addObject } from "../App.js";

export function Sidebar() {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';

    const addPlayerBtn = document.createElement('button');
    addPlayerBtn.textContent = "Add Player";
    addPlayerBtn.onclick = () => addObject('player');

    const addBallBtn = document.createElement('button');
    addBallBtn.textContent = "Add Ball";
    addBallBtn.onclick = () => addObject('ball');

    const aiBtn = document.createElement('button');
    aiBtn.textContent = "Generate Object (AI)";
    aiBtn.onclick = () => addObject('ai');

    sidebar.append(addPlayerBtn, addBallBtn, aiBtn);
    return sidebar;
}
