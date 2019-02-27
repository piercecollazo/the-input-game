let input1 = '';
let input2 = '';
let input3 = '';
let input4 = '';
let input5 = '';
let result = '';
let switched = false;
let heading = '';

window.onload = init;

function init() {
    reset();

    document.querySelector('#user-input1')
        .addEventListener('keyup', handleUserInput1);

    document.querySelector('#user-input2')
            .addEventListener('keyup', handleUserInput2);

    document.querySelector('#user-input3')
        .addEventListener('keyup', handleUserInput3);

    document.querySelector('#user-input4')
            .addEventListener('keyup', handleUserInput4);

    document.querySelector('#user-input5')
        .addEventListener('keyup', handleUserInput5);

    document.querySelector('#reset')
        .addEventListener('click', reset)

    document.querySelector('#switch')
        .addEventListener('click', switchGears)
}

function reset() {
     input1 = '';
     input2 = '';
     input3 = '';
     input4 = '';
     input5 = '';
     result = '';

    document.querySelector('#user-input1').value = input1;
    document.querySelector('#user-input2').value = input2;
    document.querySelector('#user-input3').value = input3;
    document.querySelector('#user-input4').value = input4;
    document.querySelector('#user-input5').value = input5;
    document.querySelector('#result').innerText = result;
}

function switchGears() {
    switched = !switched;

    if(switched) {
        heading = '';
    } else {
        heading = '';
    }

    reset();
}

function handleUserInput1(event) {
    let userInput = event.target.value;

    if(switched) {
        // code for one version here
    } else {
        // code for other version here
    }
}

function handleUserInput2(event) {
    let userInput2 = event.target.value;
}

function handleUserInput3(event) {
    let userInput3 = event.target.value;
}
function handleUserInput4(event) {
    let userInput4 = event.target.value;
}
function handleUserInput5(event) {
    let userInput5 = event.target.value;
}

function printResult() {
    document.querySelector('#result').innerText = result;
}