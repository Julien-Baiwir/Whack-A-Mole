// ---- random background ---

function PickNumber() {
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    const selectedElement = document.getElementById(randomNumber.toString());
    
    const previousSelected = document.querySelector('.grid-item.red');
    if (previousSelected) {
        previousSelected.classList.remove('red');
    }
    
    if (selectedElement) {
        selectedElement.classList.add('red');
    }
}

setInterval(PickNumber, 1000);

// -----ajoute un score ---

let score = 0;

document.body.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('grid-item') && clickedElement.classList.contains('red')) {
        score++;
        document.getElementById('scoreValue').textContent = ' ' + score;
    }
});