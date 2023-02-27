//Restart game
var restart = document.querySelector('#b')

//Grab all squares
var square = document.querySelectorAll('td')

//Clear all squaresfunc
function clearBoard(){
for (var i = 0; i < square.length; i++) {

    square[i].textContent = '';
    
}

}

restart.addEventListener('click', clearBoard)

//Check the square marker

function changeMaker() {
    if (this.textContent === '') {
        this.textContent = 'X';
    }else if (this.textContent === 'X'){
        this.textContent = '0';
    }else {
        this.textContent = '';
    }
}

for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', changeMaker)
}












