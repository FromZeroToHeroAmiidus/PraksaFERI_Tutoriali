const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        // eval je nevaren za produkcijo ... 
        // za ucne namene je OK
        display.value = eval(display.value);
    }
    catch(error){
        alert("Napaka ejga!");
        display.value = "Napaka!";
        display.style.backgroundColor = "red";
    }

}