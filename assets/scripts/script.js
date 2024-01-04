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
