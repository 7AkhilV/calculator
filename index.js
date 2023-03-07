var screen = document.getElementById("screen");
function btnClick(value){
    screen.value+=value
}

function clearScreen(){
    screen.value=""
}

function finalResult(){
    var result = eval(screen.value)
    screen.value = result
}

alert("Type the numbers to calculate")