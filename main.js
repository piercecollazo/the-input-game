// Global variables ftw

let input1 = '';
let input2 = '';
let input3 = '';
let input4 = '';
let input5 = '';
let result = '';
let switched = 1;
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

    document.querySelector('#enter')
    .addEventListener('click', printResult)
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
    // switcher now uses numbers to cycle between apps by incrementing up to a limit and then cycling back on button press.
    console.log(switched)
    
    if(switched > 3){
        switched = 1;
    } else if(switched === 1){
        heading = "Biggest Number!";
        switched++;
    } else if(switched === 2){
        heading = "Let's even the odds!";
        switched++;
    } else if(switched === 3){
        heading = "Global warming";
        switched=0;
    }
    // if(switched === false) {
    //     heading = "Let's even the odds!";
    //     switched = true;
    // } else {
    //     heading = 'Biggest number!';
    //     switched = false;
    // }

    changeHeading();
}

function changeHeading() {
    document.querySelector('#heading').innerText = heading;
}

function handleUserInput1(event) {
    let userInput = parseInt(event.target.value);

    input1 = isNaN(userInput) == false ? userInput : 'Goof';
}

function handleUserInput2(event) {
    let userInput = parseInt(event.target.value);

    input2 = isNaN(userInput) === false ? userInput : 'Goof';
}

function handleUserInput3(event) {
    let userInput = parseInt(event.target.value);

    input3 = isNaN(userInput) === false ? userInput : 'Goof';
}
function handleUserInput4(event) {
    let userInput = parseInt(event.target.value);

    input4 = isNaN(userInput) === false ? userInput : 'Goof';
}
function handleUserInput5(event) {
    let userInput = parseInt(event.target.value);

    input5 = isNaN(userInput) === false ? userInput : 'Goof';
}

function printResult() {
    let myNum = [input1,input2,input3,input4,input5];
    if(switched === 1){
        myNum.sort(function(a,b){return a - b});
        for(let i = 0; i < myNum.length; i++){
            switch(myNum[i]){
                case 'Goof':
                result = 'You need to enter only numbers!';
                i = myNum.length + 1;
                break;

                default:
                result = myNum[myNum.length-1];
                
            }
        }
    } else if(switched === 2){
        let oddNum = []
        let evenNum = []
        let filteredNum = myNum.filter(function(element){return element !== 'Goof'});
        for(let i = 0; i < filteredNum.length; i++){
            if(filteredNum[i] % 2 != 0){
                oddNum.push(filteredNum[i]);
                evenNum.push(filteredNum[i] + 1);
            } else{
                continue;
            }
            result = "Your entries were: " + filteredNum + ". " + "Your odd numbers were: " + oddNum + ", and have been evened out into " + evenNum + "!";
        }
    } else if(switched === 3){
        let myTempC = 0;
        let myTempF = (myTempC * 9 / 5) + 32;

        for(let i = 0; i < myNum.length; i++){
            myTempC += myNum[i];
        }

        if(myTempC >= 18 && < 25){
            result = 'Your settings made  it ' + myTempC + ' and ' + myTempF + ' Fahrenheit. Just right!'
        } else if(myTempC < 18){
            result = 'Your settings made  it ' + myTempC + ' and ' + myTempF + ' Fahrenheit. Too cold, turn it up!'
        } else if(myTempC > 25){
            result = 'Your settings made  it ' + myTempC + ' and ' + myTempF + ' Fahrenheit. Too hot, turn it down!'
        }

    }
    
    document.querySelector('#result').innerText = result;
}