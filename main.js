window.onload = init;

let input1 = '';
let input2 = '';
let result = '';

function init() {
    reset();

    document.querySelector('#user-input1')
        .addEventListener('keyup', handleUserInput1);
    document.querySelector('#user-input2')
            .addEventListener('keyup', handleUserInput2);
    document.querySelector('#reset')
    document.querySelector('#user-input1')
        .addEventListener('keyup', handleUserInput3);
    document.querySelector('#user-input2')
            .addEventListener('keyup', handleUserInput4);
    document.querySelector('#reset')
    document.querySelector('#user-input1')
        .addEventListener('keyup', handleUserInput5);
    document.querySelector('#user-input2')
        .addEventListener('click', reset)
}

function reset() {
    input1 = '';
    input2 = '';
    input3 = '';
    input4 = '';
    input5 = '';
    result = '';

    document.querySelector('#user-input1')
        .value = input1;
    document.querySelector('#user-input2')
        .value = input2;
    document.querySelector('#user-input3')
        .value = input3;
    document.querySelector('#user-input4')
        .value = input4;
    document.querySelector('#user-input5')
        .value = input5;
    document.querySelector('#result')
        .innerText = result;
}

function handleUserInput1(event) {
    let userInput = event.target.value;

    input1 = userInput;
}

function handleUserInput2(event) {
    let userInput2 = event.target.value;

    input2 = userInput2;
}

function handleUserInput3(event) {
    let userInput3 = event.target.value;

    input3 = userInput3;
}
function handleUserInput4(event) {
    let userInput4 = event.target.value;

    input4 = userInput4;
}
function handleUserInput5(event) {
    let userInput5 = event.target.value;

    input5 = userInput5;
}

function printResult() {
    document.querySelector('#result').innerText = result;
}