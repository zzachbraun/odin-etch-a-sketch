const container = document.querySelector('.container');
let boxes = document.querySelectorAll('.box');
let color = '#000000';
drawGrid(16);

function drawGrid(size) {
    container.replaceChildren();

    for (let i = 0; i < size; i++) {
        let column = document.createElement('div');
        column.classList.add('flex-container');
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.classList.add('box');

            column.appendChild(div);
        }
        container.appendChild(column);
    }
    boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = color;
        });
    });
}

const colorButton = document.querySelector('input');
colorButton.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = colorButton.value;
            color = colorButton.value;
        });
    });
})


const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.style.backgroundColor = 'white';
    });
});

const sizeButton = document.querySelector('.box-size');
sizeButton.addEventListener('click', () => {
    let boxSize = prompt('What size of a grid do you want? (Max 100): ');
    if (boxSize > 100) boxSize = 100;
    drawGrid(boxSize);
})