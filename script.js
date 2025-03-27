
function showCalculator() {

    document.getElementById("task2").classList.add("hidden");
    document.getElementById("task3").classList.add("hidden");
    document.getElementById("welcome").classList.add("hidden");  
    document.getElementById("calculator").classList.remove("hidden");
}


function showTask(taskId) {

    document.getElementById("calculator").classList.add("hidden");
    document.getElementById("welcome").classList.add("hidden"); 
    document.getElementById("task2").classList.add("hidden");
    document.getElementById("task3").classList.add("hidden");


    document.getElementById(taskId).classList.remove("hidden");
}


function showAuthorInfo() {
    document.getElementById("author-info").style.display = "block";
}

function hideAuthorInfo() {
    document.getElementById("author-info").style.display = "none";
}

let display = document.getElementById("display");

function appendToDisplay(value) {
    if (display.value === "0") display.value = "";
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        let result = new Function("return " + display.value)();
        display.value = result;
    } catch (error) {
        alert("Помилка у введених даних");
        clearDisplay();
    }
}

function reverseNumber() {
    const number = document.getElementById("number").value;
    const reversed = number.split('').reverse().join('');
    document.getElementById("resultTask2").textContent = "Число у зворотному порядку: " + reversed;
}

function sumAndProduct() {
    const number = document.getElementById("number2").value;
    let sum = 0;
    let product = 1;
    for (let i = 0; i < number.length; i++) {
        const digit = parseInt(number.charAt(i));
        sum += digit;
        product *= digit;
    }
    document.getElementById("resultTask3").textContent = `Сума цифр: ${sum}, Добуток цифр: ${product}`;
}
