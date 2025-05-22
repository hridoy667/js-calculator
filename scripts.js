function clearDisplay(){
    const display = document.getElementById('display');
    display.value = '';
}
function deleteLast(){
    const display = document.getElementById('display');
    display.value=display.value.slice(0,-1)
}
function appendIntoDisplay(value){
let display = document.getElementById('display')
display.value=display.value+value
}

function calculateResult() {
    
    const display = document.getElementById('display');
    let expression = display.value.replace(/x/g, '*');

    try {
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// modal

document.addEventListener("DOMContentLoaded", function () {
    const openModalBTN = document.getElementById("openModalBTN");
    const closeModalBTN = document.getElementById("closeModalBTN");
    const modal = document.getElementById("myModal");

    openModalBTN.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModalBTN.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
