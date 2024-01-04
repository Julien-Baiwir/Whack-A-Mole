function PickNumber() {
    const randomNumber = Math.floor(Math.random() * 12) + 1;
    const selectedElement = document.getElementById(randomNumber.toString());
    
    const previousSelected = document.querySelector('.grid-item.selected');
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    }
    
    if (selectedElement) {
        selectedElement.classList.add('selected');
    }
}
setInterval(PickNumber, 1000);


let score = 0;

document.body.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('grid-item') && clickedElement.classList.contains('selected')) {
        score++;
        document.getElementById('scoreValue').textContent = ' ' + score;
    }
});
