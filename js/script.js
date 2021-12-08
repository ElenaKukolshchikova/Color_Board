const board = document.getElementById('board');
const SQUARE_NUMBER = 700;
const colors = [
    '#C0C0C0',
    '#FAEBD7',
    '#F0FFFF',
    '#D2691E',
    '#F5DEB3',
    '#4169E1',
    '#00CED1',
    '#228B22',
    '#7CFC00',
    '#7B68EE',
    '#DDA0DD',
    '#FFFACD',
    '#FF4500',
    '#FF69B4',
    '#FF0000',
];

for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(elem) {
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
    elem.style.backgroundColor = `rgb(35, 30, 35)`;
    elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}