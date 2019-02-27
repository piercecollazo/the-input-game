// Global variables ftw

let input1 = '';
let input2 = '';
let input3 = '';
let input4 = '';
let input5 = '';
let result = '';
let switched = false;
let heading = ''; // What should the heading start out as?

// Set init to run when the window loads.
window.onload = init;

function init() {
    // Make sure we're dealing with a clean slate.
    reset();

    // Set event handlers.
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

    
    // If you feel like it, you can comment out the five queries above and use the magical one below!
    // Feel free to ask how it works.

    // document.querySelectorAll('.input').forEach(function(node) { node.value = ''});

    document.querySelector('#result').innerText = result;
}

function switchGears() {
    // TODO: change the value:of 'switched' to the opposite of what it currently is

    if(switched) {
        heading = ''; // TODO: change the heading to whatever would be appropriate for YOUR app.
    } else {
        heading = ''; // TODO: change the heading to whatever would be appropriate for your OTHER app.
    }

    changeHeading();
}

function changeHeading() {
    document.querySelector('#heading').innerText = heading;
}

function handleUserInput1(event) {
    let userInput = event.target.value;

    if(switched) {
        // TODO: handle the input for one app version
    } else {
        // TODO:  handle the input for one app version
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