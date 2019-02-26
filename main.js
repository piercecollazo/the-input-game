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
        .addEventListener('click', reset)
}

function reset() {
    input1 = '';
    input2 = '';
    result = '';

    document.querySelector('#user-input1')
        .value = input1;
    document.querySelector('#user-input2')
        .value = input2;
    document.querySelector('#result')
        .innerText = result;
}

function handleUserInput1(event) {
    let userInput = event.target.value;

    input1 = userInput;

    decideWinner();
}

function handleUserInput2(event) {
    let userInput = event.target.value;

    input2 = userInput;

    decideWinner();
}

function decideWinner() {
    if (input1 === 'Pikachu' && input2 === 'Charizard') {
        result = 'Trainer 1 Wins!';
    }

    if (input1 === 'Charizard' && input2 === 'Pikachu') {
        result = 'Trainer 2 wins!';b
    }

    if (input1 === 'Pikachu' && input2 === 'Mew') {
        result = 'Trainer 2 wins!';
    }

    if (input1 === 'Mew' && input2 === 'Pikachu') {
        result = 'Trainer 1 wins!';
    }

    if (input1 === 'Charizard' && input2 === 'Mew') {
        result = 'Trainer 2 wins!';
    }

    if (input1 === 'Mew' && input2 === 'Charizard') {
        result = 'Trainer 1 wins!';
    }

    printResult();
}

function printResult() {
    document.querySelector('#result').innerText = result;
}