const birthForm = document.getElementById('birthForm');
const birthDate = document.getElementById('dateInput');
const resultBox = document.getElementById('boxes');

const createSquareGrid = () => {
    resultBox.innerHTML = ''; // Clear existing content
    for (let row = 0; row < 65; row++) {
        for (let col = 0; col < 72; col++) {
            const square = document.createElement('div');
            square.className = 'square-box';
            square.id = `square-${row}-${col}`;
            resultBox.appendChild(square);
        }
    }
}


const colorTheBoxes = (cRows, cColumns) => {
    for (let i = 0; i < cRows; i++) {
        let full = 72;
        if (i + 1 === cRows) {
            full = cColumns;
        }
        for (let j = 0; j < full; j++) {
            const targetSquare = document.getElementById(`square-${i}-${j}`);
            targetSquare.classList.add('lived');
            
        }
    }
}

createSquareGrid();

birthForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createSquareGrid();
    const inputDate = birthDate.value;

    const today = new Date();
    const birth = new Date(inputDate);
    const diff = today - birth;
    if (diff < 0) {
        alert("You can't be born in the future!");
        return;
    }
    const weekLived = Math.ceil(diff / (1000 * 60 * 60 * 24 * 7));

    const coloredRows = parseInt((weekLived + 72) / 72);
    const coloredColumns = weekLived % 72;
    
    colorTheBoxes(coloredRows, coloredColumns);
});