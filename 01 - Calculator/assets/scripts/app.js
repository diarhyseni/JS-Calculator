const defaultResult = 0;
let currentResult = defaultResult;
let logEnteries = [];
//ctrl+d per me selectu ni emer tvariables ku do te ndodhet per ndrrim me te shpejt
//ctrl+shift+l i selekton te gjith emertimet e njejta
//This is a function that extracts the user input from the input field
function getUserNumberInput() {
    return parseInt(usrInput.value);
}

//Generates and writes calculation log 
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //from vendor file 
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    //shift+ctrl+space per me qel autocomplete
    logEnteries.push(logEntry);
    //console.log(logEntry.operation);
    console.log(logEnteries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DEVIDE' ||
        !enteredNumber //RETURNS 0
    ) {
        return;
    }

    // if (
    //     calculationType === 'ADD' ||
    //     calculationType === 'SUBTRACT' ||
    //     calculationType === 'MULTIPLY' ||
    //     calculationType === 'DEVIDE'
    // ) {

    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DEVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');

}

function multiply() {
    calculateResult('MULTIPLY');

}

function divide() {
    calculateResult('DEVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);






// let calculationDescription = `(${defaultResult}  + 10) * 3 / 2 - 1`;
// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
// let errorMessage = 'An error \' \\ \n' +
//     'occcured!';