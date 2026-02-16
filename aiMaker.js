export function generateObject(type) {
    // Simple AI stub
    if (type === 'ai') {
        const objects = ['player', 'ball', 'goal'];
        const choice = objects[Math.floor(Math.random() * objects.length)];
        return choice;
    }
    return type;
}
